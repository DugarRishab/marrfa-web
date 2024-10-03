import React, { useState, useEffect } from 'react';
import "./Heading.css";

const Heading = ({heading, sub, color = 'white', align = 'center'}) => {
	return ( 
		<div className="section-heading" style={{
			color: color,
			alignItems: align == 'left' ? 'flex-start' : align == 'right' ? 'flex-end' : 'center',
			textAlign: align
		}}>
			<p>{heading}</p>
			<p className="sub">{ sub }</p>
		</div>
	 );
}
 
export default Heading;