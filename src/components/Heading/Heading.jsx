import React, { useState, useEffect } from 'react';
import "./Heading.css";

const Heading = ({heading, sub, color = 'white', align = 'center', size=2.5, style = {}}) => {
	return ( 
		<div className="section-heading" style={{
			color: color,
			alignItems: align == 'left' ? 'flex-start' : align == 'right' ? 'flex-end' : 'center',
			textAlign: align,
			fontSize: `${size}rem`,
			...style
		}}>
			<p>{heading}</p>
			<p className="sub">{ sub }</p>
		</div>
	 );
}
 
export default Heading;