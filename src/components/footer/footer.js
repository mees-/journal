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
					author
					email
					website
				}
			}
		}
	`).site.siteMetadata

	return (
		<footer className={footer}>
			<span>
				Made by <a href="https://mees.io">{data.author}</a> {"<"}
				{data.email}
				{">"}
			</span>
		</footer>
	)
}

export default Footer
