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
  INTERACTION_UPDATE_FAIL,
} from "../constants/interactionConstants";
import {
  interactionListReducer,
  interactionListInitialState,
} from "./interactionReducer";

describe(" Interaction Reducer ", () => {
  it("Should return default state when requesting interations", () => {
    const newState = interactionListReducer(undefined, {
      type: INTERACTION_LIST_REQUEST,
    });
    expect(newState).toStrictEqual(interactionListInitialState);
  });

  it("Should return state containing interations", () => {
    const dt = Date();
    const mockInterations = [
      { id: "1", comment: "q", datetime: dt },
      { id: "2", comment: "qq", datetime: dt },
    ];
    const expectedState = {
      ...interactionListInitialState,
      loading: false,
      interactions: mockInterations,
    };

    const newState = interactionListReducer(undefined, {
      type: INTERACTION_LIST_SUCCESS,
      payload: mockInterations,
    });
    expect(newState).toStrictEqual(expectedState);
  });

  it("Should return state containing error", () => {
    const expectedState = {
      ...interactionListInitialState,
      loading: false,
      error: "error",
    };

    const newState = interactionListReducer(undefined, {
      type: INTERACTION_LIST_FAIL,
      payload: "error",
    });
    expect(newState).toStrictEqual(expectedState);
  });
});
