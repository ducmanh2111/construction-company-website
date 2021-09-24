import React from "react";
import Info from "../components/Info";
import ListProducts from "../components/ListProducts";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Home = () => {
    return (
        <>
            <div className="page-wrapper">
                <Slider />
                <Info />
                <ListProducts />
            </div>
        </>
    );
};

export default Home;
