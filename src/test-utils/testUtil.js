import checkPropTypes from "check-prop-types";

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