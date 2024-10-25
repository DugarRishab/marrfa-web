import React, { useState, useEffect } from 'react';
import "./ReviewCard.css";
const ReviewCard = ({ name, tagline, text }) => {
	return (
		<div className="reviewcard">
			<div className="image">
				<img src="/assets/balloon.jpeg" />
				<div className="name">{name}</div>
				<div className="org">{tagline}</div>
			</div>
			<div className="desc">{text}</div>
		</div>
	);
};
 
export default ReviewCard;