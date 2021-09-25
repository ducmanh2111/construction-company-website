import React from "react";
import Info from "../components/Info";
import ListProducts from "../components/ListProducts";
import Slider from "../components/Slider";

const Home = () => {
    return (
        <>
            <Slider />
            <Info />
            <ListProducts />
        </>
    );
};

export default Home;
