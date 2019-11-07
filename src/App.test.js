import React from "react";
import { shallow } from "enzyme";
import { storeFactory } from "./test-utils/testUtil";
import App, { UnconnectedApp } from "./App";
import { getSecretWord } from "./actions";

const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    return shallow(<App store={store} />).dive().dive();
};

describe("> render", () => {

    describe("> redux props", () => {
        it("should have `Success` as prop", () => {
            const success = true;
            const wrapper = setup({ success });
            const componentProps = wrapper.instance().props.success;
            expect(componentProps).toBe(success);
        });

        it("should have `Guessed Words` as prop", () => {
            const guessedWords = [ { guessedWord: "party", letterMatchCount: 5 } ];
            const wrapper = setup({ guessedWords });
            const componentProps = wrapper.instance().props.guessedWords;
            expect(componentProps).toBe(guessedWords);
        });

        it("should have `Secret Word` as prop ", () => {
            const secretWord = "party";
            const wrapper = setup({ secretWord });
            const componentProps = wrapper.instance().props.secretWord;
            expect(componentProps).toBe(secretWord);
        });

        it("should have `getSecretWord` action creator as a prop", () => {
            const wrapper = setup();
            const componentProps = wrapper.instance().props.getSecretWord;
            expect(componentProps).toBeInstanceOf(Function);
        });

        it("should run `getSecretWord` one time in ComponentDidMount", () => {
          const getSecretWordMock = jest.fn();
          const props = {
            getSecretWord:getSecretWordMock,
            success: false,
            guessedWords: []
          };
            const wrapper = shallow(<UnconnectedApp {...props}/>);

            wrapper.instance().componentDidMount();
            const getSecretWordMockCallsCount = getSecretWordMock.mock.calls.length;
            expect(getSecretWordMockCallsCount).toBe(1);
        });
    });
});