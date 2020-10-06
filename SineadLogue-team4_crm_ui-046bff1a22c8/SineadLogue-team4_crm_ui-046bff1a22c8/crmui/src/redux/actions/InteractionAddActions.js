
import {INTERACTION_ADD_REQUEST , INTERACTION_ADD_SUCCESS , INTERACTION_ADD_FAIL}
    from "../constants/CRMConstants"



import CRMServices from "../../services/CRMServices";

const paymentAdd = (interaction) => async  (dispatch) => {
    console.log("<<<<<<<Interaction Add action <<<<<");
    try {
        dispatch({type: INTERACTION_ADD_REQUEST, payload: interaction});
        const newInteraction = await CRMServices.addInteraction(interaction);
        dispatch({type: INTERACTION_ADD_SUCCESS, payload: newInteraction});
    } catch (error) {
        dispatch({type: INTERACTION_ADD_FAIL, payload: error});
    }
};


//
// export default  EmployeeList;
//   export function fetchEMPLOYEESPending() {
//     return {
//         type: EMPLOYEE_LIST_REQUEST
//     }
// }
//
//   export function fetchEMPLOYEESSuccess(employees) {
//     return {
//         type: EMPLOYEE_LIST_SUCCESS,
//         employees: employees
//     }
// }
//
//    export function fetchEMPLOYEESError(error) {
//     return {
//         type: EMPLOYEE_LIST_FAIL,
//         error: error
//     }
//}

export default  paymentAdd;