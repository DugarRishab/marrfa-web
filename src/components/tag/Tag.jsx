import React from "react";
import "./Tag.css";

const Tag = ({ text, version = 1 }) => {
    return (
        <div
            style={{
                fontSize: "0.8rem",
                border: version==1?"1.5px solid var(--cyan)":"none",
                borderRadius: "100px",
                padding: "5px 15px",
                width: "max-content",
                lineHeight: "1em",
                background: version==1?"transparent":"rgba(0,0,0, 0.50)",
                color: "#fff"
            }}
            className="tag"
        >
            {text}
        </div>
    );
};

export default Tag;
