import React, { useState, useEffect } from "react";
import {
	Button,
	InputNumber,
	Modal,
	Slider,
	ConfigProvider,
	Select,
} from "antd";
import RangeSlider from "../rangeslider/RangeSlider";
import "./FilterBox.css";
import FormItemLabel from "antd/es/form/FormItemLabel";

const completionDateOptions = [
	"Q1 2025",
	"Q2 2025",
	"Q3 2025",
	"Q4 2025",
	"Q1 2026",
	"Q2 2026",
	"Q3 2026",
	"Q4 2026",
	"Q1 2027",
	"Q2 2027",
	"Q3 2027",
	"Q4 2027",
	"Q1 2028",
	"Q2 2028",
	"Q3 2028",
	"Q4 2028",
	"Q1 2029",
	"Q2 2029",
	"Q3 2029",
	"Q4 2029",
	"Q1 2030",
	"Q2 2030",
	"Q3 2030",
	"Q4 2030",
];

export const Dropdown = ({ label, options, onChange, value }) => {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: "#bfbfbf", // Grey color for primary elements
					colorBorder: "#bfbfbf", // Grey color for borders
					colorBgBase: "#fff", // Grey color for backgrounds
				},
			}}
		>
			<label htmlFor={"select-" + label} className="dropdown">
				{label}
				<Select
					// className="flaginp"
					// showSearch
					// optionFilterProp="value"
					// defaultOpen
					id={"select-" + label}
					value={value}
					defaultValue={label}
					popupMatchSelectWidth={false}
					style={{
						width: 150,
						height: 30,
					}}
					size="small"
					onChange={onChange}
					options={options}
				/>
			</label>
		</ConfigProvider>
	);
};

const FilterBox = ({ open, onCancel }) => {
	// const [priceRange, setPriceRange] = useState([0, 100]);

	const params = new URLSearchParams(window.location.search);

	const [valuationRange, setValuationRange] = useState([
		params.get("priceMin") || 0,
		params.get("priceMax") || 1000000000,
	]);
	const [yieldRange, setYieldRange] = useState([
		params.get("yieldMin") || 0,
		params.get("yieldMax") || 100,
	]);
	const [marrfexRange, setMarrfexRange] = useState([
		params.get("marrfexMin") || 0,
		params.get("marrfexMax") || 5,
	]);
	const [areaRange, setAreaRange] = useState([
		params.get("areaMin") || 0,
		params.get("areaMax") || 1000,
	]);

	const [completionDate, setCompletionDate] = useState(params.get('completionDate'));
	const [type, setType] = useState(params.get('type') || null);
	const [occupancy, setOccupancy] = useState(params.get('occupancy') || null);

	const handleValuationRangeChange = (newVal) => {
		setValuationRange(newVal.map((item) => item));
	};
	const setMinValuation = (newVal) => {
		setValuationRange([newVal, valuationRange[1]]);
	};
	const setMaxValuation = (newVal) => {
		setValuationRange([valuationRange[0], newVal]);
	};

	const handleYieldRangeChange = (newVal) => {
		setYieldRange(newVal);
	};
	const setMinYield = (newVal) => {
		setYieldRange([newVal, yieldRange[1]]);
	};
	const setMaxYield = (newVal) => {
		setYieldRange([yieldRange[0], newVal]);
	};

	const handleMarrfexRangeChange = (newVal) => {
		setMarrfexRange(newVal.map((item) => item));
	};
	const setMinMarrfex = (newVal) => {
		setMarrfexRange([newVal, marrfexRange[1]]);
	}
	const setMaxMarrfex = (newVal) => {
		setMarrfexRange([marrfexRange[0], newVal]);
	};

	const handleAreaRangeChange = (newVal) => {
		setAreaRange(newVal);
	}
	const setMinArea = (newVal) => {
		setAreaRange([newVal, areaRange[1]]);
	}
	const setMaxArea = (newVal) => {
		setAreaRange([areaRange[0], newVal]);
	};

	const handleSave = () => {
		// Initialize the URLSearchParams object from the current URL
		const params = new URLSearchParams(window.location.search);

		// Set the filter parameters in the URL
		params.set("priceMin", valuationRange[0]);
		params.set("priceMax", valuationRange[1]);

		params.set("yieldMin", yieldRange[0]);
		params.set("yieldMax", yieldRange[1]);

		params.set("marrfexIndexMin", marrfexRange[0]);
		params.set("marrfexIndexMax", marrfexRange[1]);

		params.set("areaMin", areaRange[0]);
		params.set("areaMax", areaRange[1]);

		if (completionDate) {
			params.set("completionDate", completionDate);
		}

		if (type) {
			params.set("type", type);
		}

		if (occupancy) {
			params.set("occupancy", occupancy);
		}

		// Reload the page with the updated URL parameters
		window.location.search = params.toString();
	};

	const handleReset = () => {
		// Initialize the URLSearchParams object from the current URL
		const params = new URLSearchParams(window.location.search);

		// Remove all the filter parameters
		params.delete("priceMin");
		params.delete("priceMax");

		params.delete("yieldMin");
		params.delete("yieldMax");

		params.delete("marrfexIndexMin");
		params.delete("marrfexIndexMax");

		params.delete("areaMin");
		params.delete("areaMax");

		params.delete("completionDate");
		params.delete("type");
		params.delete("occupancy");

		// Reload the page with the cleared filters
		window.location.search = params.toString();
	};

	return (
		<Modal
			className="filter-box"
			title="Filters"
			open={open}
			onCancel={onCancel}
			footer={
				<>
					<Button onClick={onCancel}>Cancel</Button>
					<Button onClick={handleReset} danger>
						Reset
					</Button>
					<Button onClick={handleSave} type="primary">
						Save
					</Button>
				</>
			}
		>
			<h4>Set Current Valuation</h4>
			{/* <RangeSlider></RangeSlider> */}
			<div className="price-range">
				<InputNumber
					value={valuationRange[0]}
					onChange={setMinValuation}
				></InputNumber>
				<Slider
					range
					min={0}
					step={1000000}
					max={1000000000}
					// defaultValue={[20, 100]}
					value={valuationRange.map((item) => item)}
					onChange={handleValuationRangeChange}
					// tooltip={{ open: true }}
					className="slider"
				></Slider>
				<InputNumber
					value={valuationRange[1]}
					onChange={setMaxValuation}
				></InputNumber>
			</div>

			<br />
			{/* <h4>Set Yield range (in %)</h4>
			<div className="price-range">
				<InputNumber
					value={yieldRange[0]}
					onChange={setMinYield}
				></InputNumber>
				<Slider
					range
					defaultValue={[20, 100]}
					value={yieldRange}
					onChange={handleYieldRangeChange}
					// tooltip={{ open: true }}
					className="slider"
				></Slider>
				<InputNumber
					value={yieldRange[1]}
					onChange={setMaxYield}
				></InputNumber>
			</div>
			<br /> */}

			<h4>Set Marrfex range</h4>
			<div className="price-range">
				<InputNumber
					value={marrfexRange[0]}
					onChange={setMinMarrfex}
				></InputNumber>
				<Slider
					step={1}
					range
					min={0}
					max={5}
					// defaultValue={[20, 100]}
					value={marrfexRange.map((item) => item)}
					onChange={handleMarrfexRangeChange}
					// tooltip={{ open: true }}
					className="slider"
				></Slider>
				<InputNumber
					value={marrfexRange[1]}
					onChange={setMaxMarrfex}
				></InputNumber>
			</div>
			<br />

			<h4>Set Area range</h4>
			<div className="price-range">
				<InputNumber
					value={areaRange[0]}
					onChange={setMinArea}
				></InputNumber>
				<Slider
					step={1}
					range
					min={0}
					max={1000}
					// defaultValue={[20, 100]}
					value={areaRange.map((item) => item)}
					onChange={handleAreaRangeChange}
					// tooltip={{ open: true }}
					className="slider"
				></Slider>
				<InputNumber
					value={areaRange[1]}
					onChange={setMaxArea}
				></InputNumber>
			</div>
			<br />
			<h4>Other Filters</h4>
			<div className="dropdown-list">
				<Dropdown
					label="Completion Date"
					value={type}
					options={DropMenu["Completion Date"]}
					onChange={(newVal) => setCompletionDate(newVal)}
				></Dropdown>
				{/* <Dropdown
					label="Occupancy"
					value={occupancy}
					options={DropMenu.Occupancy}
					onChange={(newVal) => setOccupancy(newVal)}
				></Dropdown> */}
			</div>
		</Modal>
	);
};

