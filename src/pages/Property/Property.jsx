import React, { useState, useEffect } from "react";
import "./Property.css";
import { Checkbox, Input, Select } from "antd";
import cflags from "../../assets/data/countrycodes/CountryCodes.json";
import CustomButton from "../../components/button/CustomButton";
import Tag from "../../components/tag/Tag";

function Flag({ code, dcode, cname }) {
	return (
		<div className="flag">
			{/* <img src={`https://flagsapi.com/${code}/shiny/24.png`} /> */}
			<img
				src={`https://flagcdn.com/w20/${code.toLowerCase()}.png`}
				srcSet={`https://flagcdn.com/w40/${code.toLowerCase()}.png 2x`}
				width="20"
				height="15"
				alt="Ukraine"
			></img>
			{cname && <span>{cname}</span>}
			{dcode && (
				<span style={{ color: "grey", fontFamily: "monospace" }}>
					{" "}
					{dcode}
				</span>
			)}
		</div>
	);
}

const flags = [];
for (let flaginfo of cflags) {
	flags.push({
		value: flaginfo.dial_code,
		show: (
			<Flag
				code={flaginfo.code}
				dcode={flaginfo.dial_code}
				cname={flaginfo.name}
			/>
		),
		label: <Flag code={flaginfo.code} />,
	});
}

const Property = () => {
	const [name, setName] = useState("");
	const [Email, setEmail] = useState("");
	const [Phone, setPhone] = useState("");
	const [CountryCode, setCountryCode] = useState("+91");

	return (
		<div className="property">
			<section className="section-1">
				<div className="imgs">
					<div className="cover">
						<img src="./assets/properties/2.jpeg" alt="" />
					</div>
					<div className="side">
						<div className="img">
							<img src="./assets/properties/1.webp" alt="" />
						</div>
						<div className="img">
							<img src="./assets/properties/3.jpg" alt="" />
						</div>
					</div>
				</div>
			</section>
			<section className="section-2">
				<div className="heading">
					<div className="title">Luxurious Villa</div>
					<div className="developer">
						John Doe Realty - Dubai, UAE
					</div>
				</div>
				<div className="price">
					<p className="sub">Price starts from</p>
					<p className="value">AED 200000</p>
				</div>
			</section>
			<section className="section-3">
				<div className="left-col">
					<div className="heading">
						<div className="title">Key Information</div>
					</div>
					<div className="list">
						<div className="item">
							<div className="prop">Completion Date</div>
							<div className="value">Q3 2025</div>
						</div>
						<div className="item">
							<div className="prop">Price from</div>
							<div className="value">AED 2,00,000</div>
						</div>
						<div className="item">
							<div className="prop">Area from</div>
							<div className="value">2000 sq. km.</div>
						</div>
						<div className="item">
							<div className="prop">Property Type</div>
							<div className="value">Commercial</div>
						</div>
						<div className="item">
							<div className="prop">Yield</div>
							<div className="value">7.6%</div>
						</div>
						<div className="item">
							<div className="prop">Marrfex</div>
							<div className="value">8.5</div>
						</div>
						<div className="item">
							<div className="prop">Payment Plan</div>
							<div className="value">Quaterly</div>
						</div>
						<div className="item">
							<div className="prop">Location</div>
							<div className="value">Dubai, UAE</div>
						</div>
					</div>
				</div>
				<div className="right-col">
					<div className="contact-box">
						<div className="heading">
							<div className="title">
								Learn more about this property
							</div>
							<div className="sub-title">
								Ask your questions to the Destination Manager
							</div>
						</div>
						<div className="profile">
							<div className="img">
								<img src="./assets/dp.webp" alt="" />
							</div>
							<div className="text">
								<div className="name">John Doe</div>
								<div className="designation">
									Junior Manager
								</div>
							</div>
						</div>
						<div className="form">
							<Input
								placeholder="Name"
								size="large"
								style={{ width: "50%" }}
							></Input>
							<div className="ph-inp">
								<Select
									className="flaginp"
									defaultValue={"+91"}
									popupMatchSelectWidth={false}
									style={{
										width: 60,
									}}
									size="large"
									options={flags}
									optionRender={(option) => option.data.show}
									onChange={(v) => setCountryCode(v)}
								/>
								<Input
									placeholder="Phone"
									type="tel"
									className="phonenum"
									size="large"
									onChange={(v) => {
										setPhone(v);
									}}
								/>
							</div>
							<Input placeholder="Email" size="large"></Input>
							<Input placeholder="Enquiry" size="large"></Input>
							<Checkbox style={{ width: "100%" }}>
								I confirm that I have read and accept the
								Privacy Policy and Personal Data Processing
								Guidelines.
							</Checkbox>
							<CustomButton text="Submit Request"></CustomButton>
						</div>
					</div>
				</div>
			</section>
			<section className="section-4">
				<div className="heading">
					<div className="title">Details About This Property</div>
				</div>
				<div className="desc">
					Lorem ipsum dolor sit amet. Qui molestiae ipsa qui nisi
					reprehenderit ut assumenda unde ex laborum nihil ut sunt
					sapiente in odio reiciendis vel iste harum. Id quia ipsa est
					iste perspiciatis non sapiente veniam ut quos omnis. Quo
					officiis reiciendis aut tempora impedit aut eveniet pariatur
					non earum eaque. Aut adipisci velit ad ratione mollitia eos
					voluptatum voluptate rem neque repellat qui quod dolorem. Ea
					odit culpa aut nobis saepe sit corrupti quia eos tenetur
					minus At rerum fuga aut perspiciatis aperiam a quos ipsam.
					Aut dolor quibusdam aut numquam consequatur id quide
				</div>
				<br/>
				<div className="heading">
					<div className="title">Amenities</div>
				</div>
				<br />
				<div className="amenities">
					<Tag text="Urban Beach"></Tag>
				</div>
			</section>
		</div>
	);
};

export default Property;
