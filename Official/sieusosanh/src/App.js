import React from 'react';
// import logo from './logo.svg';
import {BrowserRouter,Switch} from "react-router-dom"
import IndexNavbar from "../src/components/Navbars/IndexNavbar.js";
import IndexHeader from "../src/components/Headers/IndexHeader.js";
import HomeTemplate from "./template/HomeTemplate";
import {Route} from "react-router-dom";
import {routesHome}from "./routes"
import './App.css';
function App() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  const showMenuHome=routes=>{
    if(routes && routes.length >0 ){
        return routes.map((item,index)=>{
          return(
            //homeTemplate is HOC (High-Order-copmonent)
            <HomeTemplate
              key={index}
              exact={item.exact}
              path={item.path}
              Component={item.component}
            />
          )
        })
    }
  }
  return (
    //BrowserRouter se theo doi theo thanh url de render view tuong ung dua theo file routes.js
    <BrowserRouter>
      <Switch>
        {showMenuHome(routesHome)}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
