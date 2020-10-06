import React from 'react'
import './Form.css'
// we need some stuff from react-redux
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

// functional component using Hooks
// see https://react-redux.js.org/api/hooks
const FormUsingHooks = ()=>{
    // ,setTitle
    const [title] = useSelector(state => state.title)
    // we need access to 'dispatch'
    const dispatch = useDispatch()
    // we can use hooks to create a setTitle method
    const setTitle = (value)=>{ return dispatch( {type:'SET_TITLE',   value} )}
    const addArticle =    ()=>{ return dispatch( {type:'ADD_ARTICLE', article: {id:99, title:title} } )}
    const handleChange = (event)=>{
        setTitle('test')
        // dispatch({type:'SET_TITLE', title:event.target.value})
    }
    const commitArticle = (event)=>{
        event.preventDefault() // we MUST do this if we're using a form tag
        // dispatch the action
        dispatch( {type:'ADD_ARTICLE', article: {id:99, title:title} } )
        // dispatch({type:'ADD_ARTICLE', article:{id:99, title:event.target.value}})
    }
    return (
        <section className='Form'>
            <h4>Form Using Hooks</h4>
            <form>
                <label htmlFor='title'>Title</label>
                {/* this is a controlled component */}
                <input 
                    placeholder='enter a title'
                    type='text'
                    id='title'
                    value={title}
                    onChange={handleChange} 
                    />
                <button onClick={commitArticle}>Add Article</button>
            </form>
        </section>
    )
}

export default FormUsingHooks