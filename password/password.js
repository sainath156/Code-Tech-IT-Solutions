password.js
async function fetchRandomImage() {
  const response = await fetch('https://source.unsplash.com/featured/?password');
  const imageUrl = response.url;
  document.body.style.backgroundImage = `url('${imageUrl}')`;
}

// Call fetchRandomImage function when the page loads
window.onload = fetchRandomImage;

// Function to generate password
function generatePassword() {
  const length = document.getElementById('length').value;
  const includeUppercase = document.getElementById('includeUppercase').checked;
  const includeNumbers = document.getElementById('includeNumbers').checked;
  const includeSymbols = document.getElementById('includeSymbols').checked;
  const complexity = document.getElementById('complexity').value;

  let charset = 'abcdefghijklmnopqrstuvwxyz';
  let password = '';

  // Adjust complexity based on selected option
  if (complexity === 'medium') {
    // Include uppercase letters, numbers, and symbols for medium complexity
    charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    charset += '0123456789';
    charset += '!@#$%^&*()-_=+';
  } else if (complexity === 'high') {
    // Include uppercase letters, lowercase letters, numbers, and symbols for high complexity
    charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    charset += 'abcdefghijklmnopqrstuvwxyz';
    charset += '0123456789';
    charset += '!@#$%^&*()-_=+';
  }

  // Generate password
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  document.getElementById('password').value = password;
}