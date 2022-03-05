import React from "react"
import Header from "../components/Layout/Header/Header"
import Footer from "../components/Layout/Footer/Footer"
import ServiceMain from "../components/Service/ServiceMain"

const ServicePage = () => {
	return (
		<React.Fragment>
			<Header />
			<ServiceMain />
			<Footer />
		</React.Fragment>
	)
}

export default ServicePage
