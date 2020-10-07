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
        [Route("api/Products/search/{ProductName}")]
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
                    Price = p.Price,
                    LinkOfProductImage = p.LinkOfProductImage
                }).ToList();
            }
        }

        //
        [Route("api/Products/{CategoryName}")]
        [HttpGet]
        public IEnumerable<ProductsViewModel> getCategory(string CategoryName)
        {
            using (EntityDataContext _context = new EntityDataContext())
            {
                var list = (from p in _context.Products
                            join c in _context.Categories on p.CategoryID equals c.CategoryID
                            where c.CategoryName == CategoryName
                            select new ProductsViewModel
                            {
                                ProductID = p.ProductID,
                                ProductName = p.ProductName,
                                HyperLink = p.HyperLink,
                                Price = p.Price,
                                LinkOfProductImage = p.LinkOfProductImage
                            }).ToList();
                return list;
            }
        }

        public object GetOrderInSpaceTime_Linq(OrderFullReq req)
        {
            var res = All.Where(x => x.OrderDate >= req.DateFrom && x.OrderDate <= req.DateTo);
            var offSet = (req.Page - 1) * req.Size;
            var total = res.Count();
            int totalPage = (total % req.Size) == 0 ? (int)(total / req.Size) : ((int)(total / req.Size) + 1);
            var data = res.OrderBy(x => x.OrderDate).Skip(offSet).Take(req.Size).ToList();
            List<object> lst = new List<object>();
            for (int i = 0; i < data.Count(); i++)
            {
                var item = data[i];
                var tam = new
                {
                    STT = i + 1 + offSet,
                    item.OrderId,
                    item.CustomerId,
                    item.EmployeeId,
                    item.OrderDate,
                    item.RequiredDate,
                    item.ShippedDate,
                    item.ShipVia,
                    item.Freight,
                    item.ShipName,
                    item.ShipAddress,
                    item.ShipCity,
                    item.ShipRegion,
                    item.ShipPostalCode,
                    item.ShipCountry
                };
                lst.Add(tam);
            }
            return new
            {
                Data = lst,
                TotalRecords = total,
                Page = req.Page,
                Size = req.Size,
                TotalPages = totalPage
            };
        }
    }
}
