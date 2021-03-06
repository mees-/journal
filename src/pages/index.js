import React from "react"
import { graphql } from "gatsby"

import "../style.css"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import PostList from "../components/entryList/entryList"

const BlogIndex = () => {
	return (
		<Layout isHome={true}>
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
