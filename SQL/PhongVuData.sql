---------------------------------------PHONG VU-----------------------------------
--TV

Declare @JSON1 varchar(max)
SELECT @JSON1=BulkColumn
FROM OPENROWSET (BULK 'D:\TaiLieuHocTap\DoAn\PycharmProjects\CrawlOfficial\PhongVu\Tivi_PhongVu.json', SINGLE_CLOB) import

INSERT INTO Products (ProductName, Price,HyperLink,LinkOfProductImage,CategoryID,CompanyID,SupplierID)
SELECT * 
FROM OPENJSON (@JSON1)
WITH 
(
	[productName] nvarchar(100), 
    [price] varchar(20),
    [hyperlink] varchar(100),
	[LinkOfProductImage] varchar(MAX),
	[CategoryID] int,
	[CompanyID] int,
	[SupplierID] int
)

--DIENTHOAI
Declare @JSON2 varchar(max)
SELECT @JSON2=BulkColumn
FROM OPENROWSET (BULK 'D:\TaiLieuHocTap\DoAn\PycharmProjects\CrawlOfficial\PhongVu\DienThoai_PhongVu.json', SINGLE_CLOB) import

INSERT INTO Products (ProductName, Price,HyperLink,LinkOfProductImage,CategoryID,CompanyID,SupplierID)
SELECT * 
FROM OPENJSON (@JSON2)
WITH 
(
	[productName] nvarchar(100), 
    [price] varchar(20),
    [hyperlink] varchar(100),
	[LinkOfProductImage] varchar(MAX),
	[CategoryID] int,
	[CompanyID] int,
	[SupplierID] int
)

--TULANH
Declare @JSON3 varchar(max)
SELECT @JSON3=BulkColumn
FROM OPENROWSET (BULK 'D:\TaiLieuHocTap\DoAn\PycharmProjects\CrawlOfficial\PhongVu\TuLanh_PhongVu.json', SINGLE_CLOB) import

INSERT INTO Products (ProductName, Price,HyperLink,LinkOfProductImage,CategoryID,CompanyID,SupplierID)
SELECT * 
FROM OPENJSON (@JSON3)
WITH 
(
	[productName] nvarchar(100), 
    [price] varchar(20),
    [hyperlink] varchar(100),
	[LinkOfProductImage] varchar(MAX),
	[CategoryID] int,
	[CompanyID] int,
	[SupplierID] int
)

--MAYGIAT
Declare @JSON4 varchar(max)
SELECT @JSON4=BulkColumn
FROM OPENROWSET (BULK 'D:\TaiLieuHocTap\DoAn\PycharmProjects\CrawlOfficial\PhongVu\MayGiat_PhongVu.json', SINGLE_CLOB) import

INSERT INTO Products (ProductName, Price,HyperLink,LinkOfProductImage,CategoryID,CompanyID,SupplierID)
SELECT * 
FROM OPENJSON (@JSON4)
WITH 
(
	[productName] nvarchar(100), 
    [price] varchar(20),
    [hyperlink] varchar(100),
	[LinkOfProductImage] varchar(MAX),
	[CategoryID] int,
	[CompanyID] int,
	[SupplierID] int
)

--MAY ANH
Declare @JSON5 varchar(max)
SELECT @JSON5=BulkColumn
FROM OPENROWSET (BULK 'D:\TaiLieuHocTap\DoAn\PycharmProjects\CrawlOfficial\PhongVu\MayAnh_PhongVu.json', SINGLE_CLOB) import

INSERT INTO Products (ProductName, Price,HyperLink,LinkOfProductImage,CategoryID,CompanyID,SupplierID)
SELECT * 
FROM OPENJSON (@JSON5)
WITH 
(
	[productName] nvarchar(100), 
    [price] varchar(20),
    [hyperlink] varchar(100),
	[LinkOfProductImage] varchar(MAX),
	[CategoryID] int,
	[CompanyID] int,
	[SupplierID] int
)

--LAPTOP
Declare @JSON6 varchar(max)
SELECT @JSON6=BulkColumn
FROM OPENROWSET (BULK 'D:\TaiLieuHocTap\DoAn\PycharmProjects\CrawlOfficial\PhongVu\Laptop_PhongVu.json', SINGLE_CLOB) import

INSERT INTO Products (ProductName, Price,HyperLink,LinkOfProductImage,CategoryID,CompanyID,SupplierID)
SELECT * 
FROM OPENJSON (@JSON6)
WITH 
(
	[productName] nvarchar(100), 
    [price] varchar(20),
    [hyperlink] varchar(100),
	[LinkOfProductImage] varchar(MAX),
	[CategoryID] int,
	[CompanyID] int,
	[SupplierID] int
)
