import React from "react";
import { shallow } from "enzyme";
import InteractionCard from "./InteractionCard";
import { getPropsErrors } from "../../utils/testHelper";

// Setup mock Test data.
const interaction = {
  comments: "",
  id: "sdfdwfd",
  datetime: Date(),
};
const mockHandler = () => {};

describe("Interaction Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        interaction: interaction,
        mode: "add",
        deleteInteractionHandler: mockHandler,
        saveInteractionHandler: mockHandler,
        cancelInteractionHandler: mockHandler,
        editInteractionHandler: mockHandler,
      };

      expect(getPropsErrors(InteractionCard, expectedProps)).toBeUndefined();
    });
  });
});
