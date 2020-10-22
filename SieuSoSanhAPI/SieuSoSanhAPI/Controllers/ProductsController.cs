using EntityModels;
using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Runtime.Remoting.Messaging;
using System.Web.Http;
using System.Web.Http.Cors;
using ViewModels;

namespace SieuSoSanhAPI.Controllers
{
    // Enable cors (connect API)
    [EnableCors(origins: "http://localhost:3000 ", headers:"*", methods:"*")]
    public class ProductsController : ApiController
    {
        // GET api/values
        public IEnumerable<ProductsViewModel> Get()
        {
            using (EntityDataContext _context = new EntityDataContext())
            {
                return _context.Products.Select(p=>new ProductsViewModel()
                {
                    ProductID = p.ProductID,
                    ProductName = p.ProductName,
                    HyperLink = p.HyperLink,
                    Price = p.Price,
                    LinkOfProductImage = p.LinkOfProductImage
                }).ToList();
            }
        }

        // SETTING ROUTE
        //Search by product name
        [Route("api/products/search/{ProductName}")]    
        [HttpGet]
        public IEnumerable<ProductsViewModel> Search(string productName)
        {
            using (EntityDataContext _context = new EntityDataContext())
            {
                return _context.Products.Where(p=>p.ProductName.Contains(productName)).Select(p => new ProductsViewModel()
                {
                    ProductID = p.ProductID,
                    ProductName = p.ProductName,
                    HyperLink = p.HyperLink,
                    Price = p.Price,
                    LinkOfProductImage = p.LinkOfProductImage
                }).ToList();
            }
        }

        //
        [Route("api/products/{categoryCode}")]
        [HttpGet]
        public IEnumerable<ProductsViewModel> GetCategory(string categoryCode)
        {
            using (EntityDataContext _context = new EntityDataContext())
            {
                var list = (from p in _context.Products
                            join c in _context.Categories on p.CategoryID equals c.CategoryID
                            where c.CategoryCode == categoryCode
                            select new ProductsViewModel
                            {
                                ProductID = p.ProductID,
                                ProductName = p.ProductName,
                                HyperLink = p.HyperLink,
                                Price = p.Price,
                                LinkOfProductImage = p.LinkOfProductImage,
                                CategoryName = c.CategoryName
                            }).ToList();
                return list;
            }
        }

        [Route("api/products/detail/{id}")]
        [HttpGet]
        public IEnumerable<ProductsViewModel> GetProductByID(int id)
        {
            using (EntityDataContext _context = new EntityDataContext())
            {
                return _context.Products.Where(p => p.ProductID == id).Select(p => new ProductsViewModel()
                {
                    ProductID = p.ProductID,    
                    ProductName = p.ProductName,
                    HyperLink = p.HyperLink,
                    Price = p.Price,
                    LinkOfProductImage = p.LinkOfProductImage,
                    CategoryID = p.CategoryID,
                    SupplierID = p.SupplierID,
                    CompanyID = p.CompanyID
                }).ToList();
            }
        }

        //[Route("api/Products/detail/{id}")]
        //[HttpGet]
        //public IEnumerable<SuppliersViewModel> GetBrandNameByCategoryCode(int CategoryID)
        //{
        //    using (EntityDataContext _context = new EntityDataContext())
        //    {
        //        //var list = (from p in _context.Products
        //        //            join c in _context.Categories on p.CategoryID equals c.CategoryID
        //        //            where c.CategoryCode == categoryCode
        //        //            group p by p.SupplierID into temp
        //        //            select new SuppliersViewModel
        //        //            {
        //        //                SupplierName = temp.

        //        //            }).ToList();
        //        //return list;

        //        var products = _context.Products.Where(n => n.CategoryID == CategoryID).ToList();
        //        var supplierIds = products.Select(n => n.SupplierID).Distinct().ToList();
        //        var suppliers = _context.Suppliers.Where(m => supplierIds.Contains(m.SupplierID)).ToList();
        //        return suppliers;
        //    }
        //}


        //[Route("api/suppliers/{categoryCode}")]
        //[HttpGet]
        //public IEnumerable<SuppliersViewModel> GetSuppliers(string categoryCode)
        //{
        //    using (EntityDataContext _context = new EntityDataContext())
        //    {
        //        var category = _context.Categories.Where(n => n.CategoryCode == categoryCode).ToList();
        //            var categoryID = category[0].CategoryID;
        //        var products = _context.Products.Where(p => p.CategoryID == categoryID).ToList();
        //        var supplierIds = products.Select(n => n.SupplierID).Distinct().ToList();
        //        var suppliersTemp = _context.Suppliers.Where(m => supplierIds.Contains(m.SupplierID)).ToList();
        //        var suppliers = (from p in suppliersTemp
        //                         select new SuppliersViewModel { 
        //                            SupplierName = p.SupplierName
        //                         }).ToList();
        //        return suppliers;
        //    }
        //}

        //[Route("api/Products/sameProducts/{ProductName}")]
        //[HttpGet]
        //public IEnumerable<ProductsViewModel> GetSameProduct(string productName)
        //{
        //    using (EntityDataContext _context = new EntityDataContext())
        //    {
        //    }
        //}

    }
}
