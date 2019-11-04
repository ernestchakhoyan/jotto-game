import {actionTypes} from "../actions/index";
import successReducer from "./successReducer";

it("should return initial state of 'false' when no action is passed", () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false)
});

it("should return state of 'true' upon receiving an action of type 'CORRECT_GUESS'", () => {
    const newState = successReducer(undefined, {type: actionTypes.CORRECT_GUESS});
    expect(newState).toBe(true);
});