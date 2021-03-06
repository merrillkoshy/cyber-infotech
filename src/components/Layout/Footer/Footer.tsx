import React from "react"
import FooterBottom from "./FooterBottom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const Footer = () => {
	return (
		<footer className="pt-95 position-relative">
			<div
				className="common-shape-wrapper wow slideInRight animated"
				data-wow-delay="0ms"
				data-wow-duration="1500ms"
			>
				<div
					className="common-shape-inner wow slideInRight animated"
					data-wow-delay="0ms"
					data-wow-duration="1500ms"
				></div>
			</div>
			<div className="footer-area pb-60">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-sm-6">
							<div className="widget mb-30">
								<div className="footer-logo mb-25">
									<Link href="/">
										<a>
											<img
												src="assets/img/logo/logo-white.png"
												className="img-fluid"
												alt="footer-logo"
											/>
										</a>
									</Link>
								</div>
								<p className="mb-20 pr-35">
									We specialize in understanding your company’s IT requirement
									and providing customized solutions based on the need of the
									customer.
								</p>
								<div className="footer-social">
									<a href="#" target="_blank">
										<i>
											<FontAwesomeIcon icon={["fab", "twitter"]} />
										</i>
									</a>
									<a href="#" target="_blank">
										<i>
											<FontAwesomeIcon icon={["fab", "facebook"]} />
										</i>
									</a>
									<a href="#" target="_blank">
										<i>
											<FontAwesomeIcon icon={["fab", "pinterest-p"]} />
										</i>
									</a>
									<a href="#" target="_blank">
										<i>
											<FontAwesomeIcon icon={["fab", "instagram"]} />
										</i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-sm-6">
							<div className="widget mb-30">
								<h4 className="widget-title mb-35">Links</h4>
								<ul>
									<li>
										<Link href="/service">
											<a>Our Services</a>
										</Link>
									</li>
									{/* <li>
										<Link href="/project">
											<a>Our Portfolio</a>
										</Link>
									</li> */}
									<li>
										<Link href="/contact">
											<a>Contact</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						{/* <div className="col-lg-3 col-sm-6">
							<div className="widget widget-contact mb-30">
								<h4 className="widget-title mb-35">Contact</h4>
								<ul>
									<li className="pb-10">
										86 Road Broklyn Street, 600 <br />
										New York, USA
									</li>
									<li>
										<img
											src="assets/img/icon/footer-icon-1.png"
											className="img-fluid"
											alt="icon-img"
										/>
										<a href="mailto:info@cyberinfotechuae.com">
											info@cyberinfotechuae.com
										</a>
									</li>
									<li>
										<img
											src="assets/img/icon/footer-icon-2.png"
											className="img-fluid"
											alt="icon-img"
										/>
										<a href="tel:971521954262">971 52 195 4262</a>
									</li>
								</ul>
							</div>
						</div> */}
					</div>
				</div>
			</div>
			<FooterBottom />
		</footer>
	)
}

export default Footer
