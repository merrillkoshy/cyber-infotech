import React, { Component } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import data from "../../data"
import ServiceData from "../../data"
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core"

const ServiceThree = () => {
	return (
		<section className="service-2 pt-120 pb-90">
			<div className="container">
				<div className="row">
					{data &&
						data?.map((dt, i) => {
							return (
								<div key={i} className="col-xl-3 col-lg-3 col-sm-6">
									<div
										className="kservice-2 mb-30 wow fadeInUp"
										data-wow-duration=".3s"
									>
										<div className="kservice-text-2">
											<span>Services</span>
											<h4 className="kservice-title-2">
												<Link href="/service-details">
													<a>{dt.name}</a>
												</Link>
											</h4>
											<i  className="service">
												<FontAwesomeIcon
													icon={[
														dt.icontype as IconPrefix,
														dt.iconname as IconName,
													]}
												/>
											</i>
										</div>
									</div>
								</div>
							)
						})}
				</div>
			</div>
		</section>
	)
}

export default ServiceThree
