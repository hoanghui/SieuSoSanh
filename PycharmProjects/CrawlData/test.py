# Máy ảnh
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
    allInfo = webD.find_elements_by_class_name('nk-link-product')

    for eEle in allInfo:
        hrefLink = eEle.get_property('href')
        hrefLinkList.append(hrefLink)
    try:
        webD.find_elements_by_class_name('btn_next ')[-1].click()
    except:
        condition = False
# allInfo = webD.find_elements_by_class_name('nk-link-product')
# for eEle in allInfo:
#     hrefLink = eEle.get_property('href')
#     hrefLinkList.append(hrefLink)
data = []

for i in tqdm(hrefLinkList):
    webD.get(i)
    # time.sleep(1)
    nameOftheProduct = webD.find_element_by_class_name('product_info_name').text
    priceoftheProduct = webD.find_element_by_class_name('nk-price-final').text
    #     descOfProduct = webD.find_element_by_xpath(
    #         '//*[@id="__next"]/div[1]/main/div[3]/div/div[2]/div[2]/div[1]/div[1]/div[3]/ul')
    supplier = webD.find_element_by_xpath('//*[@id="content_features"]/div[1]/div[2]/div/table/tbody/tr[3]/td[2]').text
    if supplier != 'Dell' and supplier != 'Asus' and supplier != 'Acer' and supplier != 'MSI' and supplier != 'Lenovo' and supplier != 'LG' and supplier != 'Apple' and supplier != 'HP':
        supplier = webD.find_element_by_xpath('//*[@id="content_features"]/div[1]/div[2]/div/table/tbody/tr[2]/td[2]').text
    supID = 0
    if supplier == 'Dell':
        supID = 1
    else:
        if supplier == 'Asus':
            supID = 2
        else:
            if supplier == 'Acer':
                supID = 3
            else:
                if supplier == 'MSI':
                    supID = 4
                else:
                    if supplier == 'Lenovo':
                        supID = 5
                    else:
                        if supplier == 'LG':
                            supID = 6
                        else:
                            if supplier == 'Apple':
                                supID = 7
                            else:
                                if supplier == 'HP':
                                    supID = 8

    tempJ = {'nameOftheProduct': nameOftheProduct,
             'priceoftheProduct': priceoftheProduct[0:-1],
             #              'descOfProduct': descOfProduct,
             'hyperlink': i,
             'CategoryID': 5,
             'CompanyID': 1,
             'SupplierID': supID
    }
    data.append(tempJ)

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