import os
import requests
from bs4 import BeautifulSoup
from pyvirtualdisplay import Display
from selenium import webdriver

OPTIMIZELY_SCRIPT_PATH = "/mnt/z/EpiContent/scripts/optimizely"

def mountDrive():
    try:
        os.system('sudo mount -t drvfs Z: /mnt/z')
    except:
        pass

def makeDirAndMove():
    '''
    Initialize output dirs.
    '''
    x = os.listdir()
    if 'outputs' not in x:
        os.mkdir('outputs')
    os.chdir('outputs')
    x = os.listdir()
    if len(x) > 0:
        os.system('rm -rf *')


def getOptimJS():
    print('Downloading snippet from Optimizely')
    r = requests.get('https://cdn.optimizely.com/js/8788531144.js')
    open('ls.js', 'wb').write(r.content)
    url = 'https://javascript-minifier.com/raw'
    data = {'input': open('ls.js', 'rb').read()}
    print('Minifying JS')
    r = requests.post(url, data=data)
    open('ls.min.js', 'wb').write(r.content)


def checkMove():
    x = os.listdir()
    if 'ls.js' in x and 'ls.min.js' in x:
        os.system('sudo mv ls.js {}'.format(OPTIMIZELY_SCRIPT_PATH))
        os.system('sudo mv ls.min.js {}'.format(OPTIMIZELY_SCRIPT_PATH))

mountDrive()
makeDirAndMove()
getOptimJS()
checkMove()
