// BlogView.jsr

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBlog } from "../../services/api";
import { message, Tag } from "antd";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(LocalizedFormat);
import "./Blog.css";

const BlogView = () => {
	// if (!blog) return <p>No blog data available.</p>;

	const [blog, setBlog] = useState();
	const params = useParams();

	const handleGetBlog = async () => {
		const { id } = params;
		try {
			const res = await getBlog(id);
			setBlog(res.data.data.blog);
		} catch (error) {
			message.error(
				"Error displaying the blog:",
				error.reponse.data.message || error.message
			);
		}
	};

	useEffect(() => {
		handleGetBlog();
	}, []);

	// const {
	// 	name,
	// 	coverImg,
	// 	content,
	// 	metadata: { datePosted, dateUpdated, likes, views },
	// 	active,
	// 	tags,
	// 	description,
	// } = blog;

	return (
		<div className="blog-view">
			{blog ? (
				<>
					{/* Blog Name */}
					<h1>{blog.name}</h1>

					{/* Cover Image */}
					{blog.coverImg && (
						<div className="blog-cover">
							<img
								src={blog.coverImg}
								alt={`${blog.name} cover`}
								style={{
									width: "100%",
									maxHeight: "400px",
									objectFit: "cover",
								}}
							/>
						</div>
					)}

					<div className="sub-text">
						{dayjs(blog.metadata.datePosted).format("ll")}
						<div className="metadata">
							<p>
								<strong>Likes:</strong> {blog.metadata.likes}
							</p>
							<p>
								<strong>Views:</strong> {blog.metadata.views}
							</p>
						</div>
					</div>
					<br />
					{/* Description */}
					{blog.description && (
						<p className="blog-description">{blog.description}</p>
					)}

					

					{/* Tags */}
					{/* {blog.tags && blog.tags.length > 0 && (
						<div className="blog-tags">
							<strong>Tags:</strong>{" "}
							{blog.tags.map((tag) => (
								<Tag key={tag} className="ta">
									{tag}
								</Tag>
							))}
						</div>
					)} */}

					{/* Content - assuming it's rich text */}
					<div
						className="blog-content"
						dangerouslySetInnerHTML={{ __html: blog.content }}
					></div>
				</>
			) : (
				<p>No blog data available.</p>
			)}
		</div>
	);
};

export default BlogView;
