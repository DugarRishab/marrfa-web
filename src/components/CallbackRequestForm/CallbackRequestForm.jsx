import React, { useState, useEffect } from "react";
import "./CallbackRequestForm.css"
import { Input, Select, Checkbox } from "antd";
const { TextArea } = Input;
import CustomButton from "../button/CustomButton";
import cflags from "../../assets/data/countrycodes/CountryCodes.json";
import Heading from "../Heading/Heading";

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

const CallbackRequestForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [countryCode, setCountryCode] = useState("+91");
	const [description, setDescription] = useState("");

	return (
		<div className="request-form">
			<div className="form-heading">Request a Callback</div>
			<p>Leave a request and our expert will call you back</p>
			<br />
			<form action="#">
				<Input
					placeholder="Name"
					size="large"
					onChange={(v) => setName(v)}
					value={name}
				/>
				<br />
				<br />
				<div className="ph-inp">
					<Select
						className="flaginp"
						defaultValue={"+44"}
						popupMatchSelectWidth={false}
						style={{
							width: 60,
						}}
						size="large"
						options={flags}
						optionRender={(option) => option.data.show}
						onChange={(v) => setCountryCode(v)}
						value={countryCode}
					/>
					<Input
						placeholder="Phone"
						type="tel"
						className="phonenum"
						size="large"
						onChange={(v) => {
							setPhone(v);
						}}
						value={phone}
					/>
				</div>
				<br />
				<Input
					placeholder="Email"
					size="large"
					onChange={(v) => setEmail(v)}
					value={email}
				/>
				<br />
				<br />
				<TextArea
					rows={4}
					placeholder="What are you looking for?
For example, I'm looking for an apartment in Downtown Dubai"
					onChange={(v) => setDescription(v)}
					style={{ marginBottom: "1rem" }}
					value={description}
				/>
				<Checkbox style={{ width: "100%" }}>
					I confirm that I have read and accept the Privacy Policy and
					Personal Data Processing Guidelines.
				</Checkbox>
				<br />
				<br />
				<CustomButton text={"Submit Request"} style={{ margin: 0 }} />
			</form>
		</div>
	);
};

export default CallbackRequestForm;
