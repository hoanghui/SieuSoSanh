import React, { Fragment } from 'react'
import { Route } from "react-router-dom"
import Navbar from "../components/Navbars/IndexNavbar"
import Footer from "../components/Footers/IndexFooter"
const HomeLayout = props => {
    return (
        <Fragment>
            <Navbar></Navbar>
            {props.children}
            <Footer></Footer>
        </Fragment>

    )


}
export default function HomeTemplate({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={propsComponent => (
                <HomeLayout>
                    <Component {...propsComponent} />
                </HomeLayout>
            )}
        />
    )
}
