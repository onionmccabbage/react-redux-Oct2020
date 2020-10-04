// src/js/components/Form_fn.js
import React, { useEffect, useState } from "react";
// from Alex code
import { useDispatch, useSelector } from "react-redux";
// more modern way
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

// import { ADD_ARTICLE } from "../constants/action-types";

const mapDispatchToProps=(dispatch)=>{
    return {
        // addArticle : ()  => dispatch({type:ADD_ARTICLE})
        addArticle: article => dispatch(addArticle(article))
    };
}
// or https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object
// recommended syntax (my attempt here might be wrong)
// const mapDispatchToProps = {
//   addArticle
// }

const mapStateToProps = (state)=>{
    // we expose all state here - could just choose relevant members
    return state
}

const ConnectedForm = ({msg}) => {

// a hook
// we might need this 
const dispatch = useDispatch();

    // const [title, setTitle] = useState("")
    const [title, setTitle] = useState({title: ""})
    // const [article, setArticle] = useState([])
    // const state = {
    //     title: ""
    // };

    // this works to bind the input field to the local prop 'title'
    const handleChange = (event) => {
        setTitle({ title: event.target.value }); // was [event.target.id]:
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // title = title;
        // addArticle // ({ title });
        addArticle({title})
        // clear down the input field so it's empty
        setTitle({ title: "" });
    }


    // const { title } = title;
    return (
        <form onSubmit={handleSubmit}>
            <h2>Value of msg injected as state: {msg}</h2>
            <div>
                <label htmlFor="title">Title</label>
                {/* this is a 'controlled' field since it is bound to a model */}
                <input
                    type="text"
                    // id="title"
                    value={title.title}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">SAVE</button>
        </form>
    );
    // not sure we need this
useEffect(() => {
    dispatch(addArticle()); // {title}
        return () => {};
  }, []);
}

const Form_fn = connect(
    mapStateToProps, // for state
    mapDispatchToProps // for actions
)(ConnectedForm);

export default Form_fn;
