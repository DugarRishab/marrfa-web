import React from "react";

const GoogleMap = () => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5085.641480269243!2d88.4017510994479!3d22.694676068416875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCan%20I%20imbibe%20google%20Maps%20without%20an%20API%20key%3F!5e0!3m2!1sen!2sin!4v1726971384125!5m2!1sen!2sin"
            width={400}
            height={250}
            style={{border: 0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    );
};

export default GoogleMap;
