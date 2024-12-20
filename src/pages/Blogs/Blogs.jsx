import React, { useEffect, useState } from "react";
import "./Blogs.css";
import BlogCard from "../../components/BlogCard/BlogCard";
import Heading from "../../components/Heading/Heading";

import projectData from "../../assets/data/projects.json";
import financeData from "../../assets/data/finance.json";
import News from "../../components/news/News";
import CustomButton from "../../components/button/CustomButton";
import BlogPagination from "../../components/BlogPagination/BlogPagination";
import {
	BellOutlined,
	BorderHorizontalOutlined,
	SearchOutlined,
} from "@ant-design/icons";
import { Divider, Input, Segmented, Select, message } from "antd";
import { getBlogs } from "../../services/api";
import NewsList from "../../assets/data/stories.json";
import TrendingPost from "../../components/TrendingPost/TrendingPost";
import Mobcarousel from "../../components/MobCarousel/Mobcarousel";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(LocalizedFormat);

const BlogsList = [];
const mobile = 830;

const Fin = [];

for (let p of projectData) {
	BlogsList.push(<News inMobile data={p} />);
}
for (let q of financeData) {
	Fin.push(<News data={q} />);
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
	tags: ["Amazing", "Cheap"],
	date: "21 Aug 2024",
	category: "Finance",
	heading: "AshtonVilla Apartment in Dubai",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolores excepturi, molestias ipsam enim eligendi voluptates rem libero nam, eum qui ad nemo officia, hic atque rerum doloribus soluta quos?",
};

const Category = ({ catname, activated, setActive }) => {
	return (
		<div
			onClick={() => setActive(catname)}
			className={"category" + (activated === catname ? " active" : "")}
		>
			{catname}
		</div>
	);
};

const Categories = [
	"Finance",
	"Agriculture",
	"Real Estate",
	"Gold",
	"Stocks",
	"Markets",
];
const Catmap = {
	Finance: Finance,
	Agriculture: Agri,
	"Real Estate": Finance,
	Gold: Finance,
	Stocks: Agri,
	Markets: Agri,
};

const sample1 = [];
for (var i = 0; i < 10; i++) {
	sample1.push(<BlogCard inMobile data={BlogDetails} />);
}



const Blogs = () => {
	const [CatName, setCatName] = useState("Finance");
	const [Items, setItems] = useState(Finance);
	const { innerWidth } = window;

	const [blogs, setBlogs] = useState();

	const handleGetBlogs = async () => {
		try {
			const res = await getBlogs();
			setBlogs(res.data.data.blogs);
		} catch (error) {
			message.error(
				"Error displaying the blog:",
				error.reponse.data.message || error.message
			);
		}
	}

	useEffect(() => {
		setItems(Catmap[CatName]);
		console.log(Items);
	}, [CatName]);

	useEffect(() => {
		handleGetBlogs();
	}, []);

	return (
		<div className="blogpage">
			<section className="mainblogs">
				{innerWidth < mobile && (
					<Input
						className="custom-input"
						size="large"
						placeholder="Looking for something specific?"
						prefix={<SearchOutlined />}
						style={{
							border: "2px solid #496ea1",
							background: "transparent",
							color: "#fff",
							marginBottom: "1rem",
						}}
					/>
				)}
				<div className="left">
					<Heading
						heading={"Latest on the blog"}
						align="left"
						style={{ marginTop: "0" }}
					/>
					{blogs && <BlogCard data={blogs[0]} />}
				</div>
				<div className="right">
					{innerWidth >= mobile && (
						<CustomButton
							text={"Looking for something specific?"}
							startIcon={<SearchOutlined />}
							// style={{ width: "100%", borderRadius: "2rem" }}
						/>
					)}
					{innerWidth >= mobile && (
						<div className="heading">Trending Posts</div>
					)}
					{innerWidth < mobile && (
						<Heading
							heading={"Trending Posts"}
							align="left"
							style={{ margin: "2rem 0 0 0" }}
						/>
					)}

					<div className="posts-list">
						{blogs &&
							blogs.map(
								(blog, id) =>
									id <= 2 && (
										<>
											<Divider
												style={{
													border: "1px solid #fff",
													margin: ".5rem",
													width: "100%",
												}}
											/>
											<TrendingPost
												heading={blog.name}
												date={dayjs(
													blog.metadata.datePosted
												).format("ll")}
												tag={blog.tags && blog.tags[0]}
												id={blog._id}
												desc={blog.description}
												bannersrc={blog.coverImg}
											/>
										</>
									)
							)}
					</div>
				</div>
			</section>
			<section className="investments">
				<Heading
					color="black"
					align="left"
					heading={"Articles on real estate investments"}
				/>
				<Mobcarousel items={BlogsList} width={"--card-width"} />
			</section>

			{innerWidth > 520 && (
				<section className="bigdata">
					<div className="headline">
						<div className="upper">
							<Heading
								size={2}
								heading={"News and Articles"}
								color={"white"}
							/>
							<CustomButton
								startIcon={<BellOutlined />}
								text={"Subscribe to notifications"}
							/>
						</div>

						{/* <div className="middle">
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
						</div> */}
						<div className="lower">
							{/* {Categories.map((value, index) => (
								<Category
									key={index}
									catname={value}
									activated={CatName}
									setActive={setCatName}
								/>
							))} */}
							<Segmented
								options={Categories}
								onChange={setCatName}
							></Segmented>
						</div>
					</div>
					<BlogPagination items={Items} />
				</section>
			)}
			{innerWidth <= 520 && (
				<section className="individual">
					<Heading
						color="white"
						align="center"
						heading={"Real Estate"}
					/>
					<Mobcarousel items={sample1} />
					<Heading color="white" align="center" heading={"Finance"} />
					<Mobcarousel items={sample1} />
					<Heading
						color="white"
						align="center"
						heading={"Projects"}
					/>
					<Mobcarousel items={sample1} />
					<CustomButton
						style={{ margin: "2rem 0rem" }}
						text={"View All Articles"}
					/>
				</section>
			)}
		</div>
	);
};

export default Blogs;
