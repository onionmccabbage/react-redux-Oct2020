import React, { useState } from "react";
import PropTypes from "prop-types";

function AddCustomer(props) {
  const initialFormState = { firstName: "", lastName: "", emailAddress: "" };
  const [customer, setCustomer] = useState(initialFormState);
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setCustomer({ ...customer, [name]: value });
  };

  return (
    <form
      className="customerMaintenance"
      onSubmit={(event) => {
        event.preventDefault();
        props.onSubmitHandler(customer);
        //setUser(initialFormState);
      }}
    >
      <label for="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={customer.firstName}
        onChange={handleInputChange}
        required
      />
      <label for="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={customer.lastName}
        onChange={handleInputChange}
        required
      />
      <label for="emailAddress">Email Address</label>
      <input
        type="email"
        id="emailAddress"
        name="emailAddress"
        value={customer.emailAddress}
        onChange={handleInputChange}
        required
      />
      <button className="button">Add new Customer</button>
    </form>
  );
}

AddCustomer.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
};

export default AddCustomer;
