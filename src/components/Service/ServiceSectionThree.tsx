import React, { Component } from "react"
import Link from "next/link"

class ServiceThree extends Component {
	render() {
		return (
			<section className="service-2 pt-120 pb-90">
				<div className="container">
					<div className="row">
						<div className="col-xl-3 col-lg-3 col-sm-6">
							<div
								className="kservice-2 mb-30 wow fadeInUp"
								data-wow-duration=".3s"
							>
								<div className="kservice-text-2">
									<span>Services</span>
									<h4 className="kservice-title-2">
										<Link href="/service-details">
											<a>Server</a>
										</Link>
									</h4>
									<i>
										<img
											src="assets/img/icon/service-icon-3.png"
											className="img-fluid"
											alt="cta-icon"
										/>
									</i>
								</div>
								{/* <div className="kservice-img-2">
									<img
										src="assets/img/service/service-img-1.jpg"
										alt="service-img"
									/>
								</div> */}
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-sm-6">
							<div
								className="kservice-2 mb-30 wow fadeInUp"
								data-wow-duration=".6s"
							>
								<div className="kservice-text-2">
									<span>Services</span>
									<h4 className="kservice-title-2">
										<Link href="/service-details">
											<a>Printers</a>
										</Link>
									</h4>
									<i>
										<img
											src="assets/img/icon/service-icon-4.png"
											className="img-fluid"
											alt="cta-icon"
										/>
									</i>
								</div>
								{/* <div className="kservice-img-2">
									<img
										src="assets/img/service/service-img-2.jpg"
										className="img-fluid"
										alt="service-img"
									/>
								</div> */}
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-sm-6">
							<div
								className="kservice-2 mb-30 wow fadeInUp"
								data-wow-duration=".9s"
							>
								<div className="kservice-text-2">
									<span>Services</span>
									<h4 className="kservice-title-2">
										<Link href="/service-details">
											<a> IP & Pabx Telephones & configuration</a>
										</Link>
									</h4>
									<i>
										<img
											src="assets/img/icon/service-icon-5.png"
											className="img-fluid"
											alt="cta-icon"
										/>
									</i>
								</div>
								{/* <div className="kservice-img-2">
									<img
										src="assets/img/service/service-img-3.jpg"
										className="img-fluid"
										alt="service-img"
									/>
								</div> */}
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-sm-6">
							<div
								className="kservice-2 mb-30 wow fadeInUp"
								data-wow-duration="1s"
							>
								<div className="kservice-text-2">
									<span>Services</span>
									<h4 className="kservice-title-2">
										<Link href="/service-details">
											<a>Networking trouble shooting</a>
										</Link>
									</h4>
									<i>
										<img
											src="assets/img/icon/about-icon-2.png"
											className="img-fluid"
											alt="cta-icon"
										/>
									</i>
								</div>
								{/* <div className="kservice-img-2">
									<img
										src="assets/img/service/service-img-4.jpg"
										className="img-fluid"
										alt="service-img"
									/>
								</div> */}
							</div>
						</div>
					</div>
					<ul>
						<li>• IT Support </li>
						<li>• ups</li>
						<li>• projector</li>
						<li>• laptop services</li>
						<li>• Desktop Assembly & Service</li>
						<li>• Mobile phones & Accessories</li>
						<li>• Data backup</li>
						<li>• IT Utilities</li>
						<li>• Networking infrastructure</li>
						<li>• Antivirus & Protection </li>
						<li>• Firewall </li>
						<li>• IT Accessories</li>
						<li>• Scanners</li>
						<li>• Biometric Devices</li>
					</ul>
				</div>
			</section>
		)
	}
}

export default ServiceThree
