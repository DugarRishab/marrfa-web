import React from "react";
import "./CustomButton.css";
import { Button, ConfigProvider } from "antd";

const CustomButton = ({
    text,
    invert = false,
    fullWidth = false,
    background = "var(--mix-background)", // Custom background color prop
    startIcon = null,
    circled = false,
    style,
    size = "large",
    themecolor = "#46A29F",
    ...props
}) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    // Seed Token
                    colorPrimary: themecolor,
                    // borderRadius: 2,

                    // Alias Token
                    // colorBgContainer: "#fff",
                },
            }}
        >
            <Button
                {...props}
                shape={circled ? "circle" : "default"}
                size={size}
                style={{
                    width: fullWidth ? "100%" : "max-content",
                    // borderRadius: rounded ? borderRadius : "",
                    background: invert ? "#fff" : background,
                    color: invert ? "#000" : "#fff",
                    lineHeight: circled ? "1.2em" : "",
                    boxShadow: "var(--shadow)",
                    border: "none",
                    display: "flex",
                    gap: "0px",
                    ...style,
                }}
            >
                {startIcon ? startIcon : null}
                {text ? text : null}
            </Button>
        </ConfigProvider>
    );
};

export default CustomButton;
