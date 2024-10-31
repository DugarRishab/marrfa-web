import React, { useState, useEffect } from 'react';
import "./AvatarCard.css";

const AvatarCard = ({ name, designation, dp }) => {
	return (
		<div className="avatar">
			<img src={dp} />
			<div className="whois">
				<div className="name">{name}</div>
				<div className="desig">{designation}</div>
			</div>
		</div>
	);
};

export default AvatarCard;