import React from "react";
import Enzyme , {shallow} from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Congrats from "./Congrats";
import { findByTestAttr } from "../test-utils/testUtil";
Enzyme.configure({
    adapter: new EnzymeAdapter()
});

const setup = (props) => {
    return shallow(<Congrats {...props}/>)
};

it("> should render component" ,() => {
    const wrapper = setup();
    const congratsComponent = findByTestAttr(wrapper, "congrats-component");
    expect(congratsComponent.length).toBe(1);
});

it("> renders no text when `success` prop is false", () => {
    const wrapper = setup({success: false});
    const noTextComponent = findByTestAttr(wrapper, "congrats-no-message");
    expect(noTextComponent.text()).toBe("");
});

it("> renders non-empty congrats message when `success` prop is true", () => {
    const wrapper = setup({success: true});
    const noTextComponent = findByTestAttr(wrapper, "congrats-message");
    expect(noTextComponent.text().length).not.toBe(0);
});