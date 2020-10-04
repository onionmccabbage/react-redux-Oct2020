import React, { useState } from "react"; //useEffect, 
import { connect } from "react-redux";

import './Form.css';

// we can access any part of the store, such as 'msg'
const ConnectedForm = ({ title, dispatch }) => { // { msg } no msg passed

    // a hook to handle the local state of 'title'
    // const [title, setTitle] = useState({ title: title })

    // a hook to increment!
    const addOne = () => dispatch({ type: 'INCREMENT', step: 1 })
    const setTitle = (value) => {
        return dispatch({ type: 'SET_TITLE', value})
        }

    // this works to bind the input field to the local prop 'title'
    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // must come first!
        addOne()
    }

    return (
        <section className='Form'>
            <form>
                <div>
                    <label htmlFor="title">Title</label>
                    {/* this is a 'controlled' field since it is bound to a model */}
                    <input
                        placeholder='enter a title'
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={handleSubmit}>SAVE</button>
            </form>
        </section>
    );
}

const mapStateToProps = state => ({
    count: state.count,
    title: state.title
    // we expose all state here - could just choose relevant members
    // return { articles: state.articles, msg: state.msg, title: state.title }
})

const Form = connect(
    mapStateToProps, // for state
    null // use fedault dispatch
    // mapDispatchToProps // for actions
)(ConnectedForm);

export default Form;
