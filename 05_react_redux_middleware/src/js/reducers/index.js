import { ADD_ARTICLE, SET_TITLE } from "../constants/action-types";

const initialState = {
  articles: [],
  title: 'start' // empty string to begin with
};

function rootReducer(state = initialState, action) {
  // use switch-case or if statements as you prefer (convention is switch-case)
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  if (action.type === SET_TITLE) {
    return Object.assign({}, state, {
      title: action.payload
    });
  }
  // under all other circumstances return the original state
  return state;
}

export default rootReducer;
