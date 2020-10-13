# Tủ lạnh
from selenium import webdriver as wb
import pandas as pd
from tqdm import tqdm
import time
import json

webD = wb.Chrome('C:\\Users\\Admin\\Downloads\\chromedriver.exe')
webD.get('https://www.nguyenkim.com/tu-lanh/')

hrefLinkList = []
condition = True
while condition:
    time.sleep(3)

    allInfo = webD.find_elements_by_xpath('/html/body/div[1]/div[4]/div[3]/div/div[3]/div/div[1]/div[2]/div/div/div[2]/div/div/a')

    for eEle in allInfo:
        hrefLink = eEle.get_property('href')
        hrefLinkList.append(hrefLink)
    try:
        webD.find_elements_by_class_name('btn_next ')[-1].click()
    except:
        condition = False

data = []
overallinfo = []
for i in tqdm(hrefLinkList):
    webD.get(i)
    time.sleep(0.25)
    try:
        nameOftheProduct = webD.find_element_by_class_name('product_info_name').text
        priceoftheProduct = webD.find_element_by_class_name('nk-price-final').text
        linkProductImage = webD.find_element_by_class_name('img-full-width')
        src = linkProductImage.get_property('src')
        #     descOfProduct = webD.find_element_by_xpath(
        #         '//*[@id="__next"]/div[1]/main/div[3]/div/div[2]/div[2]/div[1]/div[1]/div[3]/ul')
        try:
            supplier = webD.find_element_by_xpath('//*[@id="content_features"]/div[1]/div[2]/div/table/tbody/tr[3]/td[2]').text
            if supplier != 'LG' and supplier != 'Samsung' and supplier != 'Panasonic' and supplier != 'Sanaky' and supplier != 'Sharp' and supplier != 'Electrolux' and supplier != 'Toshiba' and supplier != 'Aqua' and supplier != 'Hitachi' and supplier != 'Mitsubishi Electric':
                supplier = webD.find_element_by_xpath('//*[@id="content_features"]/div[1]/div[2]/div/table/tbody/tr[2]/td[2]').text
            supID = 0
            if supplier == 'LG':
                supID = 6
            elif supplier == 'Samsung':
                supID = 9
            elif supplier == 'Panasonic':
                supID = 22
            elif supplier == 'Sanaky':
                supID = 29
            elif supplier == 'Sharp':
                supID = 14
            elif supplier == 'Electrolux':
                supID = 27
            elif supplier == 'Toshiba':
                supID = 26
            elif supplier == 'Aqua':
                supID = 24
            elif supplier == 'Hitachi':
                supID = 25
            elif supplier == 'Mitsubishi Electric':
                supID = 30
            tempJ = {'nameOftheProduct': nameOftheProduct,
                     'priceoftheProduct': priceoftheProduct,
                     #              'descOfProduct': descOfProduct,
                     'hyperlink': i,
                     'CategoryID': 2,
                     'CompanyID': 1,
                     'SupplierID': supID,
                    'LinkOfProductImage': src
                     }
            data.append(tempJ)
        except :
            continue
    except:
        continue

pd.DataFrame(data)
#Writing to JSON File

def writeToJSONFile(path, fileName, data):
    filePathNameWExt = './' + path + '/' + fileName + '.json'
    with open(filePathNameWExt, 'w') as fp:
        json.dump(data, fp)

path = './'
fileName = 'TuLanhNguyenKim'


writeToJSONFile(path, fileName, data)

for i in data:
    print(i)