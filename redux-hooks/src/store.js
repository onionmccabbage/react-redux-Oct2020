// we could declare an initial state
const initialState = { 
  num: 0, // num is used for the counter
  msg: 'a stateful message', // msg is used just to demo passing sateful values
  // here are some articles to get us going (Array with unique 'key' property)
  articles: [
    {id:0, title:'React'}, 
    {id:1, title:'Redux'}, 
    {id:2, title:'React-Redux'}
  ],
  title:'initial value' // a simple string with a default starting value
}

function reducer(state = initialState, action) {
    switch (action.type) {
      case "INCREMENT": // DRY - should use constants
        return { ...state, num: state.num + action.step };
      case "DECREMENT":
        return { ...state, num: state.num - action.step };
        case "RESET":
          return { ...state, num: 0 };
        // invent some more actions
        case "SET_TITLE":
          return { ...state, title:action.value };  
      default:
        // always default to just returning the original state
        return state;
    }
  }
  
  export default reducer;