import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { header } from "./header.module.css"

const Header = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					author {
						name
						email
						website
					}
				}
			}
		}
	`)

	return (
		<header className={header}>
			<h1>
				<Link to="/">{data.site.siteMetadata.title}</Link>
			</h1>
		</header>
	)
}

export default Header
