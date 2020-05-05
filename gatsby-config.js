const description = `A journal/blog maintained by Mees van Dijk`

const plugins = [
	{
		resolve: `gatsby-source-filesystem`,
		options: {
			path: `${__dirname}/content/posts`,
			name: `journal`,
		},
	},
	{
		resolve: `gatsby-transformer-remark`,
		options: {
			plugins: [
				`gatsby-remark-prismjs`,
				`gatsby-remark-copy-linked-files`,
				`gatsby-remark-smartypants`,
			],
		},
	},
	{
		resolve: `gatsby-plugin-google-analytics`,
		options: {
			trackingId: process.env.GA_ID,
		},
	},
	{
		resolve: `gatsby-plugin-manifest`,
		options: {
			name: `Mees' journal`,
			short_name: `Journal`,
			description,
			start_url: `/`,
			background_color: `#fff5f0`,
			theme_color: `#ff9f1c`,
			icon: `static/icon.png`,
			legacy: true,
			lang: `en`,
			display: `minimal-ui`,
		},
	},
	`gatsby-plugin-react-helmet`,
	// this (optional) plugin enables Progressive Web App + Offline functionality
	// To learn more, visit: https://gatsby.dev/offline
	`gatsby-plugin-offline`,
]

if (process.env.POST_DIR) {
	plugins.splice(1, 0, {
		resolve: `gatsby-source-filesystem`,
		options: {
			path: process.env.POST_DIR,
			name: `journal`,
		},
	})
}

module.exports = {
	siteMetadata: {
		title: `Journal`,
		author: {
			name: `Mees van Dijk`,
			email: `mees@mees.io`,
			website: `https://mees.io`,
		},
		description,
	},
	plugins,
}
