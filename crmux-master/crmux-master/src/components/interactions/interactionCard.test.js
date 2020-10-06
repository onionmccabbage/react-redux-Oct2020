import React from "react";
import { shallow } from "enzyme";
import InteractionCard from "./InteractionCard";
import { getWrapperByTestAttribute } from "../../utils/testHelper";

// Setup mock Test data.
const interaction = {
  comments: "",
  id: "1sdfdsfgd",
  datetime: Date(),
};
const mockHandler = () => {};

// Setup test component.
const getComponent = (mode) => {
  const component = shallow(
    <InteractionCard
      mode={mode}
      interaction={interaction}
      deleteInteractionHandler={mockHandler}
      cancelInteractionHandler={mockHandler}
    />
  );
  return component;
};

describe("InteractionCard Component", () => {
  it("It should render without errors in add or edit mode", () => {
    const component = getComponent("add");
    const wrapper = getWrapperByTestAttribute(
      component,
      "interactionCardTextarea"
    );
    expect(wrapper.length).toBe(1);
  });

  it("It should render without errors when not in add or edit mode", () => {
    const component = getComponent("delete");
    const wrapper = getWrapperByTestAttribute(component, "iconButtons");
    expect(wrapper.length).toBe(1);
  });

  it("It should always render the comments", () => {
    const component = getComponent("delete");
    const wrapper = getWrapperByTestAttribute(component, "example-twitter");
    expect(wrapper.length).toBe(1);
  });
});
