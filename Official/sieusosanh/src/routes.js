import Home from "./views/home/Home";
import SearchPage from "./views/search-page/Search-page"
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
    }


]
export  {routesHome}