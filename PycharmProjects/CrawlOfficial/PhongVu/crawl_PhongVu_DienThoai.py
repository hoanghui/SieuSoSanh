from selenium import webdriver as wb
import pandas as pd
from tqdm import tqdm
import time
import json

webD = wb.Chrome('C:\\Users\\Admin\\Downloads\\chromedriver.exe')
webD.get('https://phongvu.vn/tivi-1253.cat?pv_medium=m-tivi')

hrefLinkList = []
condition = True
while condition:
    time.sleep(6)
    allInfo = webD.find_elements_by_class_name('css-1rhapru')

    for eEle in allInfo:
        hrefLink = eEle.get_property('href')
        hrefLinkList.append(hrefLink)
    try:
        webD.find_elements_by_xpath('//*[@id="__next"]/div[4]/div/div[4]/nav/ul/li[8]/button')[-1].click()
    except:
        condition = False

data = []

for i in tqdm(hrefLinkList):
    webD.get(i)
    try:
        nameOftheProduct = webD.find_element_by_class_name('css-1jpdzyd').text
        priceoftheProduct = webD.find_element_by_class_name('css-3725in').text
        print(priceoftheProduct)
        # descOfProduct = webD.find_element_by_xpath('//*[@id="__next"]/div[5]/div[1]/div[2]/div/div/div[1]/div[3]/div/div/div').text
        linkProductImage = webD.find_element_by_xpath('//*[@id="__next"]/div[4]/div[1]/div[1]/div[2]/div[1]/div/div/div/div[1]/div[1]/div[1]/div/picture/img')
        src = linkProductImage.get_property('src')
        print(src)
        supplier = webD.find_element_by_xpath('//*[@id="__next"]/div[4]/div[1]/div[1]/div[4]/div[2]/div/div[2]/div[1]/span[2]/div').text
        print(supplier)
        if supplier != 'SAMSUNG' and supplier != 'Sony' and supplier != 'Philips' and supplier != 'Casper' and supplier != 'TCL' and supplier != 'LG' and supplier != 'Sharp' and supplier != 'Panasonic':
            supplier = webD.find_element_by_xpath(
                '//*[@id="__next"]/div[4]/div[1]/div[1]/div[4]/div[2]/div/div[2]/div[1]/span[2]/div').text
        supID = 0
        if supplier == 'SAMSUNG':
            supID = 9
        elif supplier == 'SONY':
            supID = 10
        elif supplier == 'Philips':
            supID = 11
        elif supplier == 'Casper':
            supID = 12
        elif supplier == 'TCL':
            supID = 13
        elif supplier == 'LG':
            supID = 6
        elif supplier == 'SHARP':
            supID = 14
        elif supplier == 'PANASONIC':
            supID = 15
        elif supplier == 'Toshiba':
            supID = 26
        elif supplier == 'Vsmart':
            supID = 21
        elif supplier == 'Sanco':
            supID = 1002
        elif supplier == 'Asanzo':
            supID = 1003
        elif supplier == 'FPT':
            supID = 1004
        elif supplier == 'XIAOMI':
            supID = 23

        print(nameOftheProduct)
        print(priceoftheProduct)
        print(src)
        print(supID)
        print(i)
        print('huy dep trai')
        tempJ = {'nameOftheProduct': nameOftheProduct,
                 'priceoftheProduct': priceoftheProduct,
                 # 'descOfProduct': descOfProduct,
                 'CategoryID': 1,
                 'CompanyID': 2,
                 'hyperlink': i,
                 'LinkOfProductImage': src,
                 'SupplierID': supID
                 }
        data.append(tempJ)
    except:
        continue



pd.DataFrame(data)
#Writing to JSON File

def writeToJSONFile(path, fileName, data):
    filePathNameWExt = './' + path + '/' + fileName + '.json'
    with open(filePathNameWExt, 'w') as fp:
        json.dump(data, fp)

path = './'
fileName = 'TVPhongVu'


writeToJSONFile(path, fileName, data)

for i in data:
    print(i)