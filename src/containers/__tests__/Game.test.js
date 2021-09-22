import React from "react";
import { shallow } from "enzyme";
import Game from "../Game/Game";
import Grid from "../../components/Grid";
import Span from "../../components/Span";

let component;

beforeEach(() => {
	component = shallow(<Game />);
});

it("displays the grid", () => {
	expect(component.find(Grid).length).toEqual(1);
});

it("displays the two spans, button and info", () => {
	expect(component.find(Span).length).toEqual(2);
});
