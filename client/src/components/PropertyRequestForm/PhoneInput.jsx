import React from "react";
import './PhoneInput.css'

const Flag = () => {
    return (
        <div className="flag">
            <img src="/assets/flags/in.svg" alt="" />
        </div>
    )
}

const PhoneInput = () => {
    return (
        <div className="ph-inp">
            <label htmlFor="CountryCode">
                <select name="CountryCode" id="CountryCode">
                    <option value="v" style={{background:`url("/assets/flags/in.svg")`}}>flag</option>
                    <option value="v">flag</option>
                    <option value="v">flag</option>
                    <option value="v">flag</option>
                    <option value="v">flag</option>
                    <option value="v">flag</option>
                    <option value="v">flag</option>
                </select>
            </label>
            <input type="tel" name="tel" id="tel" placeholder="Phone"/>
        </div>
    );
};

export default PhoneInput;
