import React from "react";
import {shallow} from "enzyme";
import { storeFactory } from "../../test-utils/testUtil";
import Input from "./Input";


const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    return  shallow(<Input store={store}/>).dive().dive();
};

describe("> render", () => {

    describe("> word has not been guessed", () => {
        it("should render component without errors", () => {

        });

        it("should renders input box", () => {

        });

        it("should renders submit button", () => {

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