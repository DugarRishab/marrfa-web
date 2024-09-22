import React, { useState, useEffect } from 'react';
import { Button, InputNumber, Modal, Slider, ConfigProvider, Select } from "antd";
import RangeSlider from '../rangeslider/RangeSlider';
import "./FilterBox.css";

export const Dropdown = ({ label, options }) => {
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
			<Select
				// className="flaginp"
				// showSearch
				// optionFilterProp="value"
				// defaultOpen
				defaultValue={label}
				popupMatchSelectWidth={false}
				style={{
					width: 150,
					height: 30,
				}}
				size="small"
				// onChange={handleChange}
				options={options}
			/>
		</ConfigProvider>
	);
};

const FilterBox = ({ open, onSave, onCancel }) => {
	
	// const [priceRange, setPriceRange] = useState([0, 100]);
	const [valuationRange, setValuationRange] = useState([0, 100]);
	const [yieldRange, setYieldRange] = useState([0, 100]);


	const handleValuationRangeChange = (newVal) => {
		setValuationRange(newVal);
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

	return (
		<Modal
			className="filter-box"
			title="Filters"
			open={open}
			onCancel={onCancel}
			footer={
				<>
					<Button onClick={onCancel}>Cancel</Button>
					<Button onClick={onSave} type="primary">
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
					value={valuationRange}
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
			<h4>Set Yield range</h4>

			{/* <RangeSlider></RangeSlider> */}
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
			<br />
			
			
			<h4>Other Filters</h4>
			<div className="dropdown-list">
				{Object.keys(DropMenu).map((key, idx) => (
					<Dropdown key={idx} label={key} options={DropMenu[key]} />
				))}
			</div>
		</Modal>
	);
}

const DropMenu = {
	"Completion Date": [
		{ value: "Completed", label: "completed" },
		{ value: "2024-2025", label: "2024-2025" },
		{ value: "2025-2026", label: "2025-2026" },
		{ value: "2026-2027", label: "2026-2027" },
	],
	Area: [
		{ value: "0%-20%", label: "0%-20%" },
		{ value: "20%-40%", label: "20%-40%" },
		{ value: "40%-60%", label: "60%-80%" },
		{ value: "80%-100%", label: "80%-100%" },
	],
	Marrfex: [
		{ value: 0 - 1, label: "0-1" },
		{ value: 1 - 2, label: "1-2" },
		{ value: 2 - 3, label: "2-3" },
		{ value: 3 - 4, label: "3-4" },
		{ value: 4 - 5, label: "4-5" },
	],
};
 
export default FilterBox;