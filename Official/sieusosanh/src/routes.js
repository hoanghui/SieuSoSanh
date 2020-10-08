import Home from "./views/home/Home";
import SearchPage from "./views/search-page/Search-page"
import ProductDetailPage from "./views/product-detail-page/ProductDetail-page"
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
    }
]
export  {routesHome}