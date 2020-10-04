// https://www.unpkg.com/redux@4.0.5/dist/redux.js
// here we use the ES version of redux
import { createStore } from 'https://www.unpkg.com/redux@4.0.5/es/redux.mjs'

// named actions
const BUTTON_CLICKED = 'BUTTON_CLICKED'
const SECTION_VISIBLE = 'SECTION_VISIBLE'

const initialState = {
    buttonClicked : 'no',
    sectionVisible : 'no',
    // payload:{} // if we're going to use a payload, it could have an initial value
}

const rootReducer = (state=initialState, action)=>{
    switch(action.type){
        case BUTTON_CLICKED:
            return {...state, buttonClicked : 'yes', payload:action.payload} // any payload is available here
        case SECTION_VISIBLE:
            return {...state, sectionVisible : 'yes'}
        default:
            // we should always return the state if nothnig else has happened
            return state
    }
}

const store = createStore(rootReducer)

// action creators (just functions)
const buttonClickAction = (payload={})=>{ // receive an incoming payload, in this case default to an empty object
    return {type:BUTTON_CLICKED, payload} // optionally pass a payload
}
const sectionVisibleAction = ()=>{
    return {type:SECTION_VISIBLE}
}

btnGo.addEventListener('click', ()=>{
    // const buttonClickAction = {
    //     type:BUTTON_CLICKED
    // }
    // const sectionVisibleAction = {
    //     type:SECTION_VISIBLE
    // }
    // store.dispatch(buttonClickAction)
    // store.dispatch(sectionVisibleAction)
    // Or do the same thing with action creators
    store.dispatch(buttonClickAction({data:'info'})) // here we're passing a payload
    store.dispatch(sectionVisibleAction())
})

store.subscribe( ()=>{
    if (store.getState().sectionVisible === 'yes'){
        outputSection.style.display = 'block'
    }
    // respond to a payload
    if(store.getState().payload){ // 
        console.log(store.getState().payload.data)
        outputSection.append(`${store.getState().payload.data}`) // twice! initial set and new value
    }
} )