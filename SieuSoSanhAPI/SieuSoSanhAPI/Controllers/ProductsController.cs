using EntityModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using ViewModels;

namespace SieuSoSanhAPI.Controllers
{
    // Enable cors (connect API)
    [EnableCors(origins: "http://localhost:3002", headers:"*", methods:"*")]
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
                    Price = p.Price
                }).ToList();
            }
        }

        // SETTING ROUTE
        [Route("api/Products/{ProductName}")]
        [HttpGet]
        public IEnumerable<ProductsViewModel> Search(string ProductName)
        {
            using (EntityDataContext _context = new EntityDataContext())
            {
                return _context.Products.Where(p=>p.ProductName.Contains(ProductName)).Select(p => new ProductsViewModel()
                {
                    ProductID = p.ProductID,
                    ProductName = p.ProductName,
                    HyperLink = p.HyperLink,
                    Price = p.Price
                }).ToList();
            }
        }
    }
}
