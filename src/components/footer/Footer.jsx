import React, { useState } from "react";
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
	WhatsAppOutlined,
} from "@ant-design/icons";

import CustomButton from "../button/CustomButton";
import "./Footer.css";
import { Button, Modal } from "antd";
import PropertyAdvertiseForm from "../PropertyAdvertiseForm/PropertyAdvertiseForm";
import { Link } from "react-router-dom";

const Footer = () => {
	const { innerWidth } = window;

	const [openRequestBox, setOpenRequestBox] = useState(false);

	return (
		<footer>
			{innerWidth > 720 && (
				<div className="advertise">
					<div className="question">
						Looking to advertise a property? We can help.
					</div>
					<CustomButton
						themecolor={"#000"}
						style={{ padding: "1rem 2rem", fontWeight: "600" }}
						invert
						text={"List your Property with us"}
						onClick={() => setOpenRequestBox(true)}
					/>
				</div>
			)}

			
			
				<PropertyAdvertiseForm open={openRequestBox}
				onCancel={() => setOpenRequestBox(false)}></PropertyAdvertiseForm>
			

			<div className="footer">
				<div className="about-col">
					<div className="brandname">
						<img src={Logo} />
						Marrfa
					</div>
					<div className="desc">
						Welcome on board with Marrfa, your ultimate platform for
						cross-border real estate investments! Marrfa is your
						go-to hub for discovering, comparing, and investing in
						global properties, all in one place.
					</div>
					<div className="social">
						<Button
							icon={
								<a href="https://www.linkedin.com/company/marrfa/">
									<LinkedinOutlined
										style={{ fontSize: 20, color: "white" }}
									/>{" "}
								</a>
							}
							circled
							type="text"
						></Button>

						<Button
							icon={
								<a href="https://www.instagram.com/marrfahq/">
									<InstagramOutlined
										style={{ fontSize: 20, color: "white" }}
									/>
								</a>
							}
							circled
							type="outlined"
						></Button>
						<Button
							icon={
								<a href="https://x.com/Marrfadiscovery">
									<XOutlined
										style={{ fontSize: 20, color: "white" }}
									/>
								</a>
							}
							circled
							type="outlined"
						></Button>
						<Button
							icon={
								<a href="https://wa.me/+971586699457">
									<WhatsAppOutlined
										style={{ fontSize: 20, color: "white" }}
									/>
								</a>
							}
							circled
							type="outlined"
						></Button>
					</div>
				</div>
				<div className="link-col">
					<div className="quicklink">
						<div className="heading">Quick Access</div>
						<Link className="link" to="/projects">Explore Projects</Link>
						<Link className="link" to="/blogs">News and Articles</Link>
						<Link className="link" to="/about">About us</Link>
					</div>
					<div className="quicklink">
						<div className="heading">Contact us</div>
						<a className="link" href="https://maps.app.goo.gl/VKcdADPdj2QwPoRc7">
							<EnvironmentFilled />
							Citadel Tower Office No. 1003 and 1004 Business Bay,
							Dubai.
						</a>
						<a className="link" href="mailto: sales@marrfa.com ">
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
				<Button
					icon={
						<a href="https://www.linkedin.com/company/marrfa/">
							<LinkedinOutlined
								style={{ fontSize: 20, color: "white" }}
							/>{" "}
						</a>
					}
					circled
					type="text"
				></Button>

				<Button
					icon={
						<a href="https://www.instagram.com/marrfahq/">
							<InstagramOutlined
								style={{ fontSize: 20, color: "white" }}
							/>
						</a>
					}
					circled
					type="outlined"
				></Button>
				<Button
					icon={
						<a href="https://x.com/Marrfadiscovery">
							<XOutlined
								style={{ fontSize: 20, color: "white" }}
							/>
						</a>
					}
					circled
					type="outlined"
				></Button>
				<Button
					icon={
						<a href="https://wa.me/+971586699457">
							<WhatsAppOutlined
								style={{ fontSize: 20, color: "white" }}
							/>
						</a>
					}
					circled
					type="outlined"
				></Button>
			</div>
		</footer>
	);
};

export default Footer;
