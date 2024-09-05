import React, { useState } from "react";
import "./RangeSlider.css";

const RangeSlider = () => {
    const [minValue, setMinValue] = useState(300);
    const [maxValue, setMaxValue] = useState(700);

    const maxPlus = () => {
        setMaxValue((m) => Math.min(m + 1, 1000));
    };
    const maxMinus = () => {
        setMaxValue((m) => Math.max(m - 1, minValue + 1));
    };
    const minPlus = () => {
        setMinValue((m) => Math.min(m + 1, maxValue - 1));
    };
    const minMinus = () => {
        setMinValue((m) => Math.max(m - 1, 0));
    };

    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxValue - 1);
        setMinValue(value);
    };

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), minValue + 1);
        setMaxValue(value);
    };

    return (
        <div className="range">
            <div className="label">Price range</div>
            <div className="control">
                <button onClick={minPlus}>
                    <i className="material-icons">add</i>
                </button>
                <input type="number" name="min" value={minValue} onChange={handleMinChange} />
                <button onClick={minMinus}>
                    <i className="material-icons">remove</i>
                </button>
            </div>
            <div className="slider-wrapper">
                <div className="range-slider">
                    <div
                        className="range-selected"
                        style={{
                            left: `${(minValue / 1000) * 100}%`,
                            width: `${((maxValue - minValue) / 1000) * 100}%`,
                        }}
                    ></div>
                </div>
                <div className="range-input">
                    <input
                        type="range"
                        className="min"
                        min="0"
                        max="1000"
                        value={minValue}
                        step="1"
                        onChange={handleMinChange}
                    />
                    <input
                        type="range"
                        className="max"
                        min="0"
                        max="1000"
                        value={maxValue}
                        step="1"
                        onChange={handleMaxChange}
                    />
                </div>
            </div>
            <div className="control">
                <button onClick={maxPlus}>
                    <i className="material-icons">add</i>
                </button>
                <input type="number" name="max" value={maxValue} onChange={handleMaxChange} />
                <button onClick={maxMinus}>
                    <i className="material-icons">remove</i>
                </button>
            </div>
        </div>
    );
};

export default RangeSlider;
