import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
	render() {
		const localBusinessStructuredData = {
			"@context": "https://schema.org",
			"@type": "ComputerStore",
			name: "Cyber Infotech",
			address: {
				"@type": "PostalAddress",
				streetAddress: "Dubai, UAE",
				addressLocality: "Dubai",
				addressRegion: "Dubai",
				postalCode: "",
			},
			image: "https://www.cyberinfotechuae.com/assets/img/logo/logo-white.png",
			email: "info@cyberinfotechuae.com",
			telePhone: "+971521954262",
			url: "https://www.cyberinfotechuae.com",
			openingHours: "Mo,Tu,We,Th,Fr,Sa 08:00-18:00",
			openingHoursSpecification: [
				{
					"@type": "OpeningHoursSpecification",
					dayOfWeek: [
						"Monday",
						"Tuesday",
						"Wednesday",
						"Thursday",
						"Friday",
						"Saturday",
					],
					opens: "08:00",
					closes: "18:00",
				},
			],
			priceRange: "$",
		}

		return (
			<Html lang="en">
				<Head>
					<link
						rel="apple-touch-icon"
						sizes="57x57"
						href="/assets/favicons/apple-icon-57x57.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="60x60"
						href="/assets/favicons/apple-icon-60x60.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="72x72"
						href="/assets/favicons/apple-icon-72x72.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="76x76"
						href="/assets/favicons/apple-icon-76x76.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="114x114"
						href="/assets/favicons/apple-icon-114x114.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="120x120"
						href="/assets/favicons/apple-icon-120x120.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="144x144"
						href="/assets/favicons/apple-icon-144x144.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="152x152"
						href="/assets/favicons/apple-icon-152x152.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/assets/favicons/apple-icon-180x180.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="192x192"
						href="/assets/favicons/android-icon-192x192.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/assets/favicons/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="96x96"
						href="/assets/favicons/favicon-96x96.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/assets/favicons/favicon-16x16.png"
					/>
					<link rel="manifest" href="/assets/favicons/manifest.json" />
					<meta name="msapplication-TileColor" content="#ffffff" />
					<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
					<meta name="theme-color" content="#0c5957" />
				</Head>
				<body>
					<Main />
					<NextScript />
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify(localBusinessStructuredData),
						}}
					/>
				</body>
			</Html>
		)
	}
}

export default MyDocument
