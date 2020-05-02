import React from "react"
import Header from "../header/header"

import { main } from "./layout.module.css"

const Layout = ({ children }) => (
	<>
		<Header />
		<main className={[main].join(" ")}>{children}</main>
	</>
)

export default Layout
