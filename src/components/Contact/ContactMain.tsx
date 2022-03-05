import React from "react"
import Breadcrumb from "../Common/Breadcrumb"
import Map from "../Home/MapSection"
import Contact from "./ContactSection"

const ContactMain = () => {
	return (
		<main>
			{/* breadcrumb-start */}
			<Breadcrumb pageTitle="Contct" />
			{/* breadcrumb-end */}

			{/* contact-start */}
			<Contact />
			{/* contact-end */}

			{/* map-start */}
			<Map />
			{/* map-end */}
		</main>
	)
}

export default ContactMain
