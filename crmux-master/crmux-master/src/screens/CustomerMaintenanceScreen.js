import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  customerUpdate,
  customerAdd,
  customerGet,
} from "../redux/actions/customerAction";
import AddCustomer from "../components/customer/AddCustomer";
import { useHistory } from "react-router-dom";
import UpdateCustomer from "../components/customer/UpdateCustomer";

function CustomerMaintenanceScreen(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const history = useHistory();
  const { customer } = state.customer;
  // Get the customerId from the query string parameter.
  const customerId = new URLSearchParams(props.location.search).get(
    "customerId"
  );

  useEffect(() => {
    if (customerId) {
      dispatch(customerGet(customerId));
    }

    return () => {};
  }, []);

  const onNewCustomerSubmitHandler = (newCustomer) => {
    dispatch(customerAdd(newCustomer)).then(history.push("/customersscreen"));
  };

  const onCustomerUpdateHandler = (customer) => {
    dispatch(customerUpdate(customer)).then(history.push("/customersscreen"));
  };

  if (customerId == "" || !customerId) {
    return (
      <AddCustomer onSubmitHandler={onNewCustomerSubmitHandler}></AddCustomer>
    );
  } else {
    return (
      <UpdateCustomer
        onSubmitHandler={onCustomerUpdateHandler}
        customer={customer}
      ></UpdateCustomer>
    );
  }
}

export default CustomerMaintenanceScreen;
