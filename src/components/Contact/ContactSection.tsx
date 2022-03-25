import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Form from "./Form"

const Contact = () => {
	return (
		<section className="contact-area pt-120 pb-80 fix">
			<div className="container">
				<div className="row">
					<div className="col-xxl-5 col-xl-6 col-lg-6">
						<div className="section-title-wrapper mb-15">
							<h5 className="section-subtitle mb-20">contact with us</h5>
							<h2 className="section-title">Speak with our consultant</h2>
						</div>
						<div className="contact-info mr-50 mr-xs-0  mr-md-0">
							<div className="single-contact-info d-flex align-items-center">
								<div className="contact-info-icon">
									<a href="#">
										<i>
											<FontAwesomeIcon icon={["fas", "comments"]} />
										</i>
									</a>
								</div>
								<div className="contact-info-text mt-10">
									<span>Call Us</span>
									<h5>
										<a href="tell:971521954262">+971 52 195 4262</a>
									</h5>
								</div>
							</div>
							<div className="single-contact-info d-flex align-items-center">
								<div className="contact-info-icon">
									<a href="#">
										<i>
											<FontAwesomeIcon icon={["fas", "envelope"]} />
										</i>
									</a>
								</div>
								<div className="contact-info-text mt-10">
									<span>send email</span>
									<h5>
										<a href="mailto:info@cyberinfotechuae.com">
											info@cyberinfotechuae.com
										</a>{" "}
									</h5>
								</div>
							</div>
							{/* <div className="single-contact-info d-flex align-items-center">
								<div className="contact-info-icon">
									<a href="#">
										<i>
											<FontAwesomeIcon icon={["fas", "map-marker-alt"]} />
										</i>
									</a>
								</div>
								<div className="contact-info-text mt-10">
									<span>visit office</span>
									<h5>
										<a href="#">86 Road Broklyn Street, New York</a>
									</h5>
								</div>
							</div> */}
						</div>
					</div>
					<Form />
				</div>
			</div>
		</section>
	)
}

export default Contact
