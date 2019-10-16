import os
import requests
from tqdm import tqdm
import pandas as pd
from multiprocessing.pool import ThreadPool
from data import rugs, pillows


skus = [pillows[x:x+999] for x in range(0, len(pillows), 999)]

itemids = []
actualids = []

headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-inRiver-APIKey': os.environ['INRIVER_API_KEY_PRODUCTION']
}


def goFetch(skuChunk):
    params = {
        "fieldTypeID": "AXItemID", "uniqueValues": skuChunk
    }
    r = requests.post(
        'https://apiuse.productmarketingcloud.com/api/v1.0.0/entities:mapuniquevalues', headers=headers, json=params)
    print(r.json())
    itemids.append(r.json())


p = ThreadPool(9)
p.map(goFetch, skus)

for obj in itemids:
    for key in obj:
        actualids.append(obj[key])


p.close()
p.join()

incompletes = []


def putArticle(itemid):
    url = 'https://apiuse.productmarketingcloud.com/api/v1.0.0/entities/' + \
        str(itemid) + '/completenessdetails'
    r = requests.get(url, headers=headers)
    if r.json()["completeness"] < 100:
        newUrl = 'https://apiuse.productmarketingcloud.com/api/v1.0.0/entities/' + \
            str(itemid) + '/summary'
        res = requests.get(newUrl, headers=headers)
        print(res.json()["displayDescription"])
        incompletes.append(res.json()["displayDescription"])


def gogogo(x):
    putArticle(x)


p = ThreadPool(10)

for _ in tqdm(p.imap_unordered(gogogo, actualids), total=len(actualids)):
    pass

p.close()
p.join()


print("\n\n\n\n\n")
print(incompletes)

# IR_API_KEY = "f3f6b63ac362f6df5367220f34234fbb"
