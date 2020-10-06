import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function UpdateCustomer(props) {
  const [customer, setCustomer] = useState(props.customer);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setCustomer({ ...customer, [name]: value });
  };

  useEffect(() => {
    return () => {
      setCustomer(props.customer);
    };
  }, []);
  return (
    <form
      className="customerMaintenance"
      onSubmit={(event) => {
        event.preventDefault();
        props.onSubmitHandler(customer);
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
      <button className="button">Update Customer</button>
    </form>
  );
}

UpdateCustomer.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
  customer: PropTypes.object.isRequired,
};

export default UpdateCustomer;
