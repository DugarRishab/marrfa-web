import React, { useEffect, useState } from "react";
import "./Blogs.css";
import BlogCard from "../../components/Blogcard/Blogcard";
import Heading from "../../components/Heading/heading";

import projectData from "../../assets/data/projects.json";
import financeData from "../../assets/data/finance.json";
import News from "../../components/news/News";
import Carousel from "../../components/carousel/Carousel";
import CustomButton from "../../components/button/CustomButton";
import BlogPagination from "../../components/BlogPagination/BlogPagination";
import { BellOutlined } from "@ant-design/icons";
import { Select } from "antd";

const BlogsList = [];

import { NewsList } from "../../pages/Homepage/Homepage";
const Fin = []

for (let p of projectData) {
    BlogsList.push(<News data={p} />);
}
for(let q of financeData){
    Fin.push(<News data={q} />)
}

const Agri = [...NewsList, ...NewsList, ...NewsList];
const Finance = [...Fin, ...Fin, ...Fin, ...Fin, ...NewsList];

const sortFlags = [
    { value: "Price", label: "Price" },
    { value: "Yield", label: "Yield" },
    { value: "Area", label: "Area" },
    { value: "Relevance", label: "Relevance" },
];

const BlogDetails = {
    imageURL: `/assets/balloon.jpeg`,
    tags: ['Amazing', 'Cheap'],
    date: '21 Aug 2024',
    category: 'Finance',
    heading: 'AshtonVilla Apartment in Dubai',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolores excepturi, molestias ipsam enim eligendi voluptates rem libero nam, eum qui ad nemo officia, hic atque rerum doloribus soluta quos?',  
}

const Category = ({ catname, activated, setActive }) => {
    return (
        <div onClick={() => setActive(catname)} className={"category" + (activated === catname ? " active" : "")}>
            {catname}
        </div>
    );
};

const Categories = ["Finance", "Agriculture", "Real Estate", "Gold", "Stocks", "Markets"];
const Catmap = {
    "Finance": Finance,
    "Agriculture": Agri,
    "Real Estate": Finance,
    "Gold": Finance,
    "Stocks": Agri,
    "Markets": Agri
}


const Blogs = () => {
    const [CatName, setCatName] = useState("Finance");
    const [Items, setItems] = useState(Finance);

    useEffect(()=>{
        setItems(Catmap[CatName]);
    }, [CatName]);

    return (
        <div className="blogpage">
            <section className="mainblogs">
                <div className="left">
                    <Heading heading={"Latest on the blog"} align="left" />
                    <BlogCard data={BlogDetails} />
                </div>
                <div className="right">
                    <div className="heading">Trending Posts</div>
                </div>
            </section>
            <section className="investments">
                <Heading color="black" align="left" heading={"Articles on real estate investments"} />
                <Carousel items={BlogsList} />
            </section>

            <section className="bigdata">
                <div className="headline">
                    <div className="upper">
                        <Heading size={2} heading={"News and Articles"} color={"white"} />
                        <CustomButton startIcon={<BellOutlined />} text={"Subscribe to notifications"} />
                    </div>

                    <div className="middle">
                        <div className="byline">Articles</div>
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
                                // onChange={}
                                options={sortFlags}
                            />
                        </div>
                    </div>
                    <div className="lower">
                        {Categories.map((value, index) => (
                            <Category catname={value} activated={CatName} setActive={setCatName} />
                        ))}
                    </div>
                </div>
                <BlogPagination items={Items} />
            </section>
        </div>
    );
};

export default Blogs;
