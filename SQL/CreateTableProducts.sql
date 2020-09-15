﻿	
--Products
CREATE TABLE Products (
	ProductID INT IDENTITY NOT NULL PRIMARY KEY,
	ProductName nvarchar(100), 
    Price varchar(20), 
    HyperLink varchar(100),
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
	CategoryName nvarchar(50)
)
GO
--Companies
CREATE TABLE Companies (
	CompanyID INT IDENTITY NOT NULL PRIMARY KEY,
	CompanyName nvarchar(50)
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
INSERT INTO Categories VALUES ('Tivi')
INSERT INTO Categories VALUES ('Tủ lạnh')
INSERT INTO Categories VALUES ('Máy giặt')
INSERT INTO Categories VALUES ('Máy ảnh')
INSERT INTO Categories VALUES ('Laptop')
INSERT INTO Categories VALUES ('Điện thoại')

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


INSERT INTO Companies VALUES ('Nguyễn Kim')
INSERT INTO Companies VALUES ('Phong Vũ')
INSERT INTO Companies VALUES ('HC')
INSERT INTO Companies VALUES ('Sendo')
INSERT INTO Companies VALUES ('Tiki')
INSERT INTO Companies VALUES ('Lazada')
INSERT INTO Companies VALUES ('Shopee')
INSERT INTO Companies VALUES ('Mediamart')
