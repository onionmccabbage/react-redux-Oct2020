import { getInteractions, addInteraction, deleteInteraction, updateInteraction } from "../../services/interactionService";

const {
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
} = require("../constants/interactionConstants");

const interactionList = (customerId) => async (dispatch) => {
  try {
    dispatch({ type: INTERACTION_LIST_REQUEST });

    const data = await getInteractions(customerId);
    dispatch({ type: INTERACTION_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: INTERACTION_LIST_FAIL, payload: error });
  }
};

const interactionDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: INTERACTION_DELETE_REQUEST });

    await deleteInteraction(id);
    dispatch({ type: INTERACTION_DELETE_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: INTERACTION_DELETE_FAIL, payload: error });
  }
};

const interactionAdd = (interaction) => async (dispatch) => {
  try {
    dispatch({ type: INTERACTION_ADD_REQUEST });

    const data = await addInteraction(interaction);
    dispatch({ type: INTERACTION_ADD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: INTERACTION_ADD_FAIL, payload: error });
  }
};
const interactionUpdate = (interaction) => async (dispatch) => {
  try {
    dispatch({ type: INTERACTION_UPDATE_REQUEST });

    const data = await updateInteraction(interaction);
    dispatch({ type: INTERACTION_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: INTERACTION_UPDATE_FAIL, payload: error });
  }
};

export { interactionList, interactionAdd, interactionDelete, interactionUpdate };
