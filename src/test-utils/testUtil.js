import checkPropTypes from "check-prop-types";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers"
import { middlewares } from "../store/configureStore";

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
    const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleWare(rootReducer, initialState);
};