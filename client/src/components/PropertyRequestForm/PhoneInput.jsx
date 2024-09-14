import React from "react";
import "./PhoneInput.css";
import { Select, Input } from "antd";
import cflags from "../../../public/data/countrycodes/CountryCodes.json";

function Flag({ code, dcode, cname }) {
    return (
        <div className="flag">
            {/* <img src={`https://flagsapi.com/${code}/shiny/24.png`} /> */}
            <img
                src={`https://flagcdn.com/w20/${code.toLowerCase()}.png`}
                srcset={`https://flagcdn.com/w40/${code.toLowerCase()}.png 2x`}
                width="20"
                height="15"
                alt="Ukraine"
            ></img>
            {cname && <span>{cname}</span>}
            {dcode && <span style={{color: 'grey', fontFamily: 'monospace'}}>{" "}{dcode}</span>}
        </div>
    );
}

const flags = [];
for (let flaginfo of cflags) {
    flags.push({ value: flaginfo.dial_code, 
                 show: <Flag code={flaginfo.code} dcode = {flaginfo.dial_code} cname = {flaginfo.name}/>,
                 label: <Flag code={flaginfo.code} />});
}

const PhoneInput = () => {
    function handleChange(value) {
        console.log(value);
    }
    return (
        cflags && <div className="ph-inp">
            <Select
                className="flaginp"
                // showSearch
                // optionFilterProp="value"
                // defaultOpen
                defaultValue={"+91"}
                popupMatchSelectWidth={false}
                style={{
                    width: 70,
                }}
                size="large"
                onChange={handleChange}
                options={flags}
                optionRender={(option) => (option.data.show)}
            />
            <Input placeholder="Phone" type="tel" className="phonenum" size="large"/>
        </div>
    );
};

export default PhoneInput;
