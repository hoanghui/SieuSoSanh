import selenium
import pandas as pd
from selenium import webdriver as wb

webD = wb.Chrome('C:\\Users\\Admin\\Downloads\\chromedriver.exe')
webD.get('https://dienmaycholon.vn/tivi-led')
overallinfo = []
condition = True
while condition:
    productInfoList = webD.find_elements_by_class_name('pro_infomation')

    for el in productInfoList:
        p = el.find_element_by_tag_name()
        p1 = p.get_property('href')
        nameOftheProduct = webD.find_element_by_class_name('nameproduct').text
        priceoftheProduct = webD.find_element_by_class_name('price_sale').text
        tempJ = {'nameOftheProduct': nameOftheProduct,
                 'priceoftheProduct': priceoftheProduct[0:-1],
                 'hyperlink': p1}
        overallinfo.append(tempJ)
        print(p1)
    try:
        webD.find_element_by_class_name('view_more').click()
    except:
        condition = False

pd.DataFrame(overallinfo)
print(pd)

webD.find_element_

