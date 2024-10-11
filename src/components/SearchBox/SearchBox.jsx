import React, { useState, useEffect } from 'react';
import {
	Select,
	ConfigProvider,
	Button,
	Input,
	InputNumber,
	Modal,
	Slider,
	message,
} from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import "./SearchBox.css";
import FilterBox from '../FilterBox/FilterBox';
import CustomButton from '../button/CustomButton';
import { useNavigate, useSearchParams } from "react-router-dom";

const { Search } = Input;

const SearchBox = () => {

	const [openFilters, setOpenFilters] = useState(false);
	
	const [searchParams, setSearchParams] = useSearchParams();

	const [priceRange, setPriceRange] = useState([
		searchParams.get("priceMin") || 0,
		searchParams.get("priceMax") || 1000000000,
	]);
	const [searchQuery, setSearchQuery] = useState(searchParams.get('search'));

	const navigate = useNavigate();

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

	const handleOnSearch = () => {
		if (searchQuery && searchQuery.length >= 3)
			navigate(`/projects?search=${searchQuery}`);
		else message.error('Please enter your query');
		// setSearchParams({ search: searchQuery });
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
					className="search-input"
					// prefix={<SearchOutlined />}
					style={{
						width: "100%",
						lineHeight: "2.5em",
						border: "none",
						background: "rgba(255, 255, 255)",
						borderRadius: "var(--border-radius)",
					}}
					addonBefore={<SearchOutlined />}
					size="large"
					allowClear
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
				/>
				<Button
					icon={<FilterOutlined />}
					size="large"
					onClick={() => handleOpenFilter(true)}
					style={{
						borderRadius: "var(--border-radius)",
						// background: "rgba(255, 255, 255, 0.7)",
					}}
				>
					Filters
				</Button>
				{/* <Button icon={<SearchOutlined />} size="large" type="primary">
					Search
				</Button> */}
				<CustomButton
					startIcon={<SearchOutlined />}
					size="large"
					type="primary"
					text={"Search"}
					onClick={handleOnSearch}
				></CustomButton>
				<FilterBox
					open={openFilters}
					onCancel={() => handleOpenFilter(false)}
				></FilterBox>
			</div>
		</div>
	);
}
 
export default SearchBox;