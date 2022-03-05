import React from "react"
import { shallow } from "enzyme"
import AboutPage from "../pages/about"

describe("App render", () => {
	it("renders index", () => {
		const wrapper = shallow(<AboutPage />)
		expect(wrapper.exists()).toBeTruthy()
	})
})
