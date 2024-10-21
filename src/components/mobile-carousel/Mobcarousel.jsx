import React, { useRef, useEffect, useState } from "react";
import { Carousel } from "antd";
import "./Mobcarousel.css";
import CustomButton from "../button/CustomButton";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

const Mobcarousel = ({ items }) => {
	const carouselRef = useRef(null);
	const childRef = useRef([]);
	const containerRef = useRef(null);

	const { innerWidth } = window;

	const [cardWidth, setCardWidth] = useState(0);
	const [numCards, setNumCards] = useState(1);

	const gap = 16;
	const delta = cardWidth + gap;
	// const width = delta * numCards + gap / 4;

	// Handle next and previous carousel navigation
	const goToNext = () => {
		carouselRef.current.next();
	};

	const goToPrev = () => {
		carouselRef.current.prev();
	};

	// Update details such as card width and number of cards
	const updateDetails = () => {
		if (childRef && childRef.current && containerRef && containerRef.current) {

			const containerWidth = containerRef.current.offsetWidth;
			console.log(containerWidth)
			// Ensure the first card is rendered before accessing its offsetWidth
			const firstCard = childRef.current[0];
			if (firstCard) {
				const cardWidthCopy = firstCard.offsetWidth;
				setCardWidth(cardWidthCopy);
				// Calculate the number of cards to display based on screen width
				setNumCards(
					Math.max(1, Math.floor(containerWidth / (cardWidthCopy + gap)))
				);
			}
		}
	};

	// Call updateDetails after the first render
	useEffect(() => {
		updateDetails();
		// Delay the update to ensure DOM is fully loaded
		setTimeout(() => {
			updateDetails();
		}, 100); // Small delay

		// Add event listener to update details on window resize for responsiveness
		const handleResize = () => updateDetails();
		// window.addEventListener("resize", handleResize);

		// Cleanup the event listener
		// return () => window.removeEventListener("resize", handleResize);
	}, [items]);

	return (
		<div className="mobile-carousel" ref={containerRef}>
			{innerWidth > 720 && (
				<CustomButton
					invert
					onClick={goToPrev}
					style={{
						padding: 0,
						background: "transparent",
						boxShadow: "none",
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
			)}
			<Carousel
				ref={carouselRef}
				style={{ width: `${cardWidth * numCards + gap}px` }}
				infinite={true}
				adaptiveHeight
				slidesToShow={numCards}
				slidesToScroll={numCards}
				onInit={updateDetails}
				easing="ease-in-out"
				dots={innerWidth < 720}
				dotPosition=""
				accessibility

				// centerMode={true}
			>
				{items.map((item, idx) => (
					<div
						className="child-wrapper"
						key={idx}
						style={{ width: "fit-content" }}
						ref={(el) => (childRef.current[idx] = el)}
					>
						{item}
					</div>
				))}
			</Carousel>
			{innerWidth > 720 && (
				<CustomButton
					invert
					onClick={goToNext}
					style={{
						padding: 0,
						background: "transparent",
						boxShadow: "none",
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
			)}
		</div>
	);
};

export default Mobcarousel;
