import React from "react"
import axios from "axios"
import { toast } from "react-toastify"

const Form = () => {
	const sendMail = (e: any) => {
		e.preventDefault()
		const formData = new FormData(e.target),
			formDataObj = Object.fromEntries(formData.entries())
		console.log(formDataObj)

		axios.post("/api/contactUs", formDataObj).then((response) => {
			if (response.status === 200)
				toast("Email Sent !", {
					position: "bottom-center",
					type: "success",
				})
		})
	}
	return (
		<div className="col-xxl-7 col-xl-6 col-lg-6">
			<div className="contact-form">
				<form onSubmit={sendMail} id="contact-form">
					<div className="row">
						<div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
							<input
								name="name"
								className="form-control"
								type="text"
								placeholder="Your Name"
							/>
						</div>
						<div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
							<input
								name="email"
								className="form-control"
								type="email"
								placeholder="Email Adress"
							/>
						</div>
						<div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
							<input
								name="phone"
								className="form-control"
								type="text"
								placeholder="Phone"
							/>
						</div>
						<div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
							<input
								name="subject"
								className="form-control"
								type="text"
								placeholder="Subject"
							/>
						</div>
						<div className="col-xxl-12 col-xl-12 col-lg-12 mb-20">
							<textarea
								className="form-control"
								placeholder="Write Massage"
								name="subject"
							></textarea>
						</div>
						<div className="col-xxl-12 col-xl-12 mb-20">
							<button type="submit" className="theme-btn border-btn">
								Send a message
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
export default Form
