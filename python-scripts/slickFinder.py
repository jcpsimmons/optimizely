import requests
from bs4 import BeautifulSoup


def findSlick(url):
    print("Loading URL: {}".format(url))
    r = requests.get(url)
    if str(r.content).find("slick") > 0:
        print('found')
        return(True)
    soup = BeautifulSoup(r.content, 'html.parser')
    scripts = soup.find_all('script')
    srcs = [link['src'] for link in scripts if 'src' in link.attrs]
    for src in srcs:
        if src.startswith("/"):
            src = "https://www.livingspaces.com" + src
        try:
            if findSlick(src) == True:
                return(True)
        except Exception as e:
            print("ERROR {}".format(e))


startUrl = "https://www.livingspaces.com/"

r = requests.get(startUrl)
soup = BeautifulSoup(r.content, 'html.parser')


# .slick-slider
r = requests.get(
    "https://www.livingspaces.com/_content/scripts/home/app_v2.min.js?v=2019_1004_1")
soup = BeautifulSoup(r.content, 'html.parser')


#  findslick works but you'll need to do a recursive link finder with the above code.