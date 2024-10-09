import React, { useEffect, useState } from "react";
import "./Projects.css";
import { useSearchParams } from "react-router-dom";
import { ProjectList } from "../Homepage/Homepage";
import PropertyRequestForm from "../../components/PropertyRequestForm/PropertyRequestForm";
import SampleData from "../../assets/samples/ProdListing.json";
import Mobcarousel from "../../components/mobile-carousel/Mobcarousel";
import CustomCarousel from "../../components/carousel/Carousel";
import SearchBox from "../../components/SearchBox/SearchBox";
import ProjectListSection from "./ProjectListSection";
import { searchProperties } from "../../services/api";
import { message } from "antd";

const columns = [];
var i = 0;
const colnames = [
	"Project Name",
	"Price",
	"Yield",
	"Area",
	`Absolute Return`,
	"Marrfex",
	"Date",
];
for (let name of colnames) {
	columns.push({
		title: (
			<div
				style={{ textAlign: "center", color: "#fff", maxWidth: "12ch" }}
			>
				{name}
			</div>
		),
		dataIndex: name.split(" ")[0].toLowerCase(),
		key: name.split(" ")[0].toLowerCase(),
		align: "center",
	});
	if (name !== "Project Name") {
		columns[i].responsive = ["md"];
	}
	i++;
}

columns[1]["sorter"] = (a, b) => a.sortkey.price - b.sortkey.price;
columns[2]["sorter"] = (a, b) => a.sortkey.yield - b.sortkey.yield;
columns[3]["sorter"] = (a, b) => a.sortkey.area - b.sortkey.area;
columns[4]["sorter"] = (a, b) => a.sortkey.absolute - b.sortkey.absolute;
columns[5]["sorter"] = (a, b) => a.sortkey.marrfex - b.sortkey.marrfex;

const Projects = () => {
	const { innerWidth } = window;
	const [searchResults, setSearchResults] = useState();
	const [dubaiResults, setDubaiResults] = useState();

	const [searchParams, setSearchParams] = useSearchParams();

	const getData = async (query, setter) => {
		try {
			const res = await searchProperties(query);
			setter(res.data.data.properties);
			console.log(res.data.data);
		} catch (err) {
			// message.error(err.response.data.message || err.message, "error");
		}
    };
    
    console.log(searchParams)

	useEffect(() => {
		// if(searchParams.get('search'))
		getData(searchParams, setSearchResults);
	}, [searchParams]);

	useEffect(() => {
		getData("search=dubai", setDubaiResults);
	}, []);

	return (
		<div className="projects">
			<section className="banner">
				{/* <Search /> */}
				<SearchBox />
			</section>
			{searchResults && (
				<ProjectListSection
					title="Search Results"
					data={searchResults}
					columns={columns}
				></ProjectListSection>
			)}

			{dubaiResults && (
				<ProjectListSection
					title="Properties for sale in Dubai"
					data={dubaiResults}
					columns={columns}
				></ProjectListSection>
			)}
			<section className="choice-wrapper">
				<div className="heading">Trending Projects</div>
				{innerWidth > 630 ? (
					<CustomCarousel items={ProjectList} />
				) : (
					<Mobcarousel items={ProjectList} width={"--card-width"} />
				)}
			</section>

			<section className="request-wrapper">
				<PropertyRequestForm />
			</section>
		</div>
	);
};

export default Projects;
