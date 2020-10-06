import axios from "axios";
import { CUSTOMERS_URI } from "../utils/constants";



export const deleteCustomer = async (id) => {
  var response = await axios.delete(CUSTOMERS_URI + id);
  return response.data;
};

export const updateCustomer = async (customer) => {
  var response = await axios.put(CUSTOMERS_URI, customer);
  return response.data;
};

export const addCustomer = async (customer) => {
  var response = await axios.post(CUSTOMERS_URI, customer);
  return response.data;
};

export const getCust = async (id) => {
  var data = await axios.get(CUSTOMERS_URI + id);
  return data.data;
};

//export const get = getCustomer();

const getCustomers = () => {
  let cancel;

  return async (query) => {
    if (cancel) {
      // Cancel the previous request before making a new request
      cancel.cancel();
    }
    // Create a new CancelToken
    cancel = axios.CancelToken.source();
    try {
      const {
        data,
      } = await axios.get(
        "http://localhost:8080/api/customer/search/" + query,
        { cancelToken: cancel.token }
      );

      return data;
    } catch (error) {
      if (axios.isCancel(error)) {
        // Handle if request was cancelled
        console.log("Request canceled", error.message);
      } else {
        // Handle usual errors
        console.log("Something went wrong: ", error.message);
      }
    }
  };
};

export const search = getCustomers();
