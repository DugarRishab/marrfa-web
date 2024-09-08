import React from "react";
import "./CustomButton.css";

const CustomButton = ({ text, invert = false, fullWidth=false, ...props }) => {
    return (
        <button style = {{
          width: fullWidth?"100%":"max-content" ,
        }} {...props} className={"custom-btn" + (invert ? " invert" : "")}>
            {text}
        </button>
    );
};

export default CustomButton;
