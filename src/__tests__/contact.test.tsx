import React from "react"
import { shallow } from "enzyme"
import ContactPage from "../pages/contact"

describe("App render", () => {
	it("renders contact", () => {
		const wrapper = shallow(<ContactPage />)
		expect(wrapper.exists()).toBeTruthy()
	})
})
