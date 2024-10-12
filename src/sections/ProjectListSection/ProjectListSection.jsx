import React, { useState, useEffect, useMemo } from "react";
import PropertyRequestForm from "../../components/PropertyRequestForm/PropertyRequestForm";
import CustomButton from "../../components/button/CustomButton";
import { Select, Table } from "antd";
import ProjectDesc from "../../components/projectdesc/ProjectDesc";
import { formatPrice, formatNumber } from "../../utils/BasicFunctions";
import { BellOutlined } from "@ant-design/icons";
import "./ProjectListSection.css";

const sortFlags = [
	{ value: "Price", label: "Price" },
	{ value: "Yield", label: "Yield" },
	{ value: "Area", label: "Area" },
	{ value: "Relevance", label: "Relevance" },
];

const ProjectListSection = ({ data, columns, title }) => {
	// const [rows, setRows] = useState();
	// const [rows, setRows] = useState([]);

	const { innerWidth } = window;
	console.log(data);

	const rows = useMemo(() => {
		console.log("recomputing");
		return data.map((item) => ({
			key: item.id,
			project: <ProjectDesc property={item} />,
			price: formatPrice(item.price.value) + " " + item.price.unit,
			yield: " NA",
			area:
				formatPrice(item.layout.size.value) +
				" " +
				item.layout.size.unit,
			absolute: "NA",
			marrfex: "NA",
			date: "NA",
			sortkey: {
				price: item.price.value,
				yield: item.yield || 0,
				area: item.layout.size.value,
				relevance: item.name + " " + item.features.amenities,
			},
		}));
	}, [data, data.length, data[0]]);

	// createRows();
	console.log("rows -> ", rows);

	const [sortedData, setSortedData] = useState(rows); // This will hold the sorted data
	const [sortColumn, setSortColumn] = useState("relevance"); // Initialize with "Relevance"

	console.log("sortedData->", sortedData);

	const relevScore = (test, input) => {
		// Split input and test strings into arrays of words
		const inputWords = input.toLowerCase().split(" ");
		const testWords = test.toLowerCase().split(" ");

		// Initialize score
		let score = 0;

		// Calculate frequency score
		const frequencyScore = inputWords.reduce((acc, word) => {
			const wordCount = testWords.filter(
				(testWord) => testWord === word
			).length;
			return acc + wordCount;
		}, 0);

		// Calculate location score
		const locationScore = inputWords.reduce((acc, word) => {
			const wordIndex = testWords.indexOf(word);
			return acc + (wordIndex !== -1 ? testWords.length - wordIndex : 0);
		}, 0);

		// Combine frequency and location scores
		score = frequencyScore + locationScore;

		return score;
	};

	const handleSort = (column) => {
		let sorted = [];
		switch (column) {
			case "price":
				sorted = [...data].sort(
					(a, b) => a.sortkey.price - b.sortkey.price
				);
				break;
			case "yield":
				sorted = [...data].sort(
					(a, b) => a.sortkey.yield - b.sortkey.yield
				);
				break;
			case "area":
				sorted = [...data].sort(
					(a, b) => a.sortkey.area - b.sortkey.area
				);
				break;
			case "relevance":
				sorted = [...data]; // Keep the original order for "Relevance"
				// sorted = [...data].sort(
				// 	(a, b) =>
				// 		relevScore(a.sortkey.relevance, "wow") -
				// 		relevScore(b.sortkey.relevance, "wow")
				// );
				break;
			default:
				sorted = [...data];
		}
		setSortedData(sorted);
	};

	useEffect(() => {
		setSortedData(rows);
	}, [rows]);

	return (
		<section className="project-list-section">
			<div className="headline">
				<div className="heading">
					{title}
					<CustomButton
						startIcon={<BellOutlined />}
						text={"Subscribe to notifications"}
					/>
				</div>

				<div className="sub-heading">
					<div className="byline">
						{sortedData && sortedData.length} Live projects
					</div>
					<div className="sort-label">
						Sort by
						<Select
							// className="flaginp"
							// showSearch
							// optionFilterProp="value"
							// defaultOpen
							defaultValue={"Relevance"}
							popupMatchSelectWidth={false}
							style={{
								width: 120,
								height: 30,
							}}
							size="small"
							onChange={(value) => {
								setSortColumn(value.toLowerCase());
								handleSort(value.toLowerCase());
							}}
							options={sortFlags}
						/>
					</div>
				</div>
			</div>
			{sortedData && innerWidth > 720 ? (
				<Table
					scroll={{ x: 1100 }}
					className="project-table"
					pagination={{
						defaultPageSize: 5,
						position: ["bottomCenter"],
					}}
					columns={columns}
					dataSource={sortedData}
				/>
			) : (
				<div className="project-list">
					{rows.map((item, i) => item.project)}
				</div>
			)}
		</section>
	);
};

export default ProjectListSection;
