# usage
# $ python3 buytransit.py
import requests, json
from bs4 import BeautifulSoup
from urllib.parse import urljoin

CLIPPER_LOGINFRAME_ID = 'headeriFrame'

def getSoup(url):
  return BeautifulSoup(requests.Session().get(url).text, 'html.parser')

def GetLoginUrl(baseUrl):
  soup = getSoup(baseUrl)
  for iframe in soup('iframe'):
    if iframe['id'] == CLIPPER_LOGINFRAME_ID:
      return urljoin (baseUrl, iframe['src'])
    else:
      print (iframe['id'])

# We keep a secure.json file adjacent, but make sure to gitignore it and it isn't ever in your repo!
def loginCreds(secure = 'secure.json'):
  secure = json.load(open('secure.json'))
  return [secure['email'], secure['password']]

url = 'https://www.clippercard.com/ClipperWeb/index.do'

loginUrl = GetLoginUrl(url)
s = requests.Session()
soup = getSoup(loginUrl)
for form in soup('form'):
  loginAction = urljoin (loginUrl, form['action'])
  r = s.post(loginAction, data = json.load(open('secure.json')))
  loggedSoup = BeautifulSoup(r.content, 'html.parser')
  print (loggedSoup.prettify())


