import React from "react"
import { graphql } from "gatsby"

import "../style.css"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import PostList from "../components/postList/postList"

const BlogIndex = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<PostList />
		</Layout>
	)
}

export default BlogIndex

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`
