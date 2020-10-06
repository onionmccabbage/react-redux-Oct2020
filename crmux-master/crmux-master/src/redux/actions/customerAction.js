
import { CUSTOMERS_URI } from "../../utils/constants";
import {
  search,
  getCust,
  deleteCustomer,
  updateCustomer,
  addCustomer,
} from "../../services/customerService";
const {
  CUSTOMER_LIST_REQUEST,
  CUSTOMER_LIST_SUCCESS,
  CUSTOMER_LIST_FAIL,
  CUSTOMER_GET_REQUEST,
  CUSTOMER_GET_SUCCESS,
  CUSTOMER_GET_FAIL,
  CUSTOMER_DELETE_REQUEST,
  CUSTOMER_DELETE_SUCCESS,
  CUSTOMER_DELETE_FAIL,
  CUSTOMER_UPDATE_REQUEST,
  CUSTOMER_UPDATE_SUCCESS,
  CUSTOMER_UPDATE_FAIL,
  CUSTOMER_ADD_REQUEST,
  CUSTOMER_ADD_SUCCESS,
  CUSTOMER_ADD_FAIL,
} = require("../constants/customerConstants");

const customerList = (searchBy) => async (dispatch) => {
  try {
    console.log(">>> in dispatch CUSTOMERS_URI=" + CUSTOMERS_URI);
    dispatch({ type: CUSTOMER_LIST_REQUEST });

    const data = await search(searchBy); //axios.get(CUSTOMERS_URI);
    console.log(">>> in dispatch CUSTOMERS_URI= + got data");
    dispatch({ type: CUSTOMER_LIST_SUCCESS, payload: data });
  } catch (error) {
    console.log(">>> in dispatch error=" + error);
    dispatch({ type: CUSTOMER_LIST_FAIL, payload: error });
  }
};

const customerGet = (id) => async (dispatch) => {
  try {
    dispatch({ type: CUSTOMER_GET_REQUEST });

    const customer = await getCust(id);

    dispatch({ type: CUSTOMER_GET_SUCCESS, payload: customer });
  } catch (error) {
    dispatch({ type: CUSTOMER_GET_FAIL, payload: error });
  }
};

const customerDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: CUSTOMER_DELETE_REQUEST });

    await deleteCustomer(id);
    dispatch({ type: CUSTOMER_DELETE_SUCCESS, payload: id });

    //customerList("");
  } catch (error) {
    dispatch({ type: CUSTOMER_DELETE_FAIL, payload: error });
  }
};

const customerUpdate = (customer) => async (dispatch) => {
  try {
    dispatch({ type: CUSTOMER_UPDATE_REQUEST });

    const response = await updateCustomer(customer);

    dispatch({ type: CUSTOMER_UPDATE_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: CUSTOMER_UPDATE_FAIL, payload: error });
  }
};
const customerAdd = (customer) => async (dispatch) => {
  try {
    dispatch({ type: CUSTOMER_ADD_REQUEST, payload: customer });

    const newCustomer = await addCustomer(customer);

    dispatch({ type: CUSTOMER_ADD_SUCCESS, payload: newCustomer });
  } catch (error) {
    dispatch({ type: CUSTOMER_ADD_FAIL, payload: error });
  }
};
export {
  customerList,
  customerGet,
  customerDelete,
  customerUpdate,
  customerAdd,
};
