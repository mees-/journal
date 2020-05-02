import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { footer } from "./footer.module.css"

const Footer = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					author {
						email
						name
						website
					}
				}
			}
		}
	`).site.siteMetadata

	return (
		<footer className={footer}>
			<span>
				Made by {data.author.name} {"<"}
				{data.author.email}
				{">"}
			</span>
		</footer>
	)
}

export default Footer
