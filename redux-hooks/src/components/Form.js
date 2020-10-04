import React from "react" 
import { connect } from "react-redux"
import './Form.css';

// we can access any part of the store, but we just want 'title'
const ConnectedForm = ({ title, dispatch }) => {

    // make a call to the 'SET_TITLE' action via dispath
    const setTitle = (value) => { return dispatch({ type: 'SET_TITLE', value }) }
    const addArticle = () => { return dispatch( { type:'ADD_ARTICLE', article: {id:99, title:title} } ) }
    // a hook to call increment! (we have no interest in 'counter' here)
    const addOne = () => dispatch({ type: 'INCREMENT', step: 10 })

    // this works to bind the input field to the prop 'title' by dispatching our SET_TITLE action
    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const commitArticle = (event)=>{
        event.preventDefault(); // must come first if there is a form tag!
        addArticle()
    }

    // just call our ADD_ONE action
    const handleButton = (event) => {
        event.preventDefault(); // must come first if there is a form tag!
        addOne()
    }

    return (
        <section className='Form'>
            {/* do we really need the form tag? */}
            <form>
                    <label htmlFor="title">Title</label>
                    {/* this is a 'controlled' field since it is bound to a model */}
                    <input
                        placeholder='enter a title'
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleChange} />
                    <button onClick={commitArticle}>Add Article</button>
                    <br/>
                {/* a button to trigger our INCREMENT action */}
                <button onClick={handleButton}>Add Ten</button>
            </form>
        </section>
    );
}

// In this component, we're only interested in 'title' from the entire state
const mapStateToProps = state => ({
    title: state.title
})

const Form = connect(
    mapStateToProps, // for state
    null // use default dispatch // mapDispatchToProps // for actions
)(ConnectedForm);

export default Form;
