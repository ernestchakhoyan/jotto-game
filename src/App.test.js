import React from "react";
import {shallow} from "enzyme";
import { findByTestAttr, storeFactory } from "./test-utils/testUtil";
import App from "./App";


const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return  shallow(<App store={store}/>).dive().dive();
};

describe("> render", () => {

  describe("> redux props", () => {
    it("should have `Success` as prop", () => {
      const success = true;
      const wrapper = setup({success});
      const componentProps = wrapper.instance().props.success;
      expect(componentProps).toBe(success);
    });

    it("should have `Guessed Words` as prop", () => {
      const guessedWords=[{guessedWord: "party", letterMatchCount: 5}];
      const wrapper = setup({guessedWords});
      const componentProps = wrapper.instance().props.guessedWords;
      expect(componentProps).toBe(guessedWords);
    });

    it("should have `Secret Word` as prop ", () => {
      const secretWord = "party";
      const wrapper = setup({secretWord});
      const componentProps = wrapper.instance().props.secretWord;
      expect(componentProps).toBe(secretWord);
    });

    it("should have `guessWord` action creator as a prop", () => {
      const wrapper = setup();
      const componentProps = wrapper.instance().props.guessWord;
      expect(componentProps).toBeInstanceOf(Function);
    });
  });
});