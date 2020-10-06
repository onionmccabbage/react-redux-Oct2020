import {
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
} from "../constants/customerConstants";

const customersInitialState = { customers: [], loading: true, error: "" };

function customerListReducer(state = customersInitialState, action) {
  console.log(">>> in reducer = " + action.type);
  switch (action.type) {
    case CUSTOMER_LIST_REQUEST:
      console.log(">>> reducer 1");
      return { ...state, loading: true };
    case CUSTOMER_LIST_SUCCESS:
      console.log(">>> reducer 2");
      return { ...state, loading: false, customers: action.payload };
    case CUSTOMER_LIST_FAIL:
      console.log(">>> reducer 3");

      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

const customerInitialState = {
  customer: {},
  loading: false,
  error: "",
  isDeleted: false,
};

function customerReducer(state = customerInitialState, action) {
  switch (action.type) {
    case CUSTOMER_GET_REQUEST:
      return { ...state, loading: true, isDeleted: false };
    case CUSTOMER_GET_SUCCESS:
      return { ...state, loading: false, customer: action.payload };
    case CUSTOMER_GET_FAIL:
      return { ...state, loading: false, error: action.payload };
    case CUSTOMER_DELETE_REQUEST:
      return { ...state, loading: true };
    case CUSTOMER_DELETE_SUCCESS:
      return {
        ...customerInitialState,
        isDeleted: true,
        // customers: state.filter((c) => c.id !== action.payload),
      };
    case CUSTOMER_DELETE_FAIL:
      return {
        ...state,
        isDeleted: false,
        loading: false,
        error: action.payload,
      };
    case CUSTOMER_UPDATE_REQUEST:
      return { ...state, loading: true };
    case CUSTOMER_UPDATE_SUCCESS:
      return { ...state, loading: false, customer: action.payload };
    case CUSTOMER_UPDATE_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
const customerMaintenanceInitialState = {
  customer: {},
  error: "",
  operationCompleted: false,
};

function customerMaintenanceReducer(
  state = customerMaintenanceInitialState,
  action
) {
  switch (action.type) {
    case CUSTOMER_ADD_REQUEST:
      return { ...state, customer: action.payload };
    case CUSTOMER_ADD_SUCCESS:
      return { ...state, operationCompleted: true, customer: action.payload };
    case CUSTOMER_ADD_FAIL:
      return { ...state, operationCompleted: true, error: action.payload };
    default:
      return state;
  }
}

export { customerListReducer, customerReducer, customerMaintenanceReducer };
