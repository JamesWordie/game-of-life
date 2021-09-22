import React from "react";
import Grid from "../Grid";
import { shallow } from "enzyme";

let component;
beforeEach(() => {
	component = shallow(<Grid grid={[[], []]} />);
});

describe("displaying the grid and contents", () => {
	it("displays the grid with 200 cells", () => {
		expect(component.find("div").length).toEqual(2);
	});
});
