import React, { useState } from "react";
import "./Search.css";
import RangeSlider from "../rangeslider/RangeSlider";
import { Select, ConfigProvider, Button, Input } from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";

const {Search} = Input;

const SearchBar = ({ filter, filterToggle }) => {
    return (
        <div className="searchbar">
            <div className="search-area">
                <i className="material-icons">search</i>
                <Input
                    placeholder="City, Building type, Yield"
                    style={{ width: "100%", lineHeight: "2.5em", border: "none" }}
                />
            </div>
            <div className="button-group">
                <Button
                    style={{
                        // padding: "25px 20px",
                        fontSize: "1rem",
                        border: "none",
                        borderRadius: 0,
                        borderLeft: "1px solid",
                        display: "flex",
                        gap: "1px",
                        height: "3em",
                    }}
                    onClick={filterToggle}
                >
                    <FilterOutlined />
                    Filters
                </Button>
                <Button
                    style={{
                        borderTopRightRadius: "100px",
                        borderBottomRightRadius: "100px",
                        padding: "25px 60px",
                        fontSize: "1rem",
                        background: "var(--mix-background)",
                        color: "#fff",
                        fontWeight: "600",
                        border: "none",
                    }}
                >
                    Search
                </Button>
            </div>
        </div>
    );
};

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

const SearchField = () => {
    const [filter, setFilter] = useState(false);
    const toggleFilter = () => {
        setFilter((value) => !value);
    };
    return (
        <div className="search-wrapper">
            <RangeSlider />
            <SearchBar filter={filter} filterToggle={toggleFilter} />
            {/* <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                addonBefore={<SearchOutlined />}
                style={{
                    borderRadius: "100px"
                }}
                // onSearch={onSearch}
            /> */}
            {filter && (
                <div className="dropdown-list">
                    {Object.keys(DropMenu).map((key, idx) => (
                        <Dropdown key={idx} label={key} options={DropMenu[key]} />
                    ))}
                </div>
            )}
        </div>
    );
};

const DropMenu = {
    "Completion Date": [
        { value: "Price", label: "Price" },
        { value: "Yield", label: "Yield" },
        { value: "Area", label: "Area" },
        { value: "Relevance", label: "Relevance" },
    ],
    Yield: [
        { value: "Price", label: "Price" },
        { value: "Yield", label: "Yield" },
        { value: "Area", label: "Area" },
        { value: "Relevance", label: "Relevance" },
    ],
    "Current value": [
        { value: "Price", label: "Price" },
        { value: "Yield", label: "Yield" },
        { value: "Area", label: "Area" },
        { value: "Relevance", label: "Relevance" },
    ],
    Area: [
        { value: "Price", label: "Price" },
        { value: "Yield", label: "Yield" },
        { value: "Area", label: "Area" },
        { value: "Relevance", label: "Relevance" },
    ],
    Marrfex: [
        { value: "Price", label: "Price" },
        { value: "Yield", label: "Yield" },
        { value: "Area", label: "Area" },
        { value: "Relevance", label: "Relevance" },
    ],
};

export default SearchField;
