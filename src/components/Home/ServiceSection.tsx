import React, { Component } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Service = () => {
	return (
		<section className="service-area pt-120 pb-130">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-xxl-5 col-lg-6">
						<div
							className="kservice-text mb-50"
							data-aos="fade-right"
							data-aos-duration="1000"
						>
							<h5 className="kservice-text-subtitle mb-15">
								All Categories List
							</h5>
							<h2 className="kservice-text-title mb-40">
								The Services <br />
								We’re Offering
							</h2>
							<p className="kservice-text mb-40">
								Hardware support for Desktops, Laptops, Workstations, and
								All-in-One computers. We ensure efficient & cost-effective
								solutions for all kinds of hardware issues, including chip level
								repairs. With genuine spare parts readily available in stock, we
								offer unmatched repair turn-around time.
							</p>
							{/* <p className="mb-45">
								There are many variations of passages of lorem ipsum available
								but the majority have suffered alteration in some form by
								injected humour.
							</p>
							<div className="kservice-author">
								<div className="kservice-author-img mr-30">
									<img
										src="assets/img/service/service-author.png"
										className="img-fluid"
										alt="author-img"
									/>
								</div>
								<div className="kservice-author-sign">
									<span>Jessica Brown</span>
								</div>
							</div> */}
						</div>
					</div>
					<div className="col-xxl-6 col-lg-6">
						<div
							className="row custom-mar-20"
							data-aos="fade-down"
							data-aos-duration="1000"
						>
							<div className="col-sm-6 custom-pad-20">
								<div className="kservice text-center mb-20">
									<div className="kservice-icon">
										<i>
											<FontAwesomeIcon icon={["far", "hdd"]} />
										</i>
									</div>
									<div className="kservice-content">
										<h5 className="kservice-content-title">
											<Link href="/service-details">
												<a>Servers</a>
											</Link>
										</h5>
									</div>
								</div>
							</div>
							<div className="col-sm-6 custom-pad-20">
								<div className="kservice text-center mb-20">
									<div className="kservice-icon">
										<i>
											<FontAwesomeIcon icon={["fas", "print"]} />
										</i>
									</div>
									<div className="kservice-content">
										<h5 className="kservice-content-title">
											<Link href="/service-details">
												<a>Peripherals</a>
											</Link>
										</h5>
									</div>
								</div>
							</div>
							<div className="col-sm-6 custom-pad-20">
								<div className="kservice text-center mb-20">
									<div className="kservice-icon">
										<i>
											<FontAwesomeIcon icon={["fas", "database"]} />
										</i>
									</div>
									<div className="kservice-content">
										<h5 className="kservice-content-title">
											<Link href="/service-details">
												<a>Data Storage & Backup</a>
											</Link>
										</h5>
									</div>
								</div>
							</div>
							<div className="col-sm-6 custom-pad-20">
								<div className="kservice text-center mb-20">
									<div className="kservice-icon">
										<i>
											<FontAwesomeIcon icon={["fas", "wrench"]} />
										</i>
									</div>
									<div className="kservice-content">
										<h5 className="kservice-content-title">
											<Link href="/service-details">
												<a>It Hardware Repairs</a>
											</Link>
										</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Service
