import requests
from bs4 import BeautifulSoup

# URLs for FAANG internship listings
urls = {
    'Facebook': 'https://www.facebook.com/careers/jobs?search_text=internship',
    'Amazon': 'https://www.amazon.jobs/en/search?base_query=internship',
    'Apple': 'https://jobs.apple.com/en-ca/search?team=internships-STDNT-INTRN',
    'Netflix': 'https://jobs.netflix.com/search?q=internship',
    'Google': 'https://careers.google.com/jobs/results/?q=internship'
}

def get_facebook_internships(soup):
    internship_titles = [container.text for container in soup.select('._af0h a:first-child div:first-child div:first-child div:first-child div:first-child')]
    internship_locations = [container.get('data-tooltip-content') for container in soup.select('._8seh div:first-child div:first-child div:first-child')]
    internship_links = ['https://www.metacareers.com' + container.get('href') for container in soup.select('._af0h a:first-child')]
    internships = [(title, location.split('\n'), link) for title in internship_titles for location in internship_locations for link in internship_links]
    return internships

def get_amazon_internships(soup):
    internship_titles = [container.text for container in soup.select('.row div:first-child')]
    internships = []
    return internships

def get_apple_internships(soup):
    internship_titles = [i.text for i in soup.select('.table--advanced-search__title')]
    internship_locations = [i.text for i in soup.select('.table-col-2 span:first-child')]
    internship_links = ['https://jobs.apple.com' + container.get('href') for container in soup.select('.table--advanced-search__title')]
    internships = [(title, location, link) for title in internship_titles for location in internship_locations for link in internship_links]
    return internships

def get_netflix_internships(soup):  
    internship_titles = [i for i in soup.find_all('.e1rpdjew0')]
    internships = []
    return internships

def get_google_internships(soup):
    internships = soup.select('.gc-card__title')
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

for company, url in urls.items():
    print(f'{company} internships:')
    internships = scrape_internships(url, company)
    for i, internship in enumerate(internships, 1):
        print(f'{i}. {internship}')
    print('\n')