import React, { useEffect, useState } from "react";
import "./Projects.css";
import Search from "../../components/search/Search";

import { ProjectList } from "../Homepage/Homepage";
import PropertyRequestForm from "../../components/PropertyRequestForm/PropertyRequestForm";
import CustomButton from "../../components/button/CustomButton";

import { Select, Table } from "antd";
import ProjectDesc from "../../components/projectdesc/ProjectDesc";
import SampleData from "../../assets/samples/ProdListing.json";
import { formatPrice, formatNumber } from "../../utils/BasicFunctions";
import { BellOutlined } from "@ant-design/icons";
import Mobcarousel from "../../components/mobile-carousel/Mobcarousel";
import CustomCarousel from "../../components/carousel/Carousel";
import SearchBox from "../../components/SearchBox/SearchBox";

const columns = [];
var i = 0;
const colnames = ["Project Name", "Price", "Yield", "Area", `Absolute Return`, "Marrfex", "Date"];
for (let name of colnames) {
    columns.push({
        title: <div style={{ textAlign: "center", color: "#fff", maxWidth: "12ch" }}>{name}</div>,
        dataIndex: name.split(" ")[0].toLowerCase(),
        key: name.split(" ")[0].toLowerCase(),
        align: "center",
    });
    if (name !== "Project Name") {
        columns[i].responsive = ["md"];
    }
    i++;
}

columns[1]["sorter"] = (a,b)=>a.sortkey.price-b.sortkey.price;
columns[2]["sorter"] = (a,b)=>a.sortkey.yield-b.sortkey.yield;
columns[3]["sorter"] = (a,b)=>a.sortkey.area-b.sortkey.area;
columns[4]["sorter"] = (a,b)=>a.sortkey.absolute-b.sortkey.absolute;
columns[5]["sorter"] = (a,b)=>a.sortkey.marrfex-b.sortkey.marrfex;

// columns[0]['fixed'] = 'left';
// columns[0]['width'] = 450

var data = [];
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
        sortkey: {
            price: item.price,
            yield: item.yield,
            area: item.area,
            marrfex: item.marrfex,
            absolute: item.return,
            date: item.date
        },
    });
}

const sortFlags = [
    { value: "Price", label: "Price" },
    { value: "Yield", label: "Yield" },
    { value: "Area", label: "Area" },
    { value: "Relevance", label: "Relevance" },
];

const Projects = () => {
    const { innerWidth } = window;
    const [sortColumn, setSortColumn] = useState("relevance");  // Initialize with "Relevance"
    const [sortedData, setSortedData] = useState(data);  // This will hold the sorted data

    // Function to sort based on the selected column
    const handleSort = (column) => {
        let sorted = [];
        switch (column) {
            case "price":
                sorted = [...data].sort((a, b) => a.sortkey.price - b.sortkey.price);
                break;
            case "yield":
                sorted = [...data].sort((a, b) => a.sortkey.yield - b.sortkey.yield);
                break;
            case "area":
                sorted = [...data].sort((a, b) => a.sortkey.area - b.sortkey.area);
                break;
            case "relevance":
                sorted = [...data]; // Keep the original order for "Relevance"
                break;
            default:
                sorted = [...data];
        }
        setSortedData(sorted);
    };

    return (
        <div className="projects">
            <section className="banner">
                {/* <Search /> */}
                <SearchBox />
            </section>
            <section className="sale-wrapper">
                <div className="headline">
                    <div className="heading">
                        Properties for sale in Dubai
                        <CustomButton startIcon={<BellOutlined />} text={"Subscribe to notifications"} />
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
                                onChange={(value) => {
                                    setSortColumn(value.toLowerCase());
                                    handleSort(value.toLowerCase());
                                }}
                                options={sortFlags}
                            />
                        </div>
                    </div>
                </div>
                <Table
                    scroll={{ x: 1100 }}
                    className="project-table"
                    pagination={{ defaultPageSize: 5, position: ["bottomCenter"] }}
                    columns={columns}
                    dataSource={sortedData}
                />
            </section>
            <section className="choice-wrapper">
                <div className="heading">Trending Projects</div>
                {innerWidth > 630 ? (
                    <CustomCarousel items={ProjectList} />
                ) : (
                    <Mobcarousel items={ProjectList} width={"--card-width"} />
                )}
            </section>
            <section className="request-wrapper">
                <PropertyRequestForm />
            </section>
        </div>
    );
};

export default Projects;
