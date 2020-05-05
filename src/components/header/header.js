import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { header, noUnderline } from "./header.module.css"

const Header = ({ isHome }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<header className={header}>
			<h1>
				<Link
					to="/"
					className={["simple", isHome ? noUnderline : ""].join(" ")}
				>
					{data.site.siteMetadata.title}
				</Link>
			</h1>
		</header>
	)
}

export default Header
