#TV Thiên Hòa

from selenium import webdriver as wb
import pandas as pd
from tqdm import tqdm
import time

webD = wb.Chrome('C:\\Users\\Admin\\Downloads\\chromedriver.exe')
webD.get('https://dienmaythienhoa.vn/tivi-c5351.html')

hrefLinkList = []
condition = True
while condition:
    time.sleep(3)
    allInfo = webD.find_elements_by_class_name('box')

    for eEle in allInfo:
        temp = eEle.find_elements_by_tag_name('a')
        hrefLink = temp[0].get_property('href')
        hrefLinkList.append(hrefLink)
    try:
        webD.find_elements_by_xpath('/html/body/main/div[2]/div[1]/div[2]/div[5]/div/div/div[2]/div')[-1].click()
    except:
        condition = False

# allInfo = webD.find_elements_by_xpath('//*[@id="scroll-sanpham"]/ul[2]/li')
# for eEle in allInfo:
#     print(eEle.text)
#     print('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
#     temp = eEle.find_elements_by_tag_name('a')
#     print(temp[0].text)
#     hrefLink = temp[0].get_property('href')
#     hrefLinkList.append(hrefLink)

overallinfo = []
for i in tqdm(hrefLinkList):
    webD.get(i)
    nameOftheProduct = webD.find_element_by_class_name('title-top').find_element_by_tag_name('h1').text
    priceoftheProduct = webD.find_element_by_class_name('price-real').text
    #linkImg = webD.find_element_by_class_name('spct-hinhdaidien').get_property('src')
#     descOfProduct = webD.find_element_by_xpath(
#         '//*[@id="__next"]/div[1]/main/div[3]/div/div[2]/div[2]/div[1]/div[1]/div[3]/ul')
    tempJ = {'nameOftheProduct': nameOftheProduct,
             'priceoftheProduct': priceoftheProduct,
#              'descOfProduct': descOfProduct,
             'hyperlink': i}
    overallinfo.append(tempJ)

pd.DataFrame(overallinfo)