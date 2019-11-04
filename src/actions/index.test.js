import { correctGuess, actionTypes } from "./index";

describe("> Correct guess actions tests", () => {
    it("should return an  object of action", () => {
        const action = correctGuess();
        expect(action).toEqual({
            type: actionTypes.CORRECT_GUESS
        });
    });
});