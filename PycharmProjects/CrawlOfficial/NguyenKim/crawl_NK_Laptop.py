from selenium import webdriver as wb
import pandas as pd
from tqdm import tqdm
import time
import json

webD = wb.Chrome('C:\\Users\\Admin\\Downloads\\chromedriver.exe')
webD.get('https://www.nguyenkim.com/may-tinh-xach-tay/')



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
        linkProductImage = webD.find_element_by_class_name('img-full-width')
        src = linkProductImage.get_property('src')
        #     descOfProduct = webD.find_element_by_xpath(
        #         '//*[@id="__next"]/div[1]/main/div[3]/div/div[2]/div[2]/div[1]/div[1]/div[3]/ul')
        try:
            supplier = webD.find_element_by_xpath('//*[@id="content_features"]/div[1]/div[2]/div/table/tbody/tr[3]/td[2]').text
            if supplier != 'Asus' and supplier != 'Dell' and supplier != 'Acer' and supplier != 'MSI' and supplier != 'HP' and supplier != 'Apple' and supplier != 'Lenovo' and supplier != 'LG':
                supplier = webD.find_element_by_xpath('//*[@id="content_features"]/div[1]/div[2]/div/table/tbody/tr[2]/td[2]').text
            supID = 0
            if supplier == 'Asus':
                supID = 2
            elif supplier == 'Dell':
                supID = 1
            elif supplier == 'Acer':
                supID = 3
            elif supplier == 'MSI':
                supID = 4
            elif supplier == 'HP':
                supID = 8
            elif supplier == 'Apple':
                supID = 7
            elif supplier == 'Lenovo':
                supID = 5
            elif supplier == 'LG':
                supID = 6
            tempJ = {'nameOftheProduct': nameOftheProduct,
                     'priceoftheProduct': priceoftheProduct,
                     #              'descOfProduct': descOfProduct,
                     'hyperlink': i,
                     'LinkOfProductImage': src,
                     'CategoryID': 5,
                     'CompanyID': 1,
                     'SupplierID': supID

                     }
            data.append(tempJ)
        except :
            tempJ = {'nameOftheProduct': nameOftheProduct,
                     'priceoftheProduct': priceoftheProduct,
                     #              'descOfProduct': descOfProduct,
                     'hyperlink': i,
                     'LinkOfProductImage': src,
                     'CategoryID': 5,
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
fileName = 'LaptopNguyenKim'


writeToJSONFile(path, fileName, data)

for i in data:
    print(i)