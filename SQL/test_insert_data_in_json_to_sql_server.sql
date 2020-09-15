SELECT *	
FROM OPENROWSET (BULK 'D:\TaiLieuHocTap\DoAn\PycharmProjects\CrawlData\LaptopNguyenKim.JSON', SINGLE_CLOB) as import

--b2
Declare @JSON varchar(max)
SELECT @JSON=BulkColumn
FROM OPENROWSET (BULK 'D:\TaiLieuHocTap\DoAn\PycharmProjects\NguyenKim\LaptopNguyenKim.JSON', SINGLE_CLOB) import
SELECT *
FROM OPENJSON (@JSON)


Declare @JSON varchar(max)
SELECT @JSON=BulkColumn
FROM OPENROWSET (BULK 'D:\TaiLieuHocTap\DoAn\PycharmProjects\CrawlData\LaptopNguyenKim.json', SINGLE_CLOB) import

INSERT INTO Products (ProductName, Price,HyperLink,CategoryID,CompanyID,SupplierID)
SELECT * 
FROM OPENJSON (@JSON)
WITH 
(
	[nameOftheProduct] nvarchar(100), 
    [priceoftheProduct] varchar(20),
    [hyperlink] varchar(100),
	[CategoryID] int,
	[CompanyID] int,
	[SupplierID] int
)






	