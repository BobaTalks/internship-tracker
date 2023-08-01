import bs4
import requests


def get_internships():
    res = requests.get(
        "https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search?currentJobId=3644104559&f_C=10667%2C1586%2C162479&geoId=103644278&keywords=intern%20OR%20internship&location=United%20States&refresh=true"
    )
    return res.text


html = get_internships()

soup = bs4.BeautifulSoup(html, "html.parser")

listings: bs4.ResultSet[bs4.Tag] = soup.find_all("li")


def get_job_title(listing: bs4.element.Tag) -> str:
    element = listing.find("h3")
    if element:
        return element.text.strip()
    else:
        print("The target element's title was not found")
        return ""


def get_job_location(listing: bs4.element.Tag) -> str:
    element = listing.find("span", "job-search-card__location")
    if element:
        return element.text.strip()
    else:
        print("The target element's location was not found")
        return ""


def get_job_link(listing: bs4.element.Tag) -> str | list[str]:
    element = listing.find("a", "base-card__full-link")
    if isinstance(element, bs4.Tag):
        return element["href"]
    else:
        print("The target element's link was not found")
        return ""


def get_hiring_status(listing: bs4.element.Tag) -> str:
    element = listing.find("span", "result-benefits__text")
    if element:
        return element.text.strip()
    else:
        print("The target element's hiring status was not found")
        return ""


def get_time_posted(listing: bs4.element.Tag) -> str:
    element = listing.find(
        "time", class_=["job-search-card__listdate", "job-search-card__listdate--new"]
    )
    if element:
        return element.text.strip()
    else:
        print("The target element's time posted was not found")
        return ""


job_info_type = dict[str, str | list[str]]


def get_all_info(listings_input: bs4.ResultSet[bs4.Tag]) -> list[job_info_type]:
    results: list[job_info_type] = []

    for i in listings_input:
        job_info: job_info_type = {
            "title": get_job_title(i),
            "link": get_job_link(i),
            "location": get_job_location(i),
            "status": get_hiring_status(i),
            "posted": get_time_posted(i),
        }

        results.append(job_info)

    return results


scraped_data = get_all_info(listings)
print(scraped_data)

# notes
# at the moment, if the scraper fails to get a piece of information,
# it will continue working, but give blank data
# this was chosen as an alternative to having the whole thing stop working
# if we see that blank data is appearing in the future, it is a sign
# that there is either a bug in the scraper, or the way that the content
# is listed has changed, and the scraper needs to be updated

# current data:
# job title, job location
# job links, hiring status
# time posted

# potential stretch goals:
# job qualifications, description, responsibilities
