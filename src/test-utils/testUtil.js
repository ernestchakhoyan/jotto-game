import checkPropTypes from "check-prop-types";
import {createStore} from "redux";
import rootReducer from "../reducers"

export const findByTestAttr = (wrapper, attr) => {
    return wrapper.find(`[data-test="${attr}"]`);
};

export const checkProps = (Component, expectedProps) => {
    const propsError = checkPropTypes(
        Component.propTypes,
        expectedProps,
        "props",
        Component.name);
    expect(propsError).toBeUndefined();
};

export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState);
};