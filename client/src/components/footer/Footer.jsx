import React from "react";
import Logo from "/assets/Marrfa.png";
// import LinkedIn from "/assets/icons/linkedin.svg";
// import YouTube from "/assets/icons/youtube.svg";
// import Instagram from "/assets/icons/instagram.svg";
// import Twitter from "/assets/icons/twitter.svg";

import {
    LinkedinOutlined,
    YoutubeOutlined,
    InstagramOutlined,
    XOutlined,
    EnvironmentFilled,
    MailFilled,
    PhoneFilled,
} from "@ant-design/icons";

import CustomButton from "../button/CustomButton";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="advertise">
                <div className="question">Looking to advertise a property? We can help.</div>
                <CustomButton
                    themecolor={"#000"}
                    style={{ padding: "1rem 4rem", fontWeight: "600" }}
                    invert
                    text={"List your Property with us"}
                />
            </div>
            <div className="footer">
                <div className="about-col">
                    <div className="brandname">
                        <img src={Logo} />
                        Marrfa
                    </div>
                    <div className="desc">
                    Welcome on board with Marrfa, your ultimate platform for cross-border real estate investments! Marrfa is your go-to hub for discovering, comparing, and investing in global properties, all in one place.
                    </div>
                    <div className="social">
                        <CustomButton startIcon={<LinkedinOutlined style={{ fontSize: 20 }} />} circled></CustomButton>
                        <CustomButton startIcon={<YoutubeOutlined style={{ fontSize: 20 }} />} circled></CustomButton>
                        <CustomButton startIcon={<InstagramOutlined style={{ fontSize: 20 }} />} circled></CustomButton>
                        <CustomButton startIcon={<XOutlined style={{ fontSize: 20 }} />} circled></CustomButton>
                    </div>
                </div>
                <div className="link-col">
                    <div className="quicklink">
                        <div className="heading">Quick Access</div>
                        <a className="link">Explore Projects</a>
                        <a className="link">News and Articles</a>
                        <a className="link">About us</a>
                    </div>
                    <div className="quicklink">
                        <div className="heading">Contact us</div>
                        <a className="link">
                            <EnvironmentFilled />
                            Citadel Tower Office No. 1003 and 1004 Business Bay, Dubai.
                        </a>
                        <a className="link">
                            <MailFilled />
                            sales@marrfa.com
                        </a>
                        <a className="link">
                            <PhoneFilled />
                            +971-563282700
                        </a>
                    </div>
                    <div className="quicklink extra">
                        <div className="heading">Others</div>
                        <a className="link">Terms and conditions</a>
                        <a className="link">Privacy policy</a>
                        <a className="link">Cookies policy</a>
                        <a className="link">Sitemap</a>
                    </div>
                </div>
            </div>
            <div className="extra-links">
                <a className="link">Terms and conditions</a>
                <a className="link">Privacy policy</a>
                <a className="link">Cookies policy</a>
                <a className="link">Sitemap</a>
            </div>
            <div className="rights">©2024 All rights Reserved by Marrfa.</div>
            <div className="floating-social">
                <CustomButton style={{padding: "0.5rem", height: "3.3em"}} startIcon={<LinkedinOutlined style={{ fontSize: 25 }} />} circled></CustomButton>
                <CustomButton style={{padding: "0.5rem", height: "3.3em"}} startIcon={<YoutubeOutlined style={{ fontSize: 25 }} />} circled></CustomButton>
                <CustomButton style={{padding: "0.5rem", height: "3.3em"}} startIcon={<InstagramOutlined style={{ fontSize: 25 }} />} circled></CustomButton>
                <CustomButton style={{padding: "0.5rem", height: "3.3em"}} startIcon={<XOutlined style={{ fontSize: 25 }} />} circled></CustomButton>
            </div>
        </footer>
    );
};

export default Footer;
