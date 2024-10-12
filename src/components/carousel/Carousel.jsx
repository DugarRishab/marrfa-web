import React, { useRef, useState, useEffect } from "react";
import "./Carousel.css";
import { LeftCircleOutlined, RightCircleOutlined, CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import CustomButton from "../button/CustomButton";
import { Button } from "antd";

const Carousel = ({ items, indicator = true, controllers = true }) => {
	const [cardWidth, setCardWidth] = useState(0);
	const [containerWidth, setContainerWidth] = useState(0);
	const childRef = useRef();
	const containerRef = useRef();

	const N = items.length;

	const [margin, setMargin] = useState(0);
	const gap = 16;
	const delta = cardWidth + gap;
	const numCards = Math.floor(containerWidth / cardWidth);
	const width = delta * numCards + gap / 4;

	const [index, setIndex] = useState(0);

	// Track touch events
	const [touchStartX, setTouchStartX] = useState(0);
	const [touchEndX, setTouchEndX] = useState(0);

	const handleTouchStart = (e) => {
		setTouchStartX(e.touches[0].clientX);
	};

	const handleTouchMove = (e) => {
		setTouchEndX(e.touches[0].clientX);
	};

	const handleTouchEnd = () => {
		// Calculate swipe direction
		if (touchStartX - touchEndX > 50) {
			goRight(); // Swipe left to move right
		} else if (touchEndX - touchStartX > 50) {
			goLeft(); // Swipe right to move left
		}
	};

	const goRight = () => {
		if (margin > -delta * (N - numCards)) {
			setMargin(() => margin - delta);
			setIndex((prevIndex) => (prevIndex + 1) % N); // Loop to first item
		} else {
			// Reset to first position for infinite scroll
			setMargin(0);
			setIndex(0);
		}
	};

	const goLeft = () => {
		if (margin < 0) {
			setMargin(() => margin + delta);
			setIndex((prevIndex) => (prevIndex - 1 + N) % N); // Loop to last item
		} else {
			// Go to the last position for infinite scroll
			setMargin(-delta * (N - numCards));
			setIndex(N - 1);
		}
	};

	useEffect(() => {
		if (childRef.current && childRef.current.children) {
			setCardWidth(() => childRef.current.children[0].offsetWidth);
		}
	}, [childRef]);

	useEffect(() => {
		if (containerRef.current) {
			setContainerWidth(() => containerRef.current.offsetWidth);
		}
	}, [containerRef]);

	return (
		<div className="carousel-wrapper">
			<div className="controller-wrapper">
				<div className="controller-indicator">
					{controllers && (
						<Button.Group>
							<Button
								// type="primary"
								onClick={goLeft}
								icon={<CaretLeftOutlined />}
							></Button>
							<Button
								// type="primary"
								onClick={goRight}
								icon={<CaretRightOutlined />}
							></Button>
						</Button.Group>
					)}
					{indicator && (
						<div className="indicators">
							{items.map((value, idx) => (
								<div
									key={idx}
									className={
										"dot" + (idx === index ? " active" : "")
									}
								></div>
							))}
						</div>
					)}
				</div>
				<div
					style={{
						width: `${width}px`,
					}}
					className="carousel"
					ref={containerRef}
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd} // Handle swipe gesture
				>
					<div
						style={{
							marginLeft: `${margin}px`,
						}}
						className="items"
						ref={childRef}
					>
						{items.map((value, idx) => (
							<div key={idx}>{value}</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
