import React, { useState, useEffect } from 'react';
import {
	Select,
	ConfigProvider,
	Button,
	Input,
	InputNumber,
	Modal,
	Slider,
} from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import "./SearchBox.css";
import FilterBox from '../FilterBox/FilterBox';

const { Search } = Input;

const SearchBox = () => {

	const [openFilters, setOpenFilters] = useState(false);
	const [priceRange, setPriceRange] = useState([0, 100]);

	const handlePriceRangeChange = (newVal) => {
		setPriceRange(newVal);
	};
	const setMinPrice = (newVal) => {
		setPriceRange([newVal, priceRange[1]]);
	};
	const setMaxPrice = (newVal) => {
		setPriceRange([priceRange[0], newVal]);
	};

	const handleOpenFilter = (state) => {
		setOpenFilters(state);
	}
	return (
		<div className="search-box">
			<div className="price-range">
				Price Range
				<Slider
					range
					defaultValue={[20, 100]}
					value={priceRange}
					onChange={handlePriceRangeChange}
					// tooltip={{ open: true }}
					className="slider"
				></Slider>
			</div>
			<div className="row">
				<Input
					placeholder="City, District, Building Name"
					// prefix={<SearchOutlined />}
					style={{
						width: "100%",
						lineHeight: "2.5em",
						border: "none",
						background: "white",
					}}
					addonBefore={<SearchOutlined />}
					size="large"
					allowClear
				/>
				<Button
					icon={<FilterOutlined />}
					size="large"
					onClick={() => handleOpenFilter(true)}
				>
					Filters
				</Button>
				<Button icon={<SearchOutlined />} size="large" type="primary">
					Search
				</Button>
				<FilterBox
					open={openFilters}
					onCancel={() => handleOpenFilter(false)}
				></FilterBox>
			</div>
		</div>
	);
}
 
export default SearchBox;