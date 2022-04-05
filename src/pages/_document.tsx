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
					{/* Global Site Tag (gtag.js) - Google Analytics */}
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=G-7FLXDW4M2Y`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7FLXDW4M2Y');
          `,
						}}
					/>
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
