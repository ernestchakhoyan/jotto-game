import React from "react";
import { shallow } from "enzyme";
import {
    findByTestAttr,
    storeFactory
} from "../../test-utils/testUtil";
import Input, { UnconnectedInput } from "./Input";

const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    return shallow(<Input store={store} />).dive().dive();
};

describe("> render", () => {

    describe("> word has not been guessed", () => {
        let wrapper;

        beforeEach(function() {
            const initialState = { success: false };
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
        let wrapper;

        beforeEach(function() {
            const initialState = { success: true };
            wrapper = setup(initialState);
        });

        it("should render component without errors", () => {
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1);
        });

        it("should not renders input box", () => {
            const component = findByTestAttr(wrapper, "input-box");
            expect(component.length).toBe(0);
        });

        it("should not renders submit button", () => {
            const component = findByTestAttr(wrapper, "submit-btn");
            expect(component.length).toBe(0);
        });
    });

    describe("> redux props", () => {
        it("should have success piece of state as props", () => {
            const success = true;
            const wrapper = setup({ success });
            const componentProps = wrapper.instance().props.success;
            expect(componentProps).toBe(success);
        });

        it("should `guessWord` action creator as a prop", () => {
            const wrapper = setup();
            const componentProps = wrapper.instance().props.guessWord;
            expect(componentProps).toBeInstanceOf(Function);
        });
    });

    describe("> `guessWord` action creator", () => {
        let wrapper;
        let guessWordMock;
        const guessedWord = "train";

        beforeEach(function() {
            guessWordMock = jest.fn();

            const props = {
                guessWord: guessWordMock
            };

            wrapper = shallow(<UnconnectedInput {...props} />);
            wrapper.setState({ currentGuess: guessedWord });

            const submitBtn = findByTestAttr(wrapper, "submit-btn");
            submitBtn.simulate("click", {
                preventDefault() {
                }
            });

        });

        it("should call action one time on button click", () => {
            const guessWordMockCallsCount = guessWordMock.mock.calls.length;
            expect(guessWordMockCallsCount).toBe(1);
        });

        it("should call `guessWord` with  input value as argument", () => {
            const guessedWordMockArguments = guessWordMock.mock.calls[ 0 ][ 0 ];
            expect(guessedWordMockArguments).toBe(guessedWord);
        });
    });
});

describe("> update", () => {

});