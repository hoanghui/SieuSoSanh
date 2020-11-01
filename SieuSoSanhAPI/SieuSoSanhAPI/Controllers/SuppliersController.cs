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
    [EnableCors(origins: "http://localhost:3000 ", headers: "*", methods: "*")]
    public class SuppliersController: ApiController
    {
        [Route("api/suppliers/{categoryCode}")]
        [HttpGet]
        public IEnumerable<SuppliersViewModel> GetSuppliers(string categoryCode)
        {
            using (EntityDataContext _context = new EntityDataContext())
            {
                var category = _context.Categories.Where(n => n.CategoryCode == categoryCode).ToList();
                var categoryID = category[0].CategoryID;
                var products = _context.Products.Where(p => p.CategoryID == categoryID).ToList();
                var supplierIds = products.Select(n => n.SupplierID).Distinct().ToList();
                var suppliersTemp = _context.Suppliers.Where(m => supplierIds.Contains(m.SupplierID)).ToList();
                    List<SuppliersViewModel> suppliers = new List<SuppliersViewModel>();
                foreach (var supplier in suppliersTemp)
                {
                    var totalProduct = _context.Products.Where(n => n.SupplierID == supplier.SupplierID).Count();
                    var temp = (from p in suppliersTemp
                                     where p.SupplierID == supplier.SupplierID
                                     select new SuppliersViewModel
                                     {
                                         SupplierName = p.SupplierName,
                                         SupplierID = p.SupplierID,
                                         CategoryCode = categoryCode,
                                         QuantityProduct = totalProduct
                                     }).ToList();
                    suppliers.AddRange(temp);
                }
                return suppliers;
            }
        }
    }
}