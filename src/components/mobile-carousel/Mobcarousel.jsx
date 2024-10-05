import React, {useRef} from "react";
import { Carousel } from "antd";
import "./Mobcarousel.css";
import CustomButton from "../button/CustomButton";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

const Mobcarousel = ({ items, width }) => {
    const carouselRef = useRef(null);

    const goToNext = () => {
      carouselRef.current.next();
    };
  
    const goToPrev = () => {
      carouselRef.current.prev();
    };

    const {innerWidth} = window;

    return (
        <div className="mobile-carousel">
            {innerWidth>720 && <CustomButton
                    invert
                    onClick={goToPrev}
                    style={{
                        padding:0,
                        background: "transparent",
                        boxShadow: "none"
                    }}
                    startIcon={
                        <LeftCircleOutlined
                            style={{
                                fontSize: 30,
                                color: "var(--cyan)",
                            }}
                        />
                    }
                />}
            <Carousel ref={carouselRef} style={{ width: `calc(20px + var(${width}))` }} infinite={true}>
                {items.map((v) => v)}
            </Carousel>
            {innerWidth>720 && <CustomButton
                    invert
                    onClick={goToNext}
                    style={{
                        padding:0,
                        background: "transparent",
                        boxShadow: "none"
                    }}
                    startIcon={
                        <RightCircleOutlined
                            style={{
                                fontSize: 30,
                                color: "var(--cyan)",
                            }}
                        />
                    }
                />}
        </div>
    );
};

export default Mobcarousel;
