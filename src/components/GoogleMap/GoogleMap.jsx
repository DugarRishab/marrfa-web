import React from "react";
import "./GoogleMap.css";

const GoogleMap = () => {
	return (
		// <iframe
		//     src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5085.641480269243!2d88.4017510994479!3d22.694676068416875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCan%20I%20imbibe%20google%20Maps%20without%20an%20API%20key%3F!5e0!3m2!1sen!2sin!4v1726971384125!5m2!1sen!2sin"
		//     style={{border: 0}}
		//     allowFullScreen=""
		//     loading="lazy"
		//     referrerPolicy="no-referrer-when-downgrade"
		//     className="gmap"
		// ></iframe>
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.569005864388!2d55.258313475163106!3d25.18402677771945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d047294591%3A0x9ad7e353822dc797!2sThe%20Citadel%20Tower!5e0!3m2!1sen!2sin!4v1730327397402!5m2!1sen!2sin"
			// width="600"
			// height="450"
			style={{ border: 0 }}
			allowfullscreen=""
			loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="gmap"
		></iframe>
	);
};

export default GoogleMap;
