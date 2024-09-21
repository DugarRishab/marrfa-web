import React from "react";
import { Carousel } from "antd";
import "./Mobcarousel.css";

const Mobcarousel = ({ items, width}) => {
    return (
            <Carousel style={{ width: `calc(20px + var(${width}))` }} infinite={false}>
                {items.map((v) => v)}
            </Carousel>
    );
};

export default Mobcarousel;
