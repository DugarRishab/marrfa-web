import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "/assets/Marrfa.png";
import { Link } from "react-router-dom";
import CustomButton from "../button/CustomButton";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const tabroutes = { Home: "", Projects: "projects", Blogs: "blogs", "About us": "about" };

const DrawerToggle = ({ selected, handleSelect }) => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <div className="drawer">
            <CustomButton
                style={{
                    borderRadius: "0px",
                    boxShadow: "none",
                    width: "min-content",
                    padding: "0px",
                }}
                onClick={showDrawer}
                startIcon={<MenuOutlined style={{ fontSize: 25 }} />}
                invert
            />
            <Drawer
                width={"100vw"}
                placement="left"
                title={
                    <BrandName mobile={true} />
                }
                onClose={onClose}
                open={open}
            >
                {/* <div className="list"> */}
                {Object.keys(tabroutes).map((key, idx) => (
                    <Link
                        key={idx}
                        onClick={() => {
                            handleSelect(idx);
                            onClose();
                        }}
                        className={"item" + (selected == idx ? " active" : "")}
                        to={`/${tabroutes[key]}`}
                    >
                        {key}
                    </Link>
                ))}
                <CustomButton style = {{
                    marginTop: "1rem"
                }} rounded={false} text={"Request a CallBack"} />

                {/* </div> */}
            </Drawer>
        </div>
    );
};

const BrandName = ({ mobile = false }) => {
    return (
        <div
            className="brand"
            style = {{gap: mobile?"0px":"5px"}}
        >
            <img src={Logo} />
            <div style = {{fontSize: mobile?"1.5rem":"1.2rem"}} className="brand-name">
                {mobile ? "arrfa" : "Marrfa"}
            </div>
        </div>
    );
};

const Navbar = () => {
    const [selected, setSelected] = useState(0);

    const handleSelect = (item) => {
        setSelected(() => item);
    };

    const { innerWidth, innerHeight } = window;
    const DesktopView = innerWidth > 800;

    return (
        <div className="navbar-wrapper">
            <div className="navbar">
                <div className="brand">
                    {DesktopView ? <BrandName /> : <DrawerToggle selected={selected} handleSelect={handleSelect} />}
                </div>
                <div className="tabs">
                    {DesktopView &&
                        Object.keys(tabroutes).map((key, idx) => (
                            <Link
                                key={idx}
                                onClick={() => handleSelect(idx)}
                                className={"item" + (selected == idx ? " active" : "")}
                                to={`/${tabroutes[key]}`}
                            >
                                {key}
                            </Link>
                        ))}
                </div>
                {!DesktopView && (
                    <div className="floating-brand">
                        <BrandName mobile={true} />
                    </div>
                )}
                {DesktopView && (
                    <div className="action">
                        <CustomButton
                            style={{ background: "grey", color: "#fff", padding: "10px", height: "2em" }}
                            invert
                            rounded={false}
                            text={"Log in"}
                        />
                        <CustomButton
                            style={{ background: "grey", color: "#fff", padding: "10px", height: "2em" }}
                            invert
                            rounded={false}
                            text={"Request a callback"}
                        />
                    </div>
                )}
                {!DesktopView && <CustomButton rounded={false} text={"Log in"} />}
            </div>
        </div>
    );
};

export default Navbar;
