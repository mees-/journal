const { join } = require("path")

const title = `Journal`
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
	{
		resolve: `gatsby-plugin-feed`,
		options: {
			query: `{
				site {
					siteMetadata {
						title
						description
						siteUrl
						author
					}
				}
			}`,
			feeds: [
				{
					serialize: ({ query: { site, allMarkdownRemark } }) =>
						allMarkdownRemark.edges.map(edge => ({
							...edge.node.frontmatter,
							description: edge.node.excerpt,
							date: edge.node.frontmatter.date,
							author: site.siteMetadata.author,
							url: join(site.siteMetadata.siteUrl, edge.node.fields.slug),
							guid: join(site.siteMetadata.siteUrl, edge.node.fields.slug),
							custom_elements: [{ "content:encoded": edge.node.html }],
						})),

					query: `{
						allMarkdownRemark(
						sort: { order: DESC, fields: [frontmatter___date] },
						) {
							edges {
								node {
									excerpt
									html
									fields { slug }
									frontmatter {
										title
										date
									}
								}
							}
						}
					}`,
					output: "/rss.xml",
					title,
				},
			],
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
		title,
		author: `Mees van Dijk`,
		email: `mees@mees.io`,
		website: `https://mees.io`,
		description,
		siteUrl: process.env.SITE_URL || "",
	},
	plugins,
}
