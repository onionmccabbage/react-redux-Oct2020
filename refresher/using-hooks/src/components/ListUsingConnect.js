import React from 'react'
import { connect } from 'react-redux'
import './List.css'

// here we use our state to grab the members we need, in this case, articles
const mapStateToProps = (state) => { // some conventions call it 'select'
    return { articles: state.articles }
}

// declare our functional component
// by convention, use 'Connected' in its name
const ConnectedList = ({ articles }) => ( // or {return (...)}
    <section className='List'>
        <h4>List Using Connect</h4>
        <ul>
            {/* iterate over our articles */}
            {articles.map(el => (<li key={el.id}>{el.title}</li>))}
        </ul>
    </section>
)

// we connect our component
const ListUsingConnect = connect(mapStateToProps)(ConnectedList)

export default ListUsingConnect
