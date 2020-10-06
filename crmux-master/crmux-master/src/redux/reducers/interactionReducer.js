import {
  INTERACTION_LIST_REQUEST,
  INTERACTION_LIST_SUCCESS,
  INTERACTION_LIST_FAIL,
  INTERACTION_ADD_REQUEST,
  INTERACTION_ADD_SUCCESS,
  INTERACTION_ADD_FAIL,
  INTERACTION_DELETE_REQUEST,
  INTERACTION_DELETE_SUCCESS,
  INTERACTION_DELETE_FAIL,
  INTERACTION_UPDATE_REQUEST,
  INTERACTION_UPDATE_SUCCESS,
  INTERACTION_UPDATE_FAIL
} from "../constants/interactionConstants";

export const interactionListInitialState = { interactions: [], loading: true, error: "" };

function interactionListReducer(state = interactionListInitialState, action) {
  switch (action.type) {
    case INTERACTION_LIST_REQUEST:
      return {...state, loading: true};
    case INTERACTION_LIST_SUCCESS:
      return { ...state, loading: false, interactions: action.payload };
    case INTERACTION_LIST_FAIL:
      return {...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

const interactionsInitialState = { interaction: {}, loading: true, error: "" };

function interactionReducer(state = interactionsInitialState, action) {
  switch (action.type) {
    case INTERACTION_DELETE_REQUEST:
      return {...state, loading: true};
    case INTERACTION_DELETE_SUCCESS:
      return { ...interactionsInitialState, loading: false };
    case INTERACTION_DELETE_FAIL:
      return {...state, loading: false, error: action.payload };

    case INTERACTION_ADD_REQUEST:
      return {...state, loading: true};
    case INTERACTION_ADD_SUCCESS:
      return { ...state, loading: false, interactions: action.payload };
    case INTERACTION_ADD_FAIL:
      return {...state, loading: false, error: action.payload };

    case INTERACTION_UPDATE_REQUEST:
      return {...state, loading: true};
    case INTERACTION_UPDATE_SUCCESS:
      return { ...state, loading: false, interactions: action.payload };
    case INTERACTION_UPDATE_FAIL:
      return {...state, loading: false, error: action.payload };
        
    default:
      return state;
  }
}

export { interactionListReducer, interactionReducer };
