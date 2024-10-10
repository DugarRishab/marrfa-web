import React, { useState, useEffect } from "react";
import "./Property.css";
import { Checkbox, Descriptions, Divider, Input, message, Select, Skeleton } from "antd";
import cflags from "../../assets/data/countrycodes/CountryCodes.json";
import CustomButton from "../../components/button/CustomButton";
import Tag from "../../components/tag/Tag";
import { formatNumber, formatPrice } from "../../utils/BasicFunctions";
import { PropertyMap } from "../../components/PropertyMap/Map";
import Mobcarousel from "../../components/mobile-carousel/Mobcarousel";
import { useParams } from "react-router-dom";
import { viewProperty } from "../../services/api";
import PropertySkeleton from "./PropertySkeleton";

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

const Property = () => {
	const [name, setName] = useState("");
	const [Email, setEmail] = useState("");
	const [Phone, setPhone] = useState("");
	const [CountryCode, setCountryCode] = useState("+91");

	const [property, setProperty] = useState();

	const { innerWidth, innerHeight } = window;

	const params = useParams();

	const handleGetData = async () => {
		const { id } = params;
		try {
			if (id) {
				const res = await viewProperty(id);
				setProperty(res.data.data.property);
				console.log(res.data.data.property);
			}
		} catch (err) {
			message.error(err.response.data.message | err.message);
		}
	};

	useEffect(() => {
		handleGetData();
	}, []);

	return (
		<div className="property">
			{property ? (
				<>
					<section className="section-1">
						{innerWidth > 800 ? (
							<div className="imgs">
								<div className="cover">
									<img src={property.images.heroImg} alt="" />
									<div className="float-title">
										<div className="heading">
											<div className="title">
												{property.name}
											</div>
											<div className="developer">
												{property.listedBy.name} -{" "}
												{property.location.city},{" "}
												{property.location.country}
											</div>
										</div>
									</div>
								</div>
								<div className="side">
									<div className="img">
										<img
											src={property.images.gallery[0]}
											alt=""
										/>
									</div>
									<div className="img">
										<img
											src={property.images.gallery[1]}
											alt=""
										/>
									</div>
									<div className="price">
										<p className="sub">Price starts from</p>
										<p className="value">
											{property.price.unit}{" "}
											{formatPrice(property.price.value)}
										</p>
									</div>
								</div>
							</div>
						) : (
							<Mobcarousel
								items={[
									<div className="carousel-img" key="0">
										<img
											src={property.images.heroImg}
											alt=""
										/>
									</div>,

									...property.images.gallery.map(
										(img, id) => (
											<div
												className="carousel-img"
												key={id}
											>
												<img src={img} alt="" />
											</div>
										)
									),
								]}
							></Mobcarousel>
						)}
					</section>
					{innerWidth < 800 && (
						<section className="section-2">
							<div className="heading">
								<div className="title">{property.name}</div>
								<div className="developer">
									{property.listedBy.name} -{" "}
									{property.location.city},{" "}
									{property.location.country}
								</div>
							</div>
							<div className="price">
								<p className="sub">Price starts from</p>
								<p className="value">
									{property.price.unit}{" "}
									{formatPrice(property.price.value)}
								</p>
							</div>
						</section>
					)}
					{/*  */}
					<section className="section-3">
						<div className="left-col">
							<div className="heading">
								<div className="title">Key Information</div>
							</div>
							<div className="list">
								<div className="item">
									<div className="prop">Completion Date</div>
									<div className="value">
										{property.metadata.completionData ||
											"NA"}
									</div>
								</div>
								<div className="item">
									<div className="prop">Price from</div>
									<div className="value">
										{property.price.unit}{" "}
										{formatPrice(property.price.value)}
									</div>
								</div>
								<div className="item">
									<div className="prop">Area from</div>
									<div className="value">
										{property.layout.size.value +
											" " +
											property.layout.size.unit}
									</div>
								</div>
								<div className="item">
									<div className="prop">Property Type</div>
									<div className="value">
										{property.type.toUpperCase()}
									</div>
								</div>
								<div className="item">
									<div className="prop">Yield</div>
									<div className="value">{"NA"}</div>
								</div>
								<div className="item">
									<div className="prop">Marrfex</div>
									<div className="value">{"NA"}</div>
								</div>
								<div className="item">
									<div className="prop">Payment Plan</div>
									<div className="value">{"NA"}</div>
								</div>
								<div className="item">
									<div className="prop">Location</div>
									<div className="value">
										{property.location.city},{" "}
										{property.location.country}
									</div>
								</div>
							</div>
							<br />
							<div className="heading">
								<div className="title">Description</div>
							</div>
							<div className="desc">{property.description}</div>
						</div>
						<div className="right-col">
							<div className="contact-box">
								<div className="heading">
									<div className="title">
										Learn more about this property
									</div>
									<div className="sub-title">
										Ask your questions to the Destination
										Manager
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
											optionRender={(option) =>
												option.data.show
											}
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
									></Input>
									<Input
										placeholder="Enquiry"
										size="large"
									></Input>
									<Checkbox style={{ width: "100%" }}>
										I confirm that I have read and accept
										the Privacy Policy and Personal Data
										Processing Guidelines.
									</Checkbox>
									<CustomButton text="Submit Request"></CustomButton>
								</div>
							</div>
						</div>
					</section>

					{/* <Divider className="divider"></Divider> */}
					<section className="section-4">
						<div className="left-col">
							<PropertyMap
								lat={property.location.lat}
								long={property.location.long}
							></PropertyMap>
						</div>
						<div className="right-col">
							<div className="heading">
								<div className="title">Location</div>
							</div>
							<div className="list vertical">
								<div className="item full">
									<div className="prop">{"Address"}</div>
									<div className="value">
										{property.location["address"]}
									</div>
								</div>
								{["city", "district", "state", "country"].map(
									(key, i) => (
										<div className="item" key={i}>
											<div className="prop">{key}</div>
											<div className="value">
												{property.location[key]}
											</div>
										</div>
									)
								)}
							</div>

							<br />
							<div className="heading">
								<div className="title">
									Accessibility by car
								</div>
							</div>
							<br />
							<div className="list vertical">
								{property.location.amenities.map((item, i) => (
									<div className="item" key={i}>
										<div className="prop">
											{"Distance from " + item.name}
										</div>
										<div className="value">
											{item.distance.value +
												item.distance.unit}
										</div>
									</div>
								))}
							</div>
						</div>
					</section>
					<section className="section-5">
						<div className="left-col">
							<div className="heading">
								<div className="title">Layout</div>
							</div>
							<div className="list">
								<div className="item" key={1}>
									<div className="prop">{"Area"}</div>
									<div className="value">
										{property.layout.size.value +
											" " +
											property.layout.size.unit}
									</div>
								</div>
								{["bedrooms", "kitchen", "bathrooms"].map(
									(key, i) => (
										<div className="item" key={i}>
											<div className="prop">{key}</div>
											<div className="value">
												{property.layout[key]}
											</div>
										</div>
									)
								)}
							</div>
							<br />
							<div className="heading">
								<div className="title">Features</div>
							</div>
							<div className="tag-list">
								{property.features.amenities.map((item, i) => (
									<Tag text={item} key={i}></Tag>
								))}
							</div>
						</div>
						<div className="right-col">
							<div className="floorplan">
								<img src={property.images.floorMap} alt="" />
							</div>
						</div>
					</section>
				</>
			) : (
				<PropertySkeleton></PropertySkeleton>
			)}
		</div>
	);
};

export default Property;
