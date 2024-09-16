import React, { useRef, useState, useEffect } from "react";
import "./Carousel.css";
import Arrow from "/assets/icons/arrow.png";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import CustomButton from "../button/CustomButton";

const Carousel = ({ items, indicator = false }) => {
    const [cardWidth, setCardWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const childRef = useRef();
    const containerRef = useRef();

    const N = items.length;

    const [margin, setMargin] = useState(0);
    const gap = 16;
    const delta = cardWidth + gap;
    const numCards = Math.round(containerWidth / cardWidth) - 1;
    const width = delta * numCards + gap / 4;

    const [index, setIndex] = useState(0);

    const goRight = () => {
        if (margin > -delta * (N - numCards)) {
            setMargin(() => margin - delta);
            setIndex(index + 1);
        }
    };
    const goLeft = () => {
        if (margin < 0) {
            setMargin(() => margin + delta);
            setIndex(index - 1);
        }
    };

    useEffect(() => {
        if (childRef.current && childRef.current.children) setCardWidth(() => childRef.current.children[0].offsetWidth);
    }, [childRef]);

    useEffect(() => {
        if (containerRef.current) setContainerWidth(() => containerRef.current.offsetWidth);
    }, [containerRef]);

    return (
        <div className="indicator-wrapper">
            <div className="carousel-wrapper">
            <CustomButton
                    invert
                    onClick={goLeft}
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
                />
                <div
                    style={{
                        width: `${width}px`,
                    }}
                    className="carousel"
                    ref={containerRef}
                >
                    <div
                        style={{
                            marginLeft: `${margin}px`,
                        }}
                        className="items"
                        ref={childRef}
                    >
                        {items.map((value, idx) => (
                            <>{value}</>
                        ))}
                    </div>
                </div>
                <CustomButton
                    invert
                    onClick={goRight}
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
                />
            </div>
            {indicator && (
                <div className="indicators">
                    {items.map((value, idx) => (
                        <div key={idx} className={"dot" + (idx == index ? " active" : "")}></div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Carousel;
