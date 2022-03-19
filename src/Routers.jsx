import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home"
import Shopingcart from "./pages/ShopingCart/ShopingCart";

const Routers = () => (
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/shopingcart" element={<Shopingcart />} />
        <Route path="/" element={<Navigate to="/home" />} />{/*redirect to home*/}
    </Routes>
)


export default Routers;