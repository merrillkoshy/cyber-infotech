import React from "react"
import Header from "../components/Layout/Header/Header"
import Footer from "../components/Layout/Footer/Footer"
import ServiceDetailsMain from "../components/ServiceDetails/ServiceDetailsMain"

const ServiceDetailsPage = () => {
	return (
		<React.Fragment>
			<Header />
			<ServiceDetailsMain />
			<Footer />
		</React.Fragment>
	)
}

export default ServiceDetailsPage
