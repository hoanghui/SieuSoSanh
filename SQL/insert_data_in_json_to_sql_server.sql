--LAPTOP
Declare @JSON varchar(max)
SELECT @JSON=BulkColumn
FROM OPENROWSET (BULK 'D:\TaiLieuHocTap\DoAn\PycharmProjects\NguyenKim\LaptopNguyenKim.json', SINGLE_CLOB) import

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

--TV
Declare @JSON varchar(max)
SELECT @JSON=BulkColumn
FROM OPENROWSET (BULK 'D:\TaiLieuHocTap\DoAn\PycharmProjects\NguyenKim\TVNguyenKim.json', SINGLE_CLOB) import

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

--MAYANH
Declare @JSON varchar(max)
SELECT @JSON=BulkColumn
FROM OPENROWSET (BULK 'D:\TaiLieuHocTap\DoAn\PycharmProjects\NguyenKim\MayAnhNguyenKim.json', SINGLE_CLOB) import

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
FROM OPENROWSET (BULK 'D:\TaiLieuHocTap\DoAn\PycharmProjects\NguyenKim\TuLanhNguyenKim.json', SINGLE_CLOB) import

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
FROM OPENROWSET (BULK 'D:\TaiLieuHocTap\DoAn\PycharmProjects\NguyenKim\MayGiatNguyenKim.json', SINGLE_CLOB) import

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
FROM OPENROWSET (BULK 'D:\TaiLieuHocTap\DoAn\PycharmProjects\NguyenKim\DienThoaiNguyenKim.json', SINGLE_CLOB) import

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