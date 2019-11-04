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

        it("should update state correctly for unsuccessful guess", () => {
            store.dispatch(guessWord(unsuccessfulWord));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [ {
                    guessedWord: unsuccessfulWord,
                    letterMatchCount: 3
                } ]
            };

            expect(newState).toEqual(expectedState);
        });
        it("should update state correctly for successful guess", () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: true,
                guessedWords: [ {
                    guessedWord: secretWord,
                    letterMatchCount: 5
                } ]
            };

            expect(newState).toEqual(expectedState);
        });
    });
    describe("> some guessed words", () => {
        const guessedWords = [ { guessWord: "agile", letterMatchCount: 1 } ];
        const initialState = { guessedWords, secretWord };
        let store;

        beforeEach(function () {
            store = storeFactory(initialState);
        });
        it("should update state correctly for unsuccessful guess", () => {
            store.dispatch(guessWord(unsuccessfulWord));
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success: false,
                guessedWords: [ ...guessedWords, { guessedWord: unsuccessfulWord, letterMatchCount: 3 } ]
            };

            expect(newState).toEqual(expectedState);
        });
        it("should update state correctly for successful guess", () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success: true,
                guessedWords: [ ...guessedWords, { guessedWord: secretWord, letterMatchCount: 5 } ]
            };
            expect(newState).toEqual(expectedState);
        });
    });
});
