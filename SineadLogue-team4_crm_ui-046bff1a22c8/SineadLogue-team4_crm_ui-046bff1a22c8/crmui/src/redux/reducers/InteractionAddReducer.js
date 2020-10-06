import {INTERACTION_ADD_REQUEST , INTERACTION_ADD_SUCCESS , INTERACTION_ADD_FAIL}
    from "../constants/CRMConstants"

const interactionInitialState = {
    interaction: {},
    error: "",
    submitted: false,
};

function InteractionAddReducer(
    state = interactionInitialState,
    action){
    switch (action.type){
        case INTERACTION_ADD_REQUEST:
            return {...state, interaction: action.payload};
        case INTERACTION_ADD_SUCCESS:
            return {...state, submitted:true, interaction:  action.payload};
        case INTERACTION_ADD_FAIL:
            return { ...state, submitted: true, error: action.payload};
        default:
            return state;

    }
}

export default {InteractionAddReducer}

