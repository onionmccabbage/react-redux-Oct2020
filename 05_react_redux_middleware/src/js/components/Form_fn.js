// src/js/components/Form.jsx
import React from "react";
import { connect } from "react-redux";
// import { addArticle } from "../actions/index";
import { ADD_ARTICLE, SET_TITLE } from "../constants/action-types";

// functional version of Form
const ConnectedForm = ({ title, dispatch }) => {
    // we can use hooks to create a setTitle method
    const setTitle = (value) => { return dispatch({ type: SET_TITLE, value }) }
    const addArticle = () => { 
        return dispatch({ type: ADD_ARTICLE, title: title }) } // payload was article
    const handleChange = (event) => {
        // setState({ [event.target.id]: event.target.value });
        setTitle(event.target.value)
    }
    // const handleSubmit=(event)=>{
    //     event.preventDefault();
    //     const { title } = state;
    //     addArticle({ title });
    //     setState({ title: "" });
    // }
    const commitArticle = (event) => {
        event.preventDefault() // we MUST do this if we're using a form tag
        // dispatch the action
        addArticle()
    }

    return (
        <section>
            {/* <form onSubmit={handleSubmit}> */}
            <form onSubmit={commitArticle}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleChange} />
                </div>
                <button type="submit">SAVE</button>
            </form>
        </section>
    )
}

// const mapDispatchToProps=(dispatch)=>{
//     return {
//         addArticle: article => dispatch(addArticle(article))
//     };
// }
// we need to map the state to the props of this component
const mapStateToProps = state => ({ title: state.title }) // , getRemoteData:getData
const FormFn = connect(
    mapStateToProps, // for state
    null // mapDispatchToProps // for dispatch
)(ConnectedForm)
export default FormFn