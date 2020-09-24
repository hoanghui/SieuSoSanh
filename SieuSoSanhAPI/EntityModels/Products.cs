//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace EntityModels
{
    using System;
    using System.Collections.Generic;
    
    public partial class Products
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Products()
        {
            this.ProductProperty = new HashSet<ProductProperty>();
        }
    
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        public string Price { get; set; }
        public string HyperLink { get; set; }
        public Nullable<int> CategoryID { get; set; }
        public Nullable<int> CompanyID { get; set; }
        public Nullable<int> SupplierID { get; set; }
    
        public virtual Categories Categories { get; set; }
        public virtual Companies Companies { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ProductProperty> ProductProperty { get; set; }
        public virtual Suppliers Suppliers { get; set; }
    }
}