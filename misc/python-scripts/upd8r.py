import os
import requests
from tqdm import tqdm
from multiprocessing.pool import ThreadPool
from data import rugs, pillows


skus = [rugs[x:x+999] for x in range(0, len(rugs), 999)]

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


def putArticle(itemid):
    url = 'https://apiuse.productmarketingcloud.com/api/v1.0.0/entities/' + \
        str(itemid) + '/fieldvalues'
    params = [{
        "fieldTypeID": "ProductFeaturedArticles", "value": "174259,160400,172095,166263"
    }]
    r = requests.put(url, headers=headers, json=params)
    print(r.json())


def gogogo(x):
    print(x)
    putArticle(x)


p = ThreadPool(10)

for _ in tqdm(p.imap_unordered(gogogo, actualids), total=len(actualids)):
    pass

# IR_API_KEY = "f3f6b63ac362f6df5367220f34234fbb"
