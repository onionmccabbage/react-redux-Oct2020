import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  // experimental stateful value
  msg:'Stateful message', // as per https://medium.com/@libertkhe/connect-redux-with-react-native-using-functional-components-b94ed4b3c169
  articles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;
