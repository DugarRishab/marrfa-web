import React from "react";
import "./ProjectCard.css";

import { WalletFilled, FormatPainterFilled, EnvironmentFilled, WhatsAppOutlined, PhoneOutlined, CalendarFilled, AreaChartOutlined,  } from "@ant-design/icons";

import Whatsapp from "/assets/icons/whatsapp.svg";
import CustomButton from "../button/CustomButton";

const IconMap = {
    "Start from": <WalletFilled style={{ color: "var(--cyan)", fontSize: "20px" }} />,
    "Completion date": <CalendarFilled style={{ color: "var(--cyan)", fontSize: "20px" }} />,
    "Project yield": <AreaChartOutlined style={{ color: "var(--cyan)", fontSize: "20px" }} />,
    "Area": <FormatPainterFilled style={{ color: "var(--cyan)", fontSize: "20px" }} />
}

export const Label = ({ label, value }) => {
    return (
        <div className="row">
            <div className="brandicon">
                {IconMap[label]}
            </div>
            <div className="data-part">
                <div className="label">{label}:</div>
                <div className="value">{value.toLocaleString().toUpperCase()}</div>
            </div>
        </div>
    );
};

export const Location = ({ text }) => {
    return (
        <div className="location">
            <EnvironmentFilled style = {{color: "var(--grey-text)"}} />
            <div className="text">{text}</div>
        </div>
    );
};

export const BaseButton = () => {
    return (
        <div className="base-section">
            <CustomButton text={"Call"} />
            <CustomButton text={"Whatsapp"} />
        </div>
    );
};

const Project = ({ data }) => {
    return (
        <div className="project">
            <div
                className="image-section"
                style={{
                    background: `url("${data.images.heroImg}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                <div className="image-tag">Developer</div>
            </div>
            <div className="info-section">
                <CustomButton
                    size="medium"
                    text={""}
                    circled={true}
                    className="icon"
                    startIcon={<WhatsAppOutlined />}
                />
                <CustomButton
                    size="medium"
                    text={""}
                    circled={true}
                    className="icon"
                    startIcon={<PhoneOutlined />}
                />

                {/* <button className="icon material-icons">forum</button> */}

                <div className="heading">
                    <div className="project-name">{data.name}</div>
                    <div className="rating">
                        <div className=" number gradient-text">4.4</div>

                        <Location text={"Downtown, dubai"} />
                    </div>
                </div>
                <div className="stats">
                    <Label label={"Start from"} value={data.type} />
                    <Label label={"Completion date"} value={data.type} />
                    <Label label={"Project yield"} value={45200} />
                    <Label label={"Area"} value={`${data.layout.size.value} ${data.layout.size.unit}`} />
                </div>
                {/* <Location text = {`${data.location.state}, ${data.location.country}`} /> */}
            </div>
            <div className="base">
                <CustomButton text={"Invest Now!"} fullWidth rounded={false} />
            </div>
        </div>
    );
};

export default Project;
