from selenium import webdriver as wb
import pandas as pd
from tqdm import tqdm
import time
import json

webD = wb.Chrome('C:\\Users\\Admin\\Downloads\\chromedriver.exe')
webD.get('https://phongvu.vn/may-anh-2113.cat?pv_medium=m-may-anh')

hrefLinkList = []
condition = True
while condition:
    time.sleep(6)
    allInfo = webD.find_elements_by_class_name('css-1rhapru')

    for eEle in allInfo:
        hrefLink = eEle.get_property('href')
        hrefLinkList.append(hrefLink)
    try:
        webD.find_elements_by_class_name('css-1fxi79z')[-1].click()
    except:
        condition = False

data = []
#list brand
dell = 1
asus = 2
acer = 3
msi = 4
lenovo = 5
lg = 6
apple = 7
hp = 8
samsung = 9
sony = 10
philips = 11
casper = 12
tcl = 13
sharp = 14
panasonic = 15
oppo = 16
nokia = 17
vivo = 18
itel = 19
vsmart = 21
realme = 22
xiaomi = 23
aqua = 24
hitachi = 25
toshiba = 26
electrolux = 27
whirlpool = 28
sanaky = 29
mitsubishi_electric = 30
canon = 31
fujifilm = 32
sanco = 33
asanzo = 34
fpt = 35
huawei = 36
khac = 37

#list category
tivi = 1
tulanh = 2
maygiat = 3
mayanh = 4
laptop = 5
dienthoai = 6

#list company
nguyenkim = 1
phongvu = 2
hc = 3
sendo = 4
tiki = 5
lazada = 6
shopee = 7
mediasmart = 8

for i in tqdm(hrefLinkList):
    webD.get(i)
    try:
        productName = webD.find_element_by_class_name('css-1jpdzyd').text
        price = webD.find_element_by_class_name('css-3725in').text
        # descOfProduct = webD.find_element_by_xpath('//*[@id="__next"]/div[5]/div[1]/div[2]/div/div/div[1]/div[3]/div/div/div').text
        linkProductImage = webD.find_element_by_xpath('//*[@id="__next"]/div[4]/div[1]/div[1]/div[2]/div[1]/div/div/div/div[1]/div[1]/div[1]/div/picture/img')
        src = linkProductImage.get_property('src')
        print(src)
        supplier = (webD.find_element_by_xpath('//*[@id="__next"]/div[4]/div[1]/div[1]/div[4]/div[2]/div/div[2]/div[1]/span[2]/div').text).lower()
        supID = khac
        if supplier == 'canon':
            supID = canon
        elif supplier == 'fujifilm':
            supID = fujifilm
        elif supplier == 'sony':
            supID = sony
        else:
            supID = khac

        temp = {'productName': productName,
                 'price': price,
                 # 'descOfProduct': descOfProduct,
                 'CategoryID': mayanh,
                 'CompanyID': phongvu,
                 'hyperLink': i,
                 'LinkOfProductImage': src,
                 'SupplierID': supID
                 }
        data.append(temp)
    except:
        continue


pd.DataFrame(data)
#Writing to JSON File

def writeToJSONFile(path, fileName, data):
    filePathNameWExt = './' + path + '/' + fileName + '.json'
    with open(filePathNameWExt, 'w') as fp:
        json.dump(data, fp)

path = './'
fileName = 'MayAnh_PhongVu'


writeToJSONFile(path, fileName, data)

for i in data:
    print(i)