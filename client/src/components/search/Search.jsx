import React, { useState } from "react";
import "./Search.css";
import RangeSlider from "../rangeslider/RangeSlider";

const SearchBar = () => {
    return (
        <div className="searchbar">
            <div className="search-area">
                <i className="material-icons">search</i>
                <input type="text" placeholder="City, Building type, Yield"></input>
            </div>
            <div className="button-group">
                <button className="filters">
                    <i className="material-icons">tune</i>
                    Filters
                </button>
                <button className="search-button">Search</button>
            </div>
        </div>
    );
};

const Dropdown = ({ label, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(label);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        if (option !== "--select--") setSelectedOption(option);
        else setSelectedOption(label);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown} className="toggle">
                {selectedOption}
                <i className="material-icons">keyboard_arrow_down</i>
            </button>
            {isOpen && (
                <ul className="menu">
                    {options.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick(option)} className="item">
                            {option}
                        </li>
                    ))}
                    <li onClick={() => handleOptionClick(label)} className="item">
                        --select--
                    </li>
                </ul>
            )}
        </div>
    );
};

const Search = () => {
    return (
        <div className="search-wrapper">
            <RangeSlider />
            <SearchBar />
            <div className="dropdown-list">
                {Object.keys(DropMenu).map((key, idx) => (
                    <Dropdown key={idx} label={key} options={DropMenu[key]} />
                ))}
            </div>
        </div>
    );
};

const DropMenu = {
    "Completion Date": ["v1", "v2", "v3"],
    Yield: ["v4", "v2", "v3"],
    "Current value": ["v5", "v2", "v3"],
    Area: ["v6", "v2", "v3"],
    Marrfex: ["v7", "v2", "v3"],
};

export default Search;
