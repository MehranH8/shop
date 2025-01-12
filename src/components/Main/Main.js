import {Bottomnavbar,Topnavbar} from "../Navbar/Navbar"
import Support from "../Support/Support"
import Blog from "../Blog/Blog"
import Blogdetails from "../Blog/Blogdetails/Blogdetails"
import Home from "../Home/Home"
import {  Route, Routes } from "react-router-dom";
import Page404 from "../Page404/Page404"
import Account from "../Account/Account"
import Shoplist from "../Shop/Shoplist/Shoplist"
import Orders from "../Orders/Orders"
import Aboutus from "../Aboutus/Aboutus"
import React from "react"
import Makeup from "../Products/Makeup/Makeup"
import Health from "../Products/Health/Health"
import Fashion from "../Products/Fashion/Fashion"
import Child from "../Products/Child/Child"
import Sport from "../Products/Sport/Sport"
import Accessory from "../Products/Accessory/Accessory"



const Main = () => {
    return (
        <div>
            <Topnavbar />
            <Bottomnavbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/support" element={<Support />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/blogdetail" element={<Blogdetails />} />
                <Route path="/account" element={<Account />} />
                <Route path="/products" element={<Shoplist />} />
                <Route path="/products/makeup" element={<Makeup />} />
                <Route path="/products/health" element={<Health />} />
                <Route path="/products/fashion" element={<Fashion />} />
                <Route path="/products/child" element={<Child />} />
                <Route path="/products/sport" element={<Sport />} />
                <Route path="/products/accessory" element={<Accessory />} />
                <Route path="/shoplist" element={<Orders />} />
                <Route path="/about" element={<Aboutus />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    )
}
export default Main