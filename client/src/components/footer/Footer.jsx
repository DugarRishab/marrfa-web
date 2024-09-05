import React from "react";
import Logo from "/assets/Marrfa.png";
import LinkedIn from "/assets/icons/linkedin.svg"
import YouTube from "/assets/icons/youtube.svg"
import Instagram from "/assets/icons/instagram.svg"
import Twitter from "/assets/icons/twitter.svg"
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
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
                        <img src={LinkedIn} />
                        <img src={YouTube} />
                        <img src={Instagram} />
                        <img src={Twitter} />
                    </div>
                </div>
                <div className="link-col">
                    <div className="quicklink">
                        <div className="heading">Quick Access</div>
                        <div className="link">Explore Projects</div>
                        <div className="link">News and Articles</div>
                        <div className="link">About us</div>
                    </div>
                    <div className="quicklink">
                        <div className="heading">Contact us</div>
                        <div className="link"><i className="material-icons">location_on</i>Citadel Tower Office No. 1003 and 1004 Business Bay, Dubai.</div>
                        <div className="link"><i className="material-icons">mail</i>sales@marrfa.com</div>
                        <div className="link"><i className="material-icons">phone</i>+971-563282700</div>
                    </div>
                </div>
            </div>
            <div className="extra-links">
                <a className="link">Terms and conditions</a>
                <a className="link">Privacy policy</a>
                <a className="link">Cookies policy</a>
                <a className="link">Sitemap</a>
            </div>
            <div className="rights">2024© All rights Reserved</div>
        </footer>
    );
};

export default Footer;
