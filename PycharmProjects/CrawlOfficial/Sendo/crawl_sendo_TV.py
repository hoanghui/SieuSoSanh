from selenium import webdriver as wb
import pandas as pd
from tqdm import tqdm
import time
import json

webD = wb.Chrome('C:\\Users\\Admin\\Downloads\\chromedriver.exe')
webD.get('https://www.sendo.vn/tivi')

hrefLinkList = []
condition = True

while condition:
    time.sleep(5)
    allInfo = webD.find_elements_by_class_name('item_3x07')
    for eEle in allInfo:
        hrefLink = eEle.get_property('href')
        hrefLinkList.append(hrefLink)

    try:
        webD.find_elements_by_xpath('//*[@id="page-container"]/div/section/div[2]/div[5]/ul/li[11]')[-1].click()
    except:
        try:
            webD.find_elements_by_class_name('closeBtn_2C0k')[-1].click()
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
sanco = 1002
asanzo = 1003
fpt = 1004
huawei = 1005

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
    time.sleep(2.5)
    try:
        productName = webD.find_element_by_class_name('productName_3Cdc').text
        print(productName)
        price = webD.find_element_by_class_name('currentPrice_2zpf').text
        print(price)
        linkProductImage = webD.find_element_by_class_name('img_2xfX')
        src = linkProductImage.get_property('src')
        print(src)
        try:
            supplier = webD.find_element_by_xpath('//*[@id="productTab"]/div/div[1]/div/div/div/div[1]/ul/li[5]/span').text.lower()[0:-1]
        except:
            break
        # if supplier != 'dell' and supplier != 'Sony' and supplier != 'Philips' and supplier != 'Casper' and supplier != 'TCL' and supplier != 'LG' and supplier != 'Sharp' and supplier != 'Panasonic':
        #     supplier = webD.find_element_by_xpath(
        #         '//*[@id="__next"]/div[4]/div[1]/div[1]/div[4]/div[2]/div/div[2]/div[1]/span[2]/div').text
        print(supplier)
        supID = 0
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
        elif supplier:
            supID = 1007

        tempJ = {'productName': productName,
                 'price': price,
                 'CategoryID': tivi,
                 'CompanyID': sendo,
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
fileName = 'Tivi_Sendo'


writeToJSONFile(path, fileName, data)

for i in data:
    print(i)