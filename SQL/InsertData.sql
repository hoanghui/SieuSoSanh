
---------------------------------------------- NGUYEN KIM ---------------------------
--LAPTOP_NGUYENKIM
Declare @JSON varchar(max)
SELECT @JSON=BulkColumn
FROM OPENROWSET (BULK 'D:\TaiLieuHocTap\DoAn\PycharmProjects\CrawlOfficial\NguyenKim\LaptopNguyenKim.json', SINGLE_CLOB) import

INSERT INTO Products (ProductName, Price,HyperLink,LinkOfProductImage,CategoryID,CompanyID,SupplierID)
SELECT * 
FROM OPENJSON (@JSON)
WITH 
(
	[nameOftheProduct] nvarchar(100), 
    [priceoftheProduct] varchar(20),
    [hyperlink] varchar(100),
	[LinkOfProductImage] varchar(MAX),
	[CategoryID] int,
	[CompanyID] int,
	[SupplierID] int
)

--TV_NGUYENKIM
Declare @JSON varchar(max)
SELECT @JSON=BulkColumn
FROM OPENROWSET (BULK 'D:\TaiLieuHocTap\DoAn\PycharmProjects\CrawlOfficial\NguyenKim\TVNguyenKim.json', SINGLE_CLOB) import

INSERT INTO Products (ProductName, Price,HyperLink,LinkOfProductImage,CategoryID,CompanyID,SupplierID)
SELECT * 
FROM OPENJSON (@JSON)
WITH 
(
	[nameOftheProduct] nvarchar(100), 
    [priceoftheProduct] varchar(20),
    [hyperlink] varchar(100),
	[LinkOfProductImage] varchar(MAX),
	[CategoryID] int,
	[CompanyID] int,
	[SupplierID] int
)

--MAYANH_NGUYENKIM
Declare @JSON varchar(max)
SELECT @JSON=BulkColumn
FROM OPENROWSET (BULK 'D:\TaiLieuHocTap\DoAn\PycharmProjects\CrawlOfficial\NguyenKim\MayAnhNguyenKim.json', SINGLE_CLOB) import

INSERT INTO Products (ProductName, Price,HyperLink,LinkOfProductImage,CategoryID,CompanyID,SupplierID)
SELECT * 
FROM OPENJSON (@JSON)
WITH 
(
	[nameOftheProduct] nvarchar(100), 
    [priceoftheProduct] varchar(20),
    [hyperlink] varchar(100),
	[LinkOfProductImage] varchar(MAX),
	[CategoryID] int,
	[CompanyID] int,
	[SupplierID] int
)

--TULANH
Declare @JSON varchar(max)
SELECT @JSON=BulkColumn
FROM OPENROWSET (BULK 'D:\TaiLieuHocTap\DoAn\PycharmProjects\CrawlOfficial\NguyenKim\TuLanhNguyenKim.json', SINGLE_CLOB) import

INSERT INTO Products (ProductName, Price,HyperLink,LinkOfProductImage,CategoryID,CompanyID,SupplierID)
SELECT * 
FROM OPENJSON (@JSON)
WITH 
(
	[nameOftheProduct] nvarchar(100), 
    [priceoftheProduct] varchar(20),
    [hyperlink] varchar(100),
	[LinkOfProductImage] varchar(MAX),
	[CategoryID] int,
	[CompanyID] int,
	[SupplierID] int
)

--MAYGIAT
Declare @JSON varchar(max)
SELECT @JSON=BulkColumn
FROM OPENROWSET (BULK 'D:\TaiLieuHocTap\DoAn\PycharmProjects\CrawlOfficial\NguyenKim\MayGiatNguyenKim.json', SINGLE_CLOB) import

INSERT INTO Products (ProductName, Price,HyperLink,LinkOfProductImage,CategoryID,CompanyID,SupplierID)
SELECT * 
FROM OPENJSON (@JSON)
WITH 
(
	[nameOftheProduct] nvarchar(100), 
    [priceoftheProduct] varchar(20),
    [hyperlink] varchar(100),
	[LinkOfProductImage] varchar(MAX),
	[CategoryID] int,
	[CompanyID] int,
	[SupplierID] int
)

--DIENTHOAI
Declare @JSON varchar(max)
SELECT @JSON=BulkColumn
FROM OPENROWSET (BULK 'D:\TaiLieuHocTap\DoAn\PycharmProjects\CrawlOfficial\NguyenKim\DienThoaiNguyenKim.json', SINGLE_CLOB) import

INSERT INTO Products (ProductName, Price,HyperLink,LinkOfProductImage,CategoryID,CompanyID,SupplierID)
SELECT * 
FROM OPENJSON (@JSON)
WITH 
(
	[nameOftheProduct] nvarchar(100), 
    [priceoftheProduct] varchar(20),
    [hyperlink] varchar(100),
	[LinkOfProductImage] varchar(MAX),
	[CategoryID] int,
	[CompanyID] int,
	[SupplierID] int
)

