import requests
from bs4 import BeautifulSoup

def scrape_news_headlines(url):
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        headlines = soup.find_all('h2', class_='headline')
        for headline in headlines:
            print("News Headline:", headline.text.strip())
    else:
        print("Failed to fetch the webpage.")

def scrape_product_prices(url):
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        prices = soup.find_all('span', class_='price')
        for price in prices:
            print("Product Price:", price.text.strip())
    else:
        print("Failed to fetch the webpage.")

def scrape_weather_data(url):
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        weather_info = soup.find('div', class_='weather-info')
        if weather_info:
            temperature = weather_info.find('span', class_='temperature').text.strip()
            condition = weather_info.find('span', class_='condition').text.strip()
            print("Weather:", temperature, condition)
        else:
            print("Weather information not found on the webpage.")
    else:
        print("Failed to fetch the webpage.")

# Example usage:
news_url = "https://news.google.com/"
product_prices_url = "https://www.amazon.com/"
weather_url = "https://www.weather.com/"

print("Scraping News Headlines:")
scrape_news_headlines(news_url)

print("\nScraping Product Prices:")
scrape_product_prices(product_prices_url)

print("\nScraping Weather Data:")
scrape_weather_data(weather_url)