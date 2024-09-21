import React, { useState, useEffect } from 'react';
import { Select, ConfigProvider, Button, Input } from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import "./SearchBox.css";
import FilterBox from '../FilterBox/FilterBox';

const { Search } = Input;

const SearchBox = () => {

	const [openFilters, setOpenFilters] = useState(false);

	const handleOpenFilter = (state) => {
		setOpenFilters(state);
	}
	return (
		<div className="search-box">
			<Input
				placeholder="City, District, Building Name"
				// prefix={<SearchOutlined />}
				style={{ width: "100%", lineHeight: "2.5em", border: "none" }}
				addonBefore={<SearchOutlined />}
				size="large"
				allowClear
			/>
			<Button icon={<FilterOutlined />} size="large" onClick={() => handleOpenFilter(true)}>Filters</Button>
			<Button icon={<SearchOutlined />} size="large" type='primary'>Search</Button>
			<FilterBox open={openFilters} onCancel={() => handleOpenFilter(false)}></FilterBox>
		</div>
	);
}
 
export default SearchBox;