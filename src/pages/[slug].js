import React from "react"
import Header from "../components/Layout/Header/Header"
import Footer from "../components/Layout/Footer/Footer"

class BlogDetails extends React.Component {
	static getInitialProps({ store }) {}

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<React.Fragment>
				<Header />
				<main>
					{/* Blog Main */}
					<></>
					{/* Blog Main End */}
				</main>
				<Footer />
			</React.Fragment>
		)
	}
}

export default BlogDetails
