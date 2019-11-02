import { getLetterMatchCount } from "./index";

describe("> getLetterMatchCount", () => {
    const secretWord = "party";
    it("should return current count when  there are no matching letters", () => {
        const letterMatchCount = getLetterMatchCount( "bones",secretWord);
        expect(letterMatchCount).toBe(0);
    });

    it("should return current count when  there are 3 matching letters", () => {
        const letterMatchCount = getLetterMatchCount( "train", secretWord);
        expect(letterMatchCount).toBe(3);
    });

    it("should return current count when  there are duplicate  matching letters", () => {
        const letterMatchCount = getLetterMatchCount( "parka", secretWord);
        expect(letterMatchCount).toBe(3);
    });
});