import React from 'react'
import { connect } from 'react-redux'
// import './Form.css'

// functional component
const ConnectedForm = ( {title, dispatch} )=>{
    // we can use hooks to create a setTitle method
    const setTitle = (value)=>{ return dispatch( {type:'SET_TITLE',   value} )}
    const addArticle =    ()=>{ return dispatch( {type:'ADD_ARTICLE', article: {id:99, title:title} } )}
    const handleChange = (event)=>{
        setTitle(event.target.value)
    }
    const commitArticle = (event)=>{
        event.preventDefault() // we MUST do this if we're using a form tag
        // dispatch the action
        addArticle()
    }
    return (
        <section>
            {/* ooooh do we really want a form???? */}
            <form>
                <label htmlFor='title'>Title</label>
                {/* this is a controlled component */}
                <input 
                    placeholder='enter a title'
                    type='text'
                    id='title'
                    value={title}
                    onChange={handleChange} />
                <button onClick={commitArticle}>Add Article</button>
            </form>
        </section>
    )
}
// we need to map the state to the props of this component
const mapStateToProps = state => ({title:state.title, getRemoteData:getData})
const Form = connect(
    mapStateToProps, // for state
    null // for dispatch
)(ConnectedForm)
export default Form