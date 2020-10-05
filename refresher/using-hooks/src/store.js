const { combineReducers } = require("redux")

// this is where ALL our stateful model data lives - the single source of truth
const initialState = {
    num: 0,
    articles: [ // an array of object
        { id: 0, title: 'React' },
        { id: 1, title: 'Redux' },
        { id: 2, title: 'React-Redux' }
      ],
    title:'initial value' // often this is an empty string
}

// we use 'reducers' to handle state updates (throw away old state, create new state)
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, num: state.num + action.step }
        case 'DECREMENT':
            return { ...state, num: state.num - action.step }
        case 'SET_TITLE': // we add an action here
            return {...state, title:action.value}
        case 'ADD_ARTICLE':
            // we use concat so we output a NEW array , rather than change existing array
            return {...state, articles: state.articles.concat(action.article)}
        default:
            return state
    }
}

export default reducer