import React, { useState } from "react";
import "./PropertyAdvertiseForm.css";
import banner from "/assets/banner/formbanner.png";
// import PhoneInput from "./PhoneInput";
import { Input, Select, Checkbox } from "antd";
const { TextArea } = Input;
import CustomButton from "../button/CustomButton";
import cflags from "../../assets/data/countrycodes/CountryCodes.json";

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
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [CountryCode, setCountryCode] = useState("+91");
    const [Descrip, setDescrip] = useState("");

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
							onChange={(v) => setName(v)}
						/>
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
						<Input
							placeholder="Email"
							size="large"
							onChange={(v) => setEmail(v)}
						/>
					</div>
					<TextArea
						rows={4}
                        placeholder="What are you looking to advertise?
For example, I'm looking to advertise an apartment in Downtown Dubai"
						onChange={(v) => setDescrip(v)}
						style={{ marginBottom: "1rem" }}
					/>
					<Checkbox style={{ width: "100%" }} >
						I confirm that I have read and accept the Privacy Policy
						and Personal Data Processing Guidelines.
					</Checkbox>
					<br />
					<br />
					<CustomButton
						text={"Submit Request"}
						style={{ margin: 0 }}
					/>
				</form>
			</div>
			
		</div>
	);
};

export default PropertyAdvertiseForm;
