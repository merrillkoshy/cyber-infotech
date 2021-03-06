import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const BurgerMenus = ({ setMenuOpen, menuOpen }) => {
	const [home, setHome] = useState(false)
	const [courses, setcourses] = useState(false)
	const [pages, setPages] = useState(false)
	const [project, setProject] = useState(false)

	const router = useRouter()
	const [path, setPath] = useState("")
	useEffect(() => {
		setPath(router.pathname)
	}, [router])

	const openMobileMenu = (menu) => {
		if (menu == "home") {
			setHome(!home)
			setcourses(false)
			setPages(false)
			setProject(false)
		} else if (menu == "courses") {
			setHome(false)
			setcourses(!courses)
			setPages(false)
			setProject(false)
		} else if (menu == "pages") {
			setHome(false)
			setcourses(false)
			setProject(false)
			setPages(!pages)
		} else if (menu == "project") {
			setHome(false)
			setcourses(false)
			setPages(false)
			setProject(!project)
		}
	}

	return (
		<div className="fix">
			<div className={menuOpen ? "side-info info-open" : "side-info"}>
				<button className="side-info-close" onClick={() => setMenuOpen(false)}>
					<i>
						<FontAwesomeIcon icon={["fas", "times"]} />
					</i>
				</button>
				<div className="side-info-content">
					<div className="mm-menu">
						<ul>
							<li
							// className={ home ? "has-droupdown active" : "has-droupdown" }
							>
								<a
								// onClick={() => {
								// 	openMobileMenu("home")
								// }}
								>
									Home
								</a>
								{/* <ul className={home ? "sub-menu active" : "sub-menu"}>
									<li>
										<Link href="/">
											<a>Home Style 1</a>
										</Link>
									</li>
									<li>
										<Link href="/home-2">
											<a>Home Style 2</a>
										</Link>
									</li>
								</ul> */}
							</li>
							<li>
								<Link href="/about">
									<a>About</a>
								</Link>
							</li>
							<li
							// className={courses ? "has-droupdown active" : "has-droupdown"}
							>
								<a
								// onClick={() => {
								// 	openMobileMenu("courses")
								// }}
								>
									Services
								</a>
								{/* <ul className={courses ? "sub-menu active" : "sub-menu"}>
									<li>
										<Link href="/service">
											<a>Services</a>
										</Link>
									</li>
									<li>
										<Link href="/service-details">
											<a>Services Details</a>
										</Link>
									</li>
								</ul> */}
							</li>
							{/* <li
								className={project ? "has-droupdown active" : "has-droupdown"}
							>
								<a
									onClick={() => {
										openMobileMenu("project")
									}}
								>
									Projects
								</a>
								<ul className={project ? "sub-menu active" : "sub-menu"}>
									<li>
										<Link href="/project">
											<a>Projects</a>
										</Link>
									</li>
									<li>
										<Link href="/project-details">
											<a>Projects Details</a>
										</Link>
									</li>
								</ul>
							</li>
							<li className={pages ? "has-droupdown active" : "has-droupdown"}>
								<a
									onClick={() => {
										openMobileMenu("pages")
									}}
								>
									Pages
								</a>
								<ul className={pages ? "sub-menu active" : "sub-menu"}>
									<li>
										<Link href="/pricing">
											<a>Pricing</a>
										</Link>
									</li>
									<li>
										<Link href="/faq">
											<a>Faq</a>
										</Link>
									</li>
								</ul>
							</li> */}
							<li>
								<Link href="/contact">
									<a>Contact</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className="contact-infos mb-30">
						<div className="contact-list mb-30">
							<h4>Contact Info</h4>
							<ul>
								<li>
									<img
										src="assets/img/icon/footer-icon-1.png"
										className="img-fluid"
										alt="icon-img"
									/>
									<a href="mailto:info@sycho24.com">
										info@cyberinfotechuae.com
									</a>
								</li>
								<li>
									<img
										src="assets/img/icon/footer-icon-2.png"
										className="img-fluid"
										alt="icon-img"
									/>
									<a href="tel:971521954262">+971 52 195 4262</a>
								</li>
							</ul>
							<div className="sidebar__menu--social">
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
				</div>
			</div>
		</div>
	)
}

export default BurgerMenus
