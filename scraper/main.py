import requests
from bs4 import BeautifulSoup
from selenium import webdriver

driver = webdriver.Chrome()

# URLs for FAANG internship listings
urls = {
    "Meta": "https://www.metacareers.com/jobs/?is_leadership=0&is_in_page=0&offices[0]=Ottawa%2C%20ON&offices[1]=Ottawa%2C%20ON&offices[2]=Remote%2C%20Canada&offices[3]=Austin%2C%20TX&offices[4]=Boston%2C%20MA&offices[5]=Remote%2C%20US&offices[6]=Menlo%20Park%2C%20CA&offices[7]=Eagle%20Mountain%2C%20UT&offices[8]=Menlo%20Park%2C%20CA&offices[9]=Altoona%2C%20IA&offices[10]=Eagle%20Mountain%2C%20UT&offices[11]=Menlo%20Park%2C%20CA&offices[12]=Altoona%2C%20IA&offices[13]=Ashburn%2C%20VA&offices[14]=Atlanta%2C%20GA&offices[15]=Ashburn%2C%20VA&offices[16]=Atlanta%2C%20GA&offices[17]=Austin%2C%20TX&offices[18]=Boston%2C%20MA&offices[19]=Brasilia%2C%20Brazil&offices[20]=Chicago%2C%20IL&offices[21]=Dallas%2C%20TX&offices[22]=Detroit%2C%20MI&offices[23]=Denver%2C%20CO&offices[24]=Forest%20City%2C%20NC&offices[25]=Fort%20Worth%2C%20TX&offices[26]=Temple%2C%20TX&offices[27]=Kansas%20City%2C%20MO&offices[28]=Kuna%2C%20ID&offices[29]=Remote%2C%20Canada&offices[30]=Mesa%2C%20AZ&offices[31]=Sarpy%20County%2C%20NE&offices[32]=Irvine%2C%20CA&offices[33]=Foster%20City%2C%20CA&offices[34]=Burlingame%2C%20CA&offices[35]=Bellevue%2C%20WA&offices[36]=Gallatin%2C%20TN&offices[37]=DeKalb%2C%20IL&offices[38]=Reston%2C%20VA&offices[39]=Sausalito%2C%20CA&offices[40]=Sunnyvale%2C%20CA&offices[41]=Newton%20County%2C%20GA&offices[42]=New%20Albany%2C%20OH&offices[43]=Washington%2C%20DC&offices[44]=Vancouver%2C%20BC&offices[45]=Toronto%2C%20ON&offices[46]=Fremont%2C%20CA&offices[47]=Seattle%2C%20WA&offices[48]=S%C3%A3o%20Paulo%2C%20Brazil&offices[49]=Santa%20Clara%2C%20CA&offices[50]=San%20Francisco%2C%20CA&offices[51]=Redmond%2C%20WA&offices[52]=Prineville%2C%20OR&offices[53]=Pittsburgh%2C%20PA&offices[54]=Papillion%2C%20NE&offices[55]=Northridge%2C%20CA&offices[56]=New%20York%2C%20NY&offices[57]=Mountain%20View%2C%20CA&offices[58]=Montreal%2C%20QC&offices[59]=Miami%2C%20FL&offices[60]=Mexico%20City%2C%20Mexico&offices[61]=Los%20Lunas%2C%20NM&offices[62]=Los%20Angeles%2C%20CA&offices[63]=Huntsville%2C%20AL&offices[64]=Henrico%2C%20VA&offices[65]=Fort%20Worth%2C%20TX&offices[66]=Forest%20City%2C%20NC&offices[67]=Denver%2C%20CO&offices[68]=Detroit%2C%20MI&offices[69]=Dallas%2C%20TX&offices[70]=Chicago%2C%20IL&offices[71]=Boston%2C%20MA&offices[72]=Austin%2C%20TX&offices[73]=Atlanta%2C%20GA&offices[74]=Ashburn%2C%20VA&offices[75]=Altoona%2C%20IA&offices[76]=Menlo%20Park%2C%20CA&offices[77]=Eagle%20Mountain%2C%20UT",
    "Amazon": "https://www.amazon.jobs/en/search?base_query=internship",
    "Apple": "https://jobs.apple.com/en-ca/search?location=canada-CANC+united-states-USA+mexico-MEXC&team=internships-STDNT-INTRN",
    "Netflix": "https://jobs.netflix.com/search?q=internship",
    "Google": "https://careers.google.com/jobs/results/?q=internship",
}


def get_meta_internships(soup):
    driver.get(urls["Meta"])

    containers = driver.find_elements(
        "xpath",
        "//div[@class='_6g3g x8y0a91 x7z1be2 xngnso2 xeqmlgx xo1l8bm xeqr9p9 x1e096f4']",
    )
    internship_titles = [container.text for container in containers]

    containers = driver.find_elements(
        "xpath", "//span[@class='x7z1be2 x1u3m9jt x1f6kntn x1rmxxjo']"
    )
    internship_locations = [container.text for container in containers]

    containers = driver.find_elements("xpath", "//div[@class='x1ypdohk']")
    internship_links = [container.get_attribute("data-url") for container in containers]

    internships = [
        (internship_titles[i], internship_locations[i].split("\n"), internship_links[i])
        for i in range(len(internship_titles))
    ]

    return internships


def get_amazon_internships(soup):
    pass


def get_apple_internships(soup):
    internship_titles = [i.text for i in soup.select(".table--advanced-search__title")]
    internship_locations = [
        i.text for i in soup.select(".table-col-2 span:first-child")
    ]
    internship_links = [
        "https://jobs.apple.com" + container.get("href")
        for container in soup.select(".table--advanced-search__title")
    ]
    internships = [
        (internship_titles[i], internship_locations[i], internship_links[i])
        for i in range(len(internship_titles))
    ]
    return internships


def get_netflix_internships(soup):
    pass


def get_google_internships(soup):
    pass


def scrape_internships(url, company):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, "html.parser")

    if company == "Meta":
        return get_meta_internships(soup)
    elif company == "Amazon":
        return get_amazon_internships(soup)
    elif company == "Apple":
        return get_apple_internships(soup)
    elif company == "Netflix":
        return get_netflix_internships(soup)
    elif company == "Google":
        return get_google_internships(soup)


meta_internships = scrape_internships(urls["Meta"], "Meta")
apple_internships = scrape_internships(urls["Apple"], "Apple")
