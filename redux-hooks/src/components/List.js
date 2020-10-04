import React from "react";
import { connect } from "react-redux";
import './List.css';

// build a state for this component from the top-level state
const mapStateToProps = state => {
  // we are only interested in articles (from the entire state)
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <section className='List'>
    <ul>
      {articles.map(el => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  </section>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List