const DropMenu = {
	"Completion Date": [
		{ value: "completed", label: "Completed" },
		{ value: "Q1 2025", label: "Q1 2025" },
		{ value: "Q2 2025", label: "Q2 2025" },
		{ value: "Q3 2025", label: "Q3 2025" },
		{ value: "Q4 2025", label: "Q4 2025" },
		{ value: "Q1 2026", label: "Q1 2026" },
		{ value: "Q2 2026", label: "Q2 2026" },
		{ value: "Q3 2026", label: "Q3 2026" },
		{ value: "Q4 2026", label: "Q4 2026" },
		{ value: "Q1 2027", label: "Q1 2027" },
		{ value: "Q2 2027", label: "Q2 2027" },
		{ value: "Q3 2027", label: "Q3 2027" },
		{ value: "Q4 2027", label: "Q4 2027" },
		{ value: "Q1 2028", label: "Q1 2028" },
		{ value: "Q2 2028", label: "Q2 2028" },
		{ value: "Q3 2028", label: "Q3 2028" },
		{ value: "Q4 2028", label: "Q4 2028" },
		{ value: "Q1 2029", label: "Q1 2029" },
		{ value: "Q2 2029", label: "Q2 2029" },
		{ value: "Q3 2029", label: "Q3 2029" },
		{ value: "Q4 2029", label: "Q4 2029" },
		{ value: "Q1 2030", label: "Q1 2030" },
		{ value: "Q2 2030", label: "Q2 2030" },
		{ value: "Q3 2030", label: "Q3 2030" },
		{ value: "Q4 2030", label: "Q4 2030" },
	],
	Type: [
		{ value: "residential", label: "Residential" },
		{ value: "commercial", label: "Commercial" },
		{ value: "villa", label: "Villa" },
		{ value: "apartment", label: "Apartment" },
	],
	Occupancy: [
		{ value: "vacant", label: "Vacant" },
		{ value: "owned", label: "Owned" },
		{ value: "tenant", label: "Tenant" },
	],
};

export default FilterBox;
