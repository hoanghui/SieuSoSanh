from selenium import webdriver as wb
import pandas as pd
from tqdm import tqdm
import time
import json

webD = wb.Chrome('C:\\Users\\Admin\\Downloads\\chromedriver.exe')
webD.get('https://tiki.vn/tu-lanh/c2328?src=c.2328.hamburger_menu_fly_out_banner')

hrefLinkList = []
condition = True

while condition:
    time.sleep(1.5)
    allInfo = webD.find_elements_by_class_name('product-item       ')
    for eEle in allInfo:
        temp = eEle.find_element_by_tag_name('a')
        hrefLink = temp.get_property('href')
        hrefLinkList.append(hrefLink)
    print(len(hrefLinkList))
    try:
        webD.find_elements_by_class_name('next')[-1].click()
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
    time.sleep(1.5)
    try:
        productName = webD.find_element_by_class_name('title').text
        price = webD.find_element_by_class_name('product-price__current-price').text
        linkProductImage = webD.find_element_by_xpath('//*[@id="__next"]/div[1]/main/div[4]/div/div[1]/div[1]/div[1]/div/div/img')
        src = linkProductImage.get_property('src')
        try:
            supplier = webD.find_element_by_xpath('//*[@id="__next"]/div[1]/main/div[4]/div/div[3]/div[1]/div/span/h6/a').text.lower()
        except:
            try:
                supplier = webD.find_element_by_xpath('//*[@id="__next"]/div[1]/main/div[4]/div/div[3]/div[1]/div[1]/span/h6/a').text.lower()
            except:
                break

        supID = khac
        if supplier == 'dell':
            supID = dell
        elif supplier == 'asus':
            supID = asus
        elif supplier == 'acer':
            supID = acer
        elif supplier == 'msi':
            supID = msi
        elif supplier == 'lenovo':
            supID = lenovo
        elif supplier == 'lg':
            supID = lg
        elif supplier == 'apple':
            supID = apple
        elif supplier == 'hp':
            supID = hp
        elif supplier == 'sony':
            supID = sony
        elif supplier == 'samsung':
            supID = samsung
        elif supplier == 'philips':
            supID = philips
        elif supplier == 'casper':
            supID = casper
        elif supplier == 'tcl':
            supID = tcl
        elif supplier == 'sharp':
            supID = sharp
        elif supplier == 'oppo':
            supID = oppo
        elif supplier == 'nokia':
            supID = nokia
        elif supplier == 'vivo':
            supID = vivo
        elif supplier == 'itel':
            supID = itel
        elif supplier == 'vsmart':
            supID = vsmart
        elif supplier == 'realme':
            supID = realme
        elif supplier == 'xiaomi':
            supID = xiaomi
        elif supplier == 'panasonic':
            supID = panasonic
        elif supplier == 'aqua':
            supID = aqua
        elif supplier == 'hitachi':
            supID = hitachi
        elif supplier == 'toshiba':
            supID = toshiba
        elif supplier == 'electrolux':
            supID = electrolux
        elif supplier == 'whirlpool':
            supID = whirlpool
        elif supplier == 'sanaky':
            supID = sanaky
        elif supplier == 'mitsubishi electric':
            supID = mitsubishi_electric
        elif supplier == 'canon':
            supID = canon
        elif supplier == 'fujifilm':
            supID = fujifilm
        elif supplier == 'sanco':
            supID = sanco
        elif supplier == 'asanzo':
            supID = asanzo
        elif supplier == 'fpt':
            supID = fpt
        elif supplier == 'huawei':
            supID = huawei

        tempJ = {'productName': productName,
                 'price': price,
                 'CategoryID': tulanh,
                 'CompanyID': tiki,
                 'hyperlink': i,
                 'LinkOfProductImage': src,
                 'SupplierID': supID
                 }
        data.append(tempJ)
    except:
        continue

pd.DataFrame(data)
print(len(data))
#Writing to JSON File

def writeToJSONFile(path, fileName, data):
    filePathNameWExt = './' + path + '/' + fileName + '.json'
    with open(filePathNameWExt, 'w') as fp:
        json.dump(data, fp)

path = './'
fileName = 'TuLanh_Tiki'


writeToJSONFile(path, fileName, data)

for i in data:
    print(i)