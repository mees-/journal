import React from "react"
import { graphql } from "gatsby"

import { title, date, time, content } from "./blog-post.module.css"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
	const post = data.markdownRemark
	const siteTitle = data.site.siteMetadata.title

	return (
		<Layout location={location} title={siteTitle}>
			<SEO title={post.frontmatter.title} />
			<h2 className={title}>{post.frontmatter.title}</h2>
			<h4 className={date}>{post.frontmatter.date}</h4>
			<br />
			<h5 className={time}>{post.frontmatter.time}</h5>
			<div
				className={content}
				dangerouslySetInnerHTML={{ __html: post.html }}
			/>
		</Layout>
	)
}

export default BlogPostTemplate

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		site {
			siteMetadata {
				title
			}
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
			id
			html
			frontmatter {
				title
				location
				date(formatString: "dddd, MMMM Do YYYY")
				time: date(formatString: "HH:MM A")
			}
			excerpt
		}
	}
`
