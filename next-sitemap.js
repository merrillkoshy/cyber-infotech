module.exports = {
	siteUrl: "https://www.gulfmotorcycles.com",
	changefreq: "daily",
	priority: 0.7,
	sitemapSize: 5000,
	generateRobotsTxt: true,
	exclude: ["/api"],
	// Default transformation function
	transform: (config, url) => {
		return {
			loc: url,
			changefreq: config.changefreq,
			priority: config.priority,
			lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
		}
	},
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				allow: "/",
			},
		],
	},
}
