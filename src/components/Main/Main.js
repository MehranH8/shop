import {Bottomnavbar,Topnavbar} from "../Navbar/Navbar"
import Support from "../Support/Support"
import Blog from "../Blog/Blog"
import Blogdetails from "../Blog/Blogdetails/Blogdetails"
import Home from "../Home/Home"
import { Navigate, Route, Routes } from "react-router-dom";
import Page404 from "../Page404/Page404"
import Account from "../Account/Account"
import Shoplist from "../Shop/Shoplist/Shoplist"
import Orders from "../Orders/Orders"
import Aboutus from "../Aboutus/Aboutus"
import React from "react"



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
                <Route path="/shoplist" element={<Orders />} />
                <Route path="/about" element={<Aboutus />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    )
}
export default Main