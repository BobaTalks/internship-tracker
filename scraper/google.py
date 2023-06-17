import requests
from bs4 import BeautifulSoup
from selenium.webdriver import Firefox, FirefoxOptions
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait

# Firefox is an alias for the WebDriver object from
# selenium.webdriver.firefox.webdriver

options = FirefoxOptions()
options.add_argument("-headless")
driver = Firefox(options)

google_site = "https://careers.google.com/jobs/results/?distance=50&employment_type=INTERN&location=United%20States&location=Canada"


def get_google_jobs_hrefs(jobs_list: BeautifulSoup):
    """
    Creates a list of links to individual Google job postings.

    Parameters
    ----------
    jobs_list : BeautifulSoup
        A soupified html representation of <li> elements containing Google
        job postings

    Returns
    -------
    hrefs_list : list[str]
        A list of reference links to individual Google job postings
    """

    # retrieve all li elements in page, set recursive=False to get only top
    # level li elements
    li_elements = jobs_list.find_all("li", recursive=False)
    hrefs_list = [li.a["href"] for li in li_elements]
    return hrefs_list


def get_google_job_title(job_post: BeautifulSoup):
    """
    Gets the job title from a Google job posting.

    Parameters
    ----------
    job_post : BeautifulSoup
        A soupified html representation for a single Google job posting

    Returns
    -------
    job_title : str
        The job title for the respective job posting
    """

    job_header = job_post.find("h1", {"class": "gc-job-detail__title"})
    return job_header.text.strip()


def get_google_job_locations(job_post: BeautifulSoup):
    """
    Gets the job locations from a Google job posting.

    Parameters
    ----------
    job_post : BeautifulSoup
        A soupified html representation for a single Google job posting

    Returns
    -------
    job_locations : list[dict[str,str]]
        A list of dictionaries containing job location information for the
        respective job posting
    """

    job_instruction = job_post.find(
        "p", {"class": "gc-job-detail__instruction-description"}
    )
    locations_str = job_instruction.find_all("span")[1].b.text
    locations_list = locations_str.split(";")
    job_locations = []
    for location in locations_list:
        location_list = location.split(",")
        location_dict = {
            "city": location_list[0],
            "state": location_list[1],
            "country": location_list[2],
        }
        job_locations.append(location_dict)
    return job_locations


def get_google_job_qualifications(job_post: BeautifulSoup):
    """
    Gets the job qualifications from a Google job posting.

    Parameters
    ----------
    job_post : BeautifulSoup
        A soupified html representation for a single Google job posting

    Returns
    -------
    job_qualifications : list[str]
        A list of qualifications for the job posting
    """

    job_qualifications = []
    qualifications_div = job_post.find("div", {"itemprop": "qualifications"})
    list_containers = qualifications_div.find_all("ul")
    for ul in list_containers:
        list_items = ul.find_all("li")
        for item in list_items:
            job_qualifications.append(item.text)
    return job_qualifications


def get_google_job_description(job_post: BeautifulSoup):
    """
    Gets the job description from a Google job posting.

    Parameters
    ----------
    job_post : BeautifulSoup
        A soupified html representation for a single Google job posting

    Returns
    -------
    job_description : str
        A string containing the entire job description labeled in the job
        posting under 'About the job'
    """

    description_div = job_post.find("div", {"itemprop": "description"})
    description_paragraphs = [p.text for p in description_div.find_all("p")]
    string_separator = "\n"
    job_description = string_separator.join(description_paragraphs)
    return job_description


def get_google_job_responsibilities(job_post: BeautifulSoup):
    """
    Gets the job responsibilities from a Google job posting.

    Parameters
    ----------
    job_post : BeautifulSoup
        A soupified html representation for a single Google job posting

    Returns
    -------
    job_responsibilities : list[str]
        A list of responsibilities given for the job post
    """

    # locate the div containing responsibilities and get the underlying ul element
    responsibilities_list = job_post.find("div", {"itemprop": "responsibilities"}).find(
        "ul"
    )
    job_responsibilities = [li.text for li in responsibilities_list.find_all("li")]
    return job_responsibilities


def parse_google_job_description(driver: Firefox, href: str):
    """
    Parse through a google job description, returning information from the
    job description

    Parameters
    ----------
    driver : (Firefox)WebDriver
        A selenium web driver object
    href : str
        A reference link to a Google job posting

    Returns
    -------
    job_info : dict{}
        A dictionary containg all of the job information parsed from a
        Google job posting
    """

    base = "https://careers.google.com"

    driver.get(base + href)
    driver_wait = WebDriverWait(driver, timeout=10)
    result_div = driver_wait.until(
        EC.visibility_of_element_located(
            (By.CSS_SELECTOR, "div[itemtype='http://schema.org/JobPosting']")
        )
    ).get_attribute("innerHTML")
    single_soup = BeautifulSoup(result_div, "html.parser")
    title = get_google_job_title(single_soup)
    locations = get_google_job_locations(single_soup)
    qualifications = get_google_job_qualifications(single_soup)
    description = get_google_job_description(single_soup)
    responsibilities = get_google_job_responsibilities(single_soup)
    job_info = {
        "title": title,
        "locations": locations,
        "qualifications": qualifications,
        "description": description,
        "responsibilities": responsibilities,
    }
    return job_info


try:
    driver.get(google_site)
    driver_wait = WebDriverWait(driver, timeout=10)
    results_list = driver_wait.until(
        EC.visibility_of_element_located((By.CSS_SELECTOR, "#search-results"))
    ).get_attribute("innerHTML")
    soup = BeautifulSoup(results_list, "html.parser")
    hrefs_list = get_google_jobs_hrefs(soup)
    scraped_info = [parse_google_job_description(driver, href) for href in hrefs_list]
finally:
    driver.quit()
