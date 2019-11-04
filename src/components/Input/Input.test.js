import React from "react";
import {shallow} from "enzyme";
import { findByTestAttr, storeFactory } from "../../test-utils/testUtil";
import Input from "./Input";


const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    return  shallow(<Input store={store}/>).dive().dive();
};

describe("> render", () => {

    describe("> word has not been guessed", () => {
        let wrapper;

        beforeEach(function () {
            const  initialState = {success: false};
            wrapper = setup(initialState);
        });

        it("should render component without errors", () => {
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1);
        });

        it("should renders input box", () => {
            const component = findByTestAttr(wrapper, "input-box");
            expect(component.length).toBe(1);
        });

        it("should renders submit button", () => {
            const component = findByTestAttr(wrapper, "submit-btn");
            expect(component.length).toBe(1);
        });
    });

    describe("> word has been guessed", () => {

        it("should not renders input box", () => {

        });

        it("should not renders submit button", () => {

        });
    });
});

describe("> update", () => {

});