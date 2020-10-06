import React from "react";
import renderer from "react-test-renderer";
import UpdateCustomer from "./UpdateCustomer";

describe("The Customer Update component", () => {
  it("renders as expected", () => {
    const customer = {
      firstName: "John",
      lastName: "Wick",
      emailAddress: "john.wick@continental.com",
    };
    const callback = () => {};
    const tree = renderer
      .create(
        <UpdateCustomer
          onSubmitHandler={callback}
          customer={customer}
        ></UpdateCustomer>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
