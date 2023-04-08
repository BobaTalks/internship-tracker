import requests
from bs4 import BeautifulSoup

# URLs for FAANG internship listings
urls = {
    'Facebook': 'https://www.facebook.com/careers/jobs?search_text=internship',
    'Amazon': 'https://www.amazon.jobs/en/search?base_query=internship',
    'Apple': 'https://jobs.apple.com/en/search?search=internship',
    'Netflix': 'https://jobs.netflix.com/search?q=internship',
    'Google': 'https://careers.google.com/jobs/results/?q=internship'
}

def get_facebook_internships(soup):
    internships = []
    for internship in soup.select('.fb-job-result__title'):
        internships.append(internship.text.strip())
    return internships

def get_amazon_internships(soup):
    internships = []
    for internship in soup.select('.job-link'):
        internships.append(internship.text.strip())
    return internships

def get_apple_internships(soup):
    internships = []
    for internship in soup.select('.job-title'):
        internships.append(internship.text.strip())
    return internships

def get_netflix_internships(soup):
    internships = []
    for internship in soup.select('.posting-title'):
        internships.append(internship.text.strip())
    return internships

def get_google_internships(soup):
    internships = []
    for internship in soup.select('.job-result-card__title'):
        internships.append(internship.text.strip())
    return internships

def scrape_internships(url, company):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')

    if company == 'Facebook':
        return get_facebook_internships(soup)
    elif company == 'Amazon':
        return get_amazon_internships(soup)
    elif company == 'Apple':
        return get_apple_internships(soup)
    elif company == 'Netflix':
        return get_netflix_internships(soup)
    elif company == 'Google':
        return get_google_internships(soup)

def get_internships():
    internships = {}
    for company, url in urls.items():
        internships[company] = scrape_internships(url, company)
    return internships