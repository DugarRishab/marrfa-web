import React from "react";
import "./Projects.css";
import Search from "../../components/search/Search";
import Carousel from "../../components/carousel/Carousel";

import { ProjectList } from "../Homepage/Homepage";
import PropertyRequestForm from "../../components/PropertyRequestForm/PropertyRequestForm";
import CustomButton from "../../components/button/CustomButton";

import { Select, Table } from "antd";
import ProjectDesc from "../../components/projectdesc/ProjectDesc";
import SampleData from "../../assets/samples/ProdListing.json";
import { formatPrice, formatNumber } from "../../App";
import { BellOutlined } from "@ant-design/icons";

const columns = [];
const colnames = ["Project Name", "Price", "Yield", "Area", `Absolute Return`, "Marrfex", "Date"];
for (let name of colnames) {
    columns.push({
        title: <div style={{ textAlign: "center", color: "#fff", maxWidth: "12ch" }}>{name}</div>,
        dataIndex: name.split(" ")[0].toLowerCase(),
        key: name.split(" ")[0].toLowerCase(),
        align: "center"
    });
}

const data = [];
var key = 1;

for (let item of SampleData) {
    data.push({
        key: key++,
        project: (
            <ProjectDesc
                projectName={item.name.projectName}
                highlights={item.name.highlights}
                image={"/assets/balloon.jpeg"}
            />
        ),
        price: formatPrice(item.price),
        yield: formatNumber(item.yield) + " %",
        area: formatPrice(item.area) + " sqft",
        absolute: item.return + " %",
        marrfex: item.marrfex,
        date: item.date,
    });
}

const sortFlags = [
    { value: "Price", label: "Price" },
    { value: "Yield", label: "Yield" },
    { value: "Area", label: "Area" },
    { value: "Relevance", label: "Relevance" },
];

const Projects = () => {
    return (
        <div className="projects">
            <section className="banner">
                <Search />
            </section>
            <section className="sale-wrapper">
                <div className="headline">
                    <div className="heading">
                        Properties for sale in Dubai
                        <CustomButton
                            startIcon={<BellOutlined />}
                            text={"Subscribe to notifications"}
                        />
                    </div>

                    <div className="sub-heading">
                        <div className="byline">1000+ Live projects</div>
                        <div className="sort-label">
                            Sort by
                            <Select
                                // className="flaginp"
                                // showSearch
                                // optionFilterProp="value"
                                // defaultOpen
                                defaultValue={"Relevance"}
                                popupMatchSelectWidth={false}
                                style={{
                                    width: 120,
                                    height: 30,
                                }}
                                size="small"
                                // onChange={handleChange}
                                options={sortFlags}
                            />
                        </div>
                    </div>
                </div>
                <Table pagination={{ defaultPageSize: 5 }} columns={columns} dataSource={data} />
            </section>
            <section className="choice-wrapper">
                <div className="heading">Marrfa's Choice</div>
                <Carousel items={ProjectList} />
            </section>
            <section className="request-wrapper">
                <PropertyRequestForm />
            </section>
        </div>
    );
};

export default Projects;
