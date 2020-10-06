import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";


import {
  customerListReducer,
  customerReducer,
  customerMaintenanceReducer,
} from "./customerReducer";
import { interactionListReducer, interactionReducer } from "./interactionReducer";


export default combineReducers({
  customerList: customerListReducer,
  customer: customerReducer,

  customerMaintenance: customerMaintenanceReducer,
  interactionList: interactionListReducer,
  form: formReducer,
  interaction: interactionReducer

});
