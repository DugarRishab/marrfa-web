import React from "react";
import Logo from "/assets/Marrfa.png";
import LinkedIn from "/assets/icons/linkedin.svg";
import YouTube from "/assets/icons/youtube.svg";
import Instagram from "/assets/icons/instagram.svg";
import Twitter from "/assets/icons/twitter.svg";

import CustomButton from "../button/CustomButton";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="advertise">
                <div className="question">Looking to advertise a property? We can help.</div>
                <CustomButton style={{ padding: "1rem 4rem" }} invert text={"List your Property with us"} />
            </div>
            <div className="footer">
                <div className="about-col">
                    <div className="brandname">
                        <img src={Logo} />
                        Marrfa
                    </div>
                    <div className="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti est error nobis iure
                        repudiandae aliquam, odio iusto minus animi blanditiis excepturi distinctio voluptas, magni
                        asperiores eligendi a nam illum ullam.
                    </div>
                    <div className="social">
                        <button className="icon">
                            <img src={LinkedIn} />
                        </button>
                        <button className="icon">
                            <img src={YouTube} />
                        </button>
                        <button className="icon">
                            <img src={Instagram} />
                        </button>
                        <button className="icon">
                            <img src={Twitter} />
                        </button>
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
                            <i className="material-icons">location_on</i>Citadel Tower Office No. 1003 and 1004 Business
                            Bay, Dubai.
                        </a>
                        <a className="link">
                            <i className="material-icons">mail</i>sales@marrfa.com
                        </a>
                        <a className="link">
                            <i className="material-icons">phone</i>+971-563282700
                        </a>
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
        </footer>
    );
};

export default Footer;
