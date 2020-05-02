import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { list, item } from "./postList.module.css"

const PostList = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
				edges {
					node {
						id
						fields {
							slug
						}
						frontmatter {
							title
							date(formatString: "DD/MM/YYYY")
						}
					}
				}
			}
		}
	`)
	const posts = data.allMarkdownRemark.edges.map(edge => ({
		id: edge.node.id,
		title: edge.node.frontmatter.title,
		date: edge.node.frontmatter.date,
		slug: edge.node.fields.slug,
	}))

	return (
		<ul className={list}>
			{posts.map(({ id, slug, title, date }) => (
				<li key={id} className={item}>
					<Link to={slug}>
						{title} - {date}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default PostList
