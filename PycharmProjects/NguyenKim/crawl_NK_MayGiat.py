# Máy ảnh
from selenium import webdriver as wb
import pandas as pd
from tqdm import tqdm
import time

webD = wb.Chrome('C:\\Users\\Admin\\Downloads\\chromedriver.exe')
webD.get('https://www.nguyenkim.com/may-giat/')

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

overallinfo = []
for i in tqdm(hrefLinkList):
    webD.get(i)
    time.sleep(1)
    nameOftheProduct = webD.find_element_by_class_name('product_info_name').text
    priceoftheProduct = webD.find_element_by_class_name('nk-price-final').text
    #     descOfProduct = webD.find_element_by_xpath(
    #         '//*[@id="__next"]/div[1]/main/div[3]/div/div[2]/div[2]/div[1]/div[1]/div[3]/ul')
    tempJ = {'nameOftheProduct': nameOftheProduct,
             'priceoftheProduct': priceoftheProduct,
             #              'descOfProduct': descOfProduct,
             'hyperlink': i}
    overallinfo.append(tempJ)

pd.DataFrame(overallinfo)