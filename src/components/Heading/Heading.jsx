import React, { useState, useEffect } from 'react';
import "./Heading.css";

const Heading = ({heading, sub, color = 'white', align = 'center', style = {}}) => {
	return ( 
		<div className="section-heading" style={{
			color: color,
			alignItems: align == 'left' ? 'flex-start' : align == 'right' ? 'flex-end' : 'center',
			textAlign: align,
			fontSize: `var(--heading-textsize)`,
			// fontFamily: 'var(--heading-font)',
			...style
		}}>
			<p>{heading}</p>
			<p className="sub">{ sub }</p>
		</div>
	 );
}
 
export default Heading;