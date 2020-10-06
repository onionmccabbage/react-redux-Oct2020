import checkPropTypes from "check-prop-types";

export const getWrapperByTestAttribute = (component, attribute) => {
  const wrapper = component.find(`[data-test='${attribute}']`);
  return wrapper;
};

// component's propTypes,
// the expected props,
// what we are testing and
// the component name
export const getPropsErrors = (component, expectedProps) => {
  const propsErrors = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );

  return propsErrors;
};
