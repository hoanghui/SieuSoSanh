using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ViewModels
{
    public class ProductsViewModel
    {
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        public string Price { get; set; }
        public string HyperLink { get; set; }
        public string LinkOfProductImage { get; set; }
        public Nullable<int> CategoryID { get; set; }
        public Nullable<int> CompanyID { get; set; }
        public Nullable<int> SupplierID { get; set; }
        public string CategoryName { get; set; }
        public string CategoryCode { get; set; }
        public string SupplierName { get; set; }
        public string CompanyImage { get; set; }
    }
}
