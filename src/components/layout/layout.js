import React from "react"
import Header from "../header/header"
import Footer from "../footer/footer"

import { main } from "./layout.module.css"

const Layout = ({ children, isHome }) => (
	<>
		<Header isHome={isHome} />
		<main className={[main].join(" ")}>{children}</main>
		<Footer />
	</>
)

export default Layout
