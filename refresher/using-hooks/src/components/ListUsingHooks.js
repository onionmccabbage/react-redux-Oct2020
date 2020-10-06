import React from 'react'
import './List.css'
// we need some stuff from react-redux
import { useSelector } from 'react-redux'

const ListHooks=()=>{
    const articles = useSelector(state => state.articles)
    console.log(articles)
    return (
        <section className='List'>
            <h4>List Using Hooks</h4>
            <ul>
                {/* iterate over our articles */}
                {articles.map(el => (<li key={el.id}>{el.title}</li>))}
            </ul>
        </section>
    )
}

export default ListHooks
