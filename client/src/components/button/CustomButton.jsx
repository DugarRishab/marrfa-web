import React from "react";
import "./CustomButton.css";

const CustomButton = ({ text, invert = false, fullWidth=false, size=16, ...props }) => {
    return (
        <button style = {{
          width: fullWidth?"100%":"max-content" ,
          fontSize: `${size}px`
        }} {...props} className={"custom-btn" + (invert ? " invert" : "")}>
            {text}
        </button>
    );
};

export default CustomButton;
