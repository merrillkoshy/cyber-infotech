import React, { Component } from "react"
import About from "./AboutSection"
import Cta from "./CtaSection"
import Service from "./ServiceSection"
import dynamic from "next/dynamic"
const HomeSlider = dynamic(
	() => import("../Elements/Slider/HomeSliderSection"),
	{
		ssr: false,
	}
)
const Testimonial = dynamic(
	() => import("../Elements/Testimonials/TestimonialsSection"),
	{
		ssr: false,
	}
)
const Brand = dynamic(() => import("../Elements/Brand/BrandSection"), {
	ssr: false,
})
import Trust from "./TrustSection"
import Quality from "./QualitySection"
import Map from "./MapSection"
import Project from "./ProjectSection"

class HomeMain extends Component {
	render() {
		return (
			<main>
				{/* slider-start */}
				<HomeSlider />
				{/* slider-end */}

				{/* service-start */}
				<Service />
				{/* service-end */}

				{/* cta-start */}
				<Cta />
				{/* cta-end */}

				{/* about-start */}
				{/* <About /> */}
				{/* about-end */}

				{/* project-start */}
				{/* <Project /> */}
				{/* project-end */}

				{/* testimonial-start */}
				{/* <Testimonial /> */}
				{/* testimonial-end */}

				{/* brand-start */}
				{/* <Brand /> */}
				{/* brand-end */}

				{/* trust-start */}
				{/* <Trust /> */}
				{/* trust-end */}

				{/* quality-start */}
				{/* <Quality /> */}
				{/* quality-end */}

				{/* map-start */}
				{/* <Map /> */}
				{/* map-end */}
			</main>
		)
	}
}

export default HomeMain
