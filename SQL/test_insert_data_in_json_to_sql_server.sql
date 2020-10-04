
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






	