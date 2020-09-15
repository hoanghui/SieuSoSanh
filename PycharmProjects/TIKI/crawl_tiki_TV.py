from selenium import webdriver as wb
import pandas as pd
from tqdm import tqdm
import time

webD = wb.Chrome('C:\\Users\\Admin\\Downloads\\chromedriver.exe')
webD.get('https://tiki.vn/tivi/c5015?src=static_block')

hrefLinkList = []
condition = True
while condition:
    # time.sleep(7)
    allInfo = webD.find_elements_by_class_name('product-item       ')

    for eEle in allInfo:
        temp = eEle.find_element_by_tag_name('a')
        hrefLink = temp.get_property('href')
        hrefLinkList.append(hrefLink)
    try:
        webD.find_elements_by_class_name('next')[-1].click()
    except:
        condition = False

overallinfo = []
for i in tqdm(hrefLinkList):
    webD.get(i)
    time.sleep(1)
    nameOftheProduct = webD.find_element_by_xpath('//*[@id="__next"]/div[1]/main/div[3]/div/div[2]/div[1]/h1').text
    priceoftheProduct = webD.find_element_by_class_name('price').text
#     descOfProduct = webD.find_element_by_xpath(
#         '//*[@id="__next"]/div[1]/main/div[3]/div/div[2]/div[2]/div[1]/div[1]/div[3]/ul')
    tempJ = {'nameOftheProduct': nameOftheProduct,
             'priceoftheProduct': priceoftheProduct,
#              'descOfProduct': descOfProduct,
             'hyperlink': i}
    overallinfo.append(tempJ)

pd.DataFrame(overallinfo)