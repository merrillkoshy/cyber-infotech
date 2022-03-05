import React from "react"
import { shallow } from "enzyme"
import Index from "../pages/index"

describe("App render", () => {
	it("renders index", () => {
		const wrapper = shallow(<Index />)
		expect(wrapper.exists()).toBeTruthy()
	})
})
