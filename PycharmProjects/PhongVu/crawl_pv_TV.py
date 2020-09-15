from selenium import webdriver as wb
import pandas as pd
from tqdm import tqdm
import time

webD = wb.Chrome('C:\\Users\\Admin\\Downloads\\chromedriver.exe')
webD.get('https://phongvu.vn/tivi-1253.cat?pv_medium=m-tivi')

hrefLinkList = []
condition = True
while condition:
    time.sleep(7)
    allInfo = webD.find_elements_by_class_name('css-1rhapru')

    for eEle in allInfo:
        hrefLink = eEle.get_property('href')
        hrefLinkList.append(hrefLink)
    try:
        webD.find_elements_by_xpath('//*[@id="__next"]/div[5]/div[4]/nav/ul/li[8]/button')[-1].click()
        print('ok')
    except:
        condition = False

overallinfo = []
for i in tqdm(hrefLinkList):
    webD.get(i)
    nameOftheProduct = webD.find_element_by_xpath('//*[@id="__next"]/div[5]/div[1]/div[2]/div/div/div[2]/div[1]').text
    priceoftheProduct = webD.find_element_by_class_name('css-wz251').text
    descOfProduct = webD.find_element_by_xpath(
        '//*[@id="__next"]/div[5]/div[1]/div[2]/div/div/div[1]/div[3]/div/div/div').text
    tempJ = {'nameOftheProduct': nameOftheProduct,
             'priceoftheProduct': priceoftheProduct,
             'descOfProduct': descOfProduct,
             'hyperlink': i}
    overallinfo.append(tempJ)

pd.DataFrame(overallinfo)