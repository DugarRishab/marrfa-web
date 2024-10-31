import React, { useEffect, useState } from "react";
import "./Projects.css";
import { useSearchParams } from "react-router-dom";
import PropertyRequestForm from "../../components/PropertyRequestForm/PropertyRequestForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ProjectListSection from "../../sections/ProjectListSection/ProjectListSection";
import { searchProperties } from "../../services/api";
import TrendingProjectsSection from "../../sections/TrendingProjects/TrendingProjects";
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
			console.log(err);
			message.error(err.message || err.response.data.message || err.message);
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
				<div className="content">
					<div className="heading">
						Find the Property that matches your needs
					</div>
					{/* <br /> */}
					<SearchBox />
				</div>

				<img
					className="banner-img"
					src="/assets/banner/projectBanner2.webp"
					alt=""
				/>
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
			<TrendingProjectsSection></TrendingProjectsSection>

			{innerWidth > 720 && (
				<section className="request-wrapper">
					<PropertyRequestForm />
				</section>
			)}
		</div>
	);
};

export default Projects;
