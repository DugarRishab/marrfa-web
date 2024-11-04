import React, { useState } from "react";
import "./PropertyAdvertiseForm.css";
import banner from "/assets/banner/formbanner.png";
// import PhoneInput from "./PhoneInput";
import { Input, Select, Checkbox, message, Button } from "antd";
const { TextArea } = Input;
import CustomButton from "../button/CustomButton";
import cflags from "../../assets/data/countrycodes/CountryCodes.json";
import { createUserRequest } from "../../services/api";

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
            {dcode && <span style={{ color: "grey", fontFamily: "monospace" }}> {dcode}</span>}
        </div>
    );
}

const flags = [];
for (let flaginfo of cflags) {
    flags.push({
        value: flaginfo.dial_code,
        show: <Flag code={flaginfo.code} dcode={flaginfo.dial_code} cname={flaginfo.name} />,
        label: <Flag code={flaginfo.code} />,
    });
}

const PropertyAdvertiseForm = () => {
        const [name, setName] = useState("");
		const [email, setEmail] = useState("");
		const [phone, setPhone] = useState("");
		const [countryCode, setCountryCode] = useState("+44");
		const [description, setDescription] = useState("");

		const [consent, setConsent] = useState(false);

	const handleSubmit = async () => {
		const data = {
			userName: name,
			email,
			phone: {
				number: phone,
				code: countryCode,
			},
			query: description,
		};

		if ((!name, !email, !countryCode, !phone, !description)) {
			message.error("Please fill all details to submit a query");
		}

		try {
			const res = await createUserRequest(data);
			message.success("Request Submitted");
		} catch (err) {
			console.log(err);
			message.error(
				err.response ? err.response.data.message : err.message
			);
		}
	};

    return (
		<div className="property-advertise-form">
			<div className="data-capture">
				<div className="f-heading">
					Marrfa's Managers are here to help you advertise your
					property
				</div>
				<p>Submit your property details and we will get in touch</p>

				<form action="#">
					<div className="basic-dtls">
						<Input
							placeholder="Name"
							size="large"
							onChange={(e) => setName(e.target.value)}
							value={name}
						/>
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
								onChange={(e) => {
									setPhone(e.target.value);
								}}
								value={phone}
							/>
						</div>
						<Input
							required
							placeholder="Email"
							size="large"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</div>
					<TextArea
						required
						rows={4}
						placeholder="What are you looking for?
For example, I'm looking for an apartment in Downtown Dubai"
						onChange={(e) => setDescription(e.target.value)}
						style={{ marginBottom: "1rem" }}
						value={description}
					/>
					<Checkbox
						style={{ width: "100%" }}
						checked={consent}
						onChange={(e) => setConsent(e.target.checked)}
					>
						I confirm that I have read and accept the Privacy Policy
						and Personal Data Processing Guidelines.
					</Checkbox>
					<br />
					<br />
					<Button
						onClick={handleSubmit}
						text={"Submit Request"}
						style={{ margin: 0 }}
						type="primary"
						disabled={
							!(
								name &&
								email &&
								countryCode &&
								description &&
								phone &&
								consent
							)
						}
					>
						Submit Request
					</Button>
				</form>
			</div>
		</div>
	);
};

export default PropertyAdvertiseForm;
