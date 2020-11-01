	
--Products
CREATE TABLE Products (
	ProductID INT IDENTITY NOT NULL PRIMARY KEY,
	ProductName nvarchar(100), 
    Price nvarchar(20), 
    HyperLink varchar(MAX),
	LinkOfProductImage varchar(MAX),
	CategoryID INT,
	CompanyID INT,
	SupplierID INT,
	FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID),
	FOREIGN KEY (CompanyID) REFERENCES Companies(CompanyID),
	FOREIGN KEY (SupplierID) REFERENCES Suppliers(SupplierID)
)
GO
--Categories
CREATE TABLE Categories (
	CategoryID INT IDENTITY NOT NULL PRIMARY KEY,
	CategoryName nvarchar(50),
	CategoryCode varchar(20)
)
GO
--Companies
CREATE TABLE Companies (
	CompanyID INT IDENTITY NOT NULL PRIMARY KEY,
	CompanyName nvarchar(50),
	CompanyImage varchar(MAX)
)
GO

--Supplier
CREATE TABLE Suppliers (
	SupplierID INT IDENTITY NOT NULL PRIMARY KEY,
	SupplierName nvarchar(50)
)
GO

--Properties
CREATE TABLE Properties (
	PropertyID INT IDENTITY NOT NULL PRIMARY KEY,
	PropertyName nvarchar(50)
)
GO

--CategoryProperty
CREATE TABLE CategoryProperty (
	CategoryID INT,
	PropertyID INT,
	PRIMARY KEY (CategoryID, PropertyID),
	FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID),
	FOREIGN KEY (PropertyID) REFERENCES Properties(PropertyID)
)
GO

--ProductProperty
CREATE TABLE ProductProperty (
	ProductID INT,
	PropertyID INT,
	PRIMARY KEY (ProductID, PropertyID),
	ValueAsString nvarchar(50)
	FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
	FOREIGN KEY (PropertyID) REFERENCES Properties(PropertyID)
)
GO


--------- INSERT------------
INSERT INTO Categories VALUES (N'Tivi', 'tivi')
INSERT INTO Categories VALUES (N'Tủ lạnh', 'tulanh')
INSERT INTO Categories VALUES (N'Máy giặt', 'maygiat')
INSERT INTO Categories VALUES (N'Máy ảnh', 'mayanh')
INSERT INTO Categories VALUES (N'Laptop', 'laptop')
INSERT INTO Categories VALUES (N'Điện thoại', 'dienthoai')

UPDATE Categories SET CategoryName = N'Tivi' WHERE CategoryID = 1
UPDATE Categories SET CategoryName = N'Tủ lạnh' WHERE CategoryID = 2
UPDATE Categories SET CategoryName = N'Máy giặt' WHERE CategoryID = 3
UPDATE Categories SET CategoryName = N'Máy ảnh' WHERE CategoryID = 4
UPDATE Categories SET CategoryName = N'Laptop' WHERE CategoryID = 5
UPDATE Categories SET CategoryName = N'Điện thoại' WHERE CategoryID = 6

INSERT INTO Suppliers VALUES ('Dell')
INSERT INTO Suppliers VALUES ('Asus')
INSERT INTO Suppliers VALUES ('Acer')
INSERT INTO Suppliers VALUES ('MSI')
INSERT INTO Suppliers VALUES ('Lenovo')
INSERT INTO Suppliers VALUES ('LG')
INSERT INTO Suppliers VALUES ('Apple')
INSERT INTO Suppliers VALUES ('HP')
INSERT INTO Suppliers VALUES ('Samsung')
INSERT INTO Suppliers VALUES ('Sony')
INSERT INTO Suppliers VALUES ('Philips')
INSERT INTO Suppliers VALUES ('Casper')
INSERT INTO Suppliers VALUES ('TCL')
INSERT INTO Suppliers VALUES ('Sharp')
INSERT INTO Suppliers VALUES ('Panasonic')
INSERT INTO Suppliers VALUES ('Oppo')
INSERT INTO Suppliers VALUES ('Nokia')
INSERT INTO Suppliers VALUES ('Vivo')
INSERT INTO Suppliers VALUES ('Itel')
INSERT INTO Suppliers VALUES ('Apple')
INSERT INTO Suppliers VALUES ('Vsmart')
INSERT INTO Suppliers VALUES ('Realme')
INSERT INTO Suppliers VALUES ('Xiaomi')
INSERT INTO Suppliers VALUES ('Aqua')
INSERT INTO Suppliers VALUES ('Hitachi')
INSERT INTO Suppliers VALUES ('Toshiba')
INSERT INTO Suppliers VALUES ('Electrolux')
INSERT INTO Suppliers VALUES ('Whirlpool')
INSERT INTO Suppliers VALUES ('Sanaky')
INSERT INTO Suppliers VALUES ('Mitsubishi Electric')
INSERT INTO Suppliers VALUES ('Canon')
INSERT INTO Suppliers VALUES ('Fujifilm')
INSERT INTO Suppliers VALUES ('Sanco')
INSERT INTO Suppliers VALUES ('Asanzo')
INSERT INTO Suppliers VALUES ('FPT')

INSERT INTO Companies VALUES ('Nguyễn Kim','https://img.sosanhgia.com/images/4ece80f1c66b476990fe84de956afafb/nguyen-kim.jpg')
INSERT INTO Companies VALUES ('Phong Vũ','https://img.sosanhgia.com/images/dc9957af6bdf48149ac16fe0835113d4/phongvu.jpg')
INSERT INTO Companies VALUES ('HC','https://img.sosanhgia.com/images/ddb96ceb483344788f72dcc1dcf1069a/hc.jpg')
INSERT INTO Companies VALUES ('Sendo','https://img.sosanhgia.com/images/a02686bbefd74fb59c14e96c196086ed/sendo.jpeg')
INSERT INTO Companies VALUES ('Tiki','https://img.sosanhgia.com/images/2fe604500fe548aa94e52d2d3849a8ca/tiki.jpg')
INSERT INTO Companies VALUES ('Lazada','https://img.sosanhgia.com/images/fba6108022794fc894dd53ec7de00b2d/image.jpeg')
INSERT INTO Companies VALUES ('Shopee', 'https://img.sosanhgia.com/images/1ef1aee0e2cb435893d32fe07031ec0c/shopee-mall.jpg')
INSERT INTO Companies VALUES ('Mediamart','https://img.sosanhgia.com/images/cb3acdd6e7034430b306e84c29d5660f/mediamart.jpg')

DROP TABLE Products
DROP TABLE CategoryProperty
DROP TABLE Categories
DROP TABLE ProductProperty
DROP TABLE Properties
DROP TABLE Suppliers
DROP TABLE Companies

