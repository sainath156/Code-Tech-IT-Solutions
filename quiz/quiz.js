const questions =[

    {

       question : "Which Indian state is known as the Land of Five Rivers?",
       answers :[
        {text : "Rajasthan",correct: false},
        {text : "Punjab",correct: true},
        {text : "Gujarat",correct: false},
        {text : "Karnataka",correct: false}

       ]
    },


    {
        question : "Who wrote the Indian national anthem,Jana Gana Mana?",
        answers :[
         {text : "Rabindranath Tagore",correct: true},
         {text : "Mahatma Gandhi",correct: false},
         {text : "Jawaharlal Nehru",correct: false},
         {text : "Subhas Chandra Bose",correct: false}
 
        ] 
     },
     {
        question : "Which famous scientist developed the theory of relativity?",
        answers :[
         {text : "Isaac Newton",correct: false},
         {text : "Albert Einstein",correct: true},
         {text : "Stephen Hawking",correct: false},
         {text : " Niels Bohr",correct: false}
 
        ] 
     },
     {
        question : "Which country is the largest by land area?",
        answers :[
         {text : "China",correct: false},
         {text : "India",correct: false},
         {text : "Canada",correct: false},
         {text : "Russia",correct: true}
 
        ]
     },

     {
        question : "What does the abbreviation URL stand for?",
        answers :[
         {text : "Universal Resource Language",correct: false},
         {text : "Uniform Resource Locator",correct: true},
         {text : "United Resource Language",correct: false},
         {text : "Universal Reference Locator",correct: false}
 
        ]
     },
];
   

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
              
       currentQuestionIndex =0;
       score =0;
       nextButton.innerHTML = "Next";
       showQuestion();


}

function showQuestion(){
                    
            resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " +currentQuestion.question;

    currentQuestion.answers.forEach(answer => 
        {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);

            if(answer.correct)
            {
                button.dataset.correct = answer.correct;

            }


            button.addEventListener("click",selectAnswer);



        }) ;

    }         
    

    function resetState()
    {
        nextButton.style.display = "none";
        while(answerButtons.firstChild){
              
            answerButtons.removeChild(answerButtons.firstChild);

        }
    }

      function selectAnswer(e)
      {

        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";

        if(isCorrect){

            selectedBtn.classList.add("correct");
            score++;

        }
        else
        {
            selectedBtn.classList.add("incorrect");

        }

        Array.from(answerButtons.children).forEach(button => {

            if(button.dataset.correct === "true")
            {
                button.classList.add("correct");

            }
            button.disabled = true;


        });

        nextButton.style.display = "block";
      }
          

      function handleNextButton()
      {
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length)
        {
            showQuestion();
        }
        else{
            showScore();
        }
      }

      function showScore()
      {
        resetState();
         
        questionElement.innerHTML =   `you scored ${score} out of ${questions.length} ! `;
        nextButton.innerHTML = "Play Again"; 

        nextButton.style.display = "block";

    }
       
      nextButton.addEventListener("click", ()=> {
                         
        if(currentQuestionIndex < questions.length)
        {
            handleNextButton();

        }
        else{
            startQuiz();
        }

      })
    startQuiz();
       
 





