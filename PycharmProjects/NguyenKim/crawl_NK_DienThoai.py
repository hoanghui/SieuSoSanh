from selenium import webdriver as wb
import pandas as pd
from tqdm import tqdm
import time
import json

webD = wb.Chrome('C:\\Users\\Admin\\Downloads\\chromedriver.exe')
webD.get('https://www.nguyenkim.com/dien-thoai-di-dong/')



hrefLinkList = []
condition = True
while condition:
    time.sleep(4)

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
        #     descOfProduct = webD.find_element_by_xpath(
        #         '//*[@id="__next"]/div[1]/main/div[3]/div/div[2]/div[2]/div[1]/div[1]/div[3]/ul')
        try:
            supplier = webD.find_element_by_xpath('//*[@id="content_features"]/div[1]/div[2]/div/table/tbody/tr[3]/td[2]').text
            if supplier != 'Samsung' and supplier != 'oppo' and supplier != 'Nokia' and supplier != 'Vivo' and supplier != 'Itel' and supplier != 'Apple' and supplier != 'Vsmart' and supplier != 'Realme' and supplier != 'Xiaomi':
                supplier = webD.find_element_by_xpath('//*[@id="content_features"]/div[1]/div[2]/div/table/tbody/tr[2]/td[2]').text
            supID = 0
            if supplier == 'Samsung':
                supID = 9
            elif supplier == 'oppo':
                supID = 23
            elif supplier == 'Nokia':
                supID = 24
            elif supplier == 'Vivo':
                supID = 25
            elif supplier == 'Itel':
                supID = 26
            elif supplier == 'Apple':
                supID = 7
            elif supplier == 'Vsmart':
                supID = 28
            elif supplier == 'Realme':
                supID = 29
            elif supplier == 'Xiaomi':
                supID = 30
            tempJ = {'nameOftheProduct': nameOftheProduct,
                     'priceoftheProduct': priceoftheProduct,
                     #              'descOfProduct': descOfProduct,
                     'hyperlink': i,
                     'CategoryID': 6,
                     'CompanyID': 1,
                     'SupplierID': supID
                     }
            data.append(tempJ)
        except :
            tempJ = {'nameOftheProduct': nameOftheProduct,
                     'priceoftheProduct': priceoftheProduct,
                     #              'descOfProduct': descOfProduct,
                     'hyperlink': i,
                     'CategoryID': 6,
                     'CompanyID': 1,
                     'SupplierID': 0
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
fileName = 'DienThoaiNguyenKim'


writeToJSONFile(path, fileName, data)

for i in data:
    print(i)