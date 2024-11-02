import React, { useState, useEffect } from "react";
import "./Property.css";
import { Checkbox, Descriptions, Divider, Input, message, Select, Skeleton } from "antd";
import cflags from "../../assets/data/countrycodes/CountryCodes.json";
import CustomButton from "../../components/button/CustomButton";
import Tag from "../../components/tag/Tag";
import { formatNumber, formatPrice } from "../../utils/BasicFunctions";
import { PropertyMap } from "../../components/PropertyMap/Map";
import Mobcarousel from "../../components/MobCarousel/Mobcarousel";
import { useParams } from "react-router-dom";
import { viewProperty } from "../../services/api";

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

const amenities = [
	"Swimming Pool",
	"Double Garage Space",
	"3 Storied",
	"Central heating",
	"Pool",
	"Gym",
	"Spa",
];
const location = {
	address: "123 Beverly Hills Dr",
	city: "Beverly Hills",
	district: "Los Angeles County",
	state: "California",
	country: "USA",
};
const accessibility = [
	{
		name: "Park",
		distance: {
			value: 0.5,
			unit: "km",
		},
	},
	{
		name: "Shopping Mall",
		distance: {
			value: 2,
			unit: "km",
		},
	},
	{
		name: "Park",
		distance: {
			value: 0.5,
			unit: "km",
		},
	},
	{
		name: "Shopping Mall",
		distance: {
			value: 2,
			unit: "km",
		},
	},
	{
		name: "Park",
		distance: {
			value: 0.5,
			unit: "km",
		},
	},
	{
		name: "Shopping Mall",
		distance: {
			value: 2,
			unit: "km",
		},
	},
];

const layout = {
	bedrooms: 4,
	kitchen: 1,
	bathrooms: 5,
};

const PropertySkeleton = () => {

	const [name, setName] = useState("");
	const [Email, setEmail] = useState("");
	const [Phone, setPhone] = useState("");
	const [CountryCode, setCountryCode] = useState("+91");

	return (
		<Skeleton
			active={true}
			size={"large"}
			// shape={buttonShape}
			// block={true}
			style={{
				// width: '100%',
				height: '80vh',
				// background: 'white',
				padding: '2rem',
				marginTop: "var(--navbar-height)",
			}}
		>
			
		</Skeleton>
	);
};

export default PropertySkeleton;
