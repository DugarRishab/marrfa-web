import React, { useRef, useState, useEffect } from "react";
import "./Carousel.css";

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
    const width = delta * numCards + gap;

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
        if(childRef.current && childRef.current.children)setCardWidth(() => childRef.current.children[0].offsetWidth);
    }, [childRef]);

    useEffect(()=>{
        if(containerRef.current)setContainerWidth(() => containerRef.current.offsetWidth);
    }, [containerRef]);

    return (
        <div className="indicator-wrapper">
            <div className="carousel-wrapper">
                <button className="direction" onClick={goLeft}>
                    <i className="material-icons gradient-text">arrow_back_ios</i>
                </button>
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
                <button className="direction" onClick={goRight}>
                    <i className="material-icons gradient-text">arrow_forward_ios</i>
                </button>
            </div>
            {indicator && <div className="indicators">
                {items.map((value, idx) => (
                    <div key={idx} className={"dot"+(idx==index?" active":"")}></div>
                ))}
            </div>}
        </div>
    );
};

export default Carousel;
