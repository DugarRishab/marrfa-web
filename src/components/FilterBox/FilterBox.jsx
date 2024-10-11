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

	const [completionDate, setCompletionDate] = useState(params.get('completionDate'));
	const [type, setType] = useState(params.get('type') || null);
	const [occupancy, setOccupancy] = useState(params.get('occupancy') || null);

	const handleValuationRangeChange = (newVal) => {
		setValuationRange(newVal.map((item) => item * 10000000));
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
		setMarrfexRange(newVal.map((item) => item / 20));
	};

	const handleSave = () => {
		// Initialize the URLSearchParams object from the current URL
		const params = new URLSearchParams(window.location.search);

		// Set the filter parameters in the URL
		params.set("priceMin", valuationRange[0]);
		params.set("priceMax", valuationRange[1]);

		// params.set("yieldMin", yieldRange[0]);
		// params.set("yieldMax", yieldRange[1]);

		// params.set("marrfexIndexMin", marrfexRange[0]);
		// params.set("marrfexIndexMax", marrfexRange[1]);

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
					defaultValue={[20, 100]}
					value={valuationRange.map((item) => item / 10000000)}
					onChange={handleValuationRangeChange}
					// tooltip={{ open: true }}
					className="slider"
				></Slider>
				<InputNumber
					value={valuationRange[1]}
					onChange={setMaxValuation}
				></InputNumber>
			</div>

			{/* <br />
			<h4>Set Yield range (in %)</h4>
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
			</div> */}
			<br />

			{/* <h4>Set Marrfex range</h4>
			<div className="price-range">
				<InputNumber
					value={marrfexRange[0]}
					onChange={setMinYield}
				></InputNumber>
				<Slider
					range
					defaultValue={[20, 100]}
					value={marrfexRange.map((item) => item * 20)}
					onChange={handleMarrfexRangeChange}
					// tooltip={{ open: true }}
					className="slider"
				></Slider>
				<InputNumber
					value={marrfexRange[1]}
					onChange={setMaxYield}
				></InputNumber>
			</div> */}
			{/* <br /> */}

			<h4>Other Filters</h4>
			<div className="dropdown-list">
				<Dropdown
					label="Type"
					value={type}
					options={DropMenu.Type}
					onChange={(newVal) => setType(newVal)}
				></Dropdown>
				<Dropdown
					label="Occupancy"
					value={occupancy}
					options={DropMenu.Occupancy}
					onChange={(newVal) => setOccupancy(newVal)}
				></Dropdown>
			</div>
		</Modal>
	);
};

const DropMenu = {
	// "Completion Date": [
	// 	{ value: "completed", label: "Completed" },
	// 	{ value: "2024-2025", label: "2024-2025" },
	// 	{ value: "2025-2026", label: "2025-2026" },
	// 	{ value: "2026-2027", label: "2026-2027" },
	// ],
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
