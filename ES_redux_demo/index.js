// this is index.js at the same level as index.html so webkit will inject it for us
// run this with npm start
import { configureStore } from '@reduxjs/toolkit' // we used npm to install this

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
            return {... state, sectionVisible : 'yes'}
        default:
            // we should always return the state if nothnig else has happened
            return state
    }
}
// const store = createStore(rootReducer) // instead, we use configureStore
const store = configureStore({ // declare an 'options' object 
    reducer:rootReducer
})

// action creators (just functions)
const buttonClickAction = (payload={})=>{ // receive an incoming payload
    return {type:BUTTON_CLICKED, payload} // optionally pass a payload
}
const sectionVisibleAction = ()=>{
    return {type:SECTION_VISIBLE}
}

document.getElementById('btnGo').addEventListener('click', ()=>{
    // const buttonClickAction = {
    //     type:BUTTON_CLICKED
    // }
    // const sectionVisibleAction = {
    //     type:SECTION_VISIBLE
    // }
    // store.dispatch(buttonClickAction)
    // store.dispatch(sectionVisibleAction)
    // Or do the same thing with action creators
    store.dispatch(buttonClickAction({data:'info'})) // here 'this' is passing hte button which was clicked as a payload
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