import React from "react";
import  { shallow } from "enzyme";

import Congrats from "./Congrats";

import { checkProps, findByTestAttr } from "../../test-utils/testUtil";

const defaultPropTypes = {
    success: false
};

const setup = (props) => {
    const setupProps = {...defaultPropTypes, ...props};
    return shallow(<Congrats {...setupProps} />);
};

it("should render component", () => {
    const wrapper = setup({ success: false });
    const congratsComponent = findByTestAttr(wrapper, "congrats-component");
    expect(congratsComponent.length).toBe(1);
});

it("renders no text when `success` prop is false", () => {
    const wrapper = setup({ success: false });
    const noTextComponent = findByTestAttr(wrapper, "congrats-no-message");
    expect(noTextComponent.text()).toBe("");
});

it("renders non-empty congrats message when `success` prop is true", () => {
    const wrapper = setup({ success: true });
    const noTextComponent = findByTestAttr(wrapper, "congrats-message");
    expect(noTextComponent.text().length).not.toBe(0);
});

it("should not throw an error with expected props", () => {
    const expectedProps = { success: false };
    checkProps(Congrats, expectedProps);
});