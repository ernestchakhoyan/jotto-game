import { storeFactory } from "./testUtil";
import { guessWord } from "../actions";

describe("> guessWord Action dispatcher", () => {
    const secretWord = "party";
    const unsuccessfulWord = "train";

    describe("> no guessed words", () => {
        let store;
        const initialState = { secretWord };

        beforeEach(function () {
            store = storeFactory(initialState);
        });

        it("should update state correctly fro unsuccessful guess", () => {
            const newState = store.getState();
            store.dispatch(guessWord(unsuccessfulWord));
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [ {
                    guessWord: unsuccessfulWord,
                    letterMatchCount: 3
                } ]
            };

            expect(newState).toEqual(expectedState);
        });
        it("should update state correctly fro successful guess", () => {
            const newState = store.getState();
            store.dispatch(guessWord(secretWord));
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [ {
                    guessWord: secretWord,
                    letterMatchCount: 5
                } ]
            };

            expect(newState).toEqual(expectedState);
        });
    });
    describe("> some guessed words", () => {
        const guessedWord = [ { guessWord: "agile", letterMatchCount: 1 } ];
        const initialState = { guessedWord, secretWord };
        let store;

        beforeEach(function () {
            store = storeFactory(initialState);
        });
        it("should update state correctly fro unsuccessful guess", () => {
            store.dispatch(guessWord());
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success: false,
                guessedWords: [ ...guessedWord, { guessedWord: unsuccessfulWord, letterMatchCount: 3 } ]
            };

            expect(newState).toEqual(expectedState);
        });
        it("should update state correctly fro successful guess", () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.geState();
            const expectedState = {
                secretWord,
                success: true,
                guessedWords: [ ...guessedWord, { guessedWord: secretWord, letterMatchCount: 5 } ]
            };
            expect(newState).toEqual(expectedState);
        });
    });
});
