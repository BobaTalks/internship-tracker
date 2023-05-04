import requests
from bs4 import BeautifulSoup

# URLs for FAANG internship listings
urls = {
    'Facebook': 'https://www.metacareers.com/jobs/?is_leadership=0&is_in_page=0',
    'Amazon': 'https://www.amazon.jobs/en/search?base_query=internship',
    'Apple': 'https://jobs.apple.com/en-ca/search?location=canada-CANC+united-states-USA+mexico-MEXC&team=internships-STDNT-INTRN',
    'Netflix': 'https://jobs.netflix.com/search?q=internship',
    'Google': 'https://careers.google.com/jobs/results/?q=internship'
}

def get_facebook_internships(soup):
    pass

def get_amazon_internships(soup):
    pass

def get_apple_internships(soup):
    internship_titles = [i.text for i in soup.select('.table--advanced-search__title')]
    internship_locations = [i.text for i in soup.select('.table-col-2 span:first-child')]
    internship_links = ['https://jobs.apple.com' + container.get('href') for container in soup.select('.table--advanced-search__title')]
    internships = [(internship_titles[i], internship_locations[i], internship_links[i]) for i in range(len(internship_titles))]
    return internships

def get_netflix_internships(soup):
    pass

def get_google_internships(soup):
    pass 

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

apple_internships = scrape_internships(urls['Apple'], 'Apple')