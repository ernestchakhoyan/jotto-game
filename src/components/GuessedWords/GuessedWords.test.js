import React from "react";
import {shallow} from "enzyme";
import { checkProps, findByTestAttr } from "../../test-utils/testUtil";
import "./GuessedWords";
import GuessedWords from "./GuessedWords";

const defaultProps = {
    guessedWords: [{guessedWord: "train", letterMatchCount: 3}]
};

const setup = (props = {}, state = null) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<GuessedWords {...setupProps}/>)
};

it("should not throw an error on checking props", () => {
    checkProps(GuessedWords, defaultProps)
});

describe("> If there are no words guessed", () => {
    let wrapper;

    beforeEach(() =>{
        wrapper = setup({guessedWords: []});
    });
    it("should renders without error", () => {
        const component = findByTestAttr(wrapper, "component-guessed-word");
        expect(component.length).toBe(1);
    });

    it("should renders instructions to guess a word", () => {
        const instructions = findByTestAttr(wrapper, "guessed-instructions");
        expect(instructions.text().length).not.toBe(0);
    });
});

describe("> If there are words guessed", () => {
    
});