import Home from "./views/home/Home";
import SearchPage from "./views/search-page/Search-page"
import ProductDetailPage from "./views/product-detail-page/ProductDetail-page"
import ListProductsPage from "./views/list-product-category-page/ListProductsPage";
const routesHome=[
    {
        path:"/",
        exact:true,
        component:Home
    },
    {
        path:"/search/:kw",
        exact:false,
        component:SearchPage
    },
    {
        path:"/product/:id",
        exact:false,
        component:ProductDetailPage
    },
    {
        path:"/category/:code",
        exact:false,
        component:ListProductsPage
    }
]
export  {routesHome}