import React from "react";
import List from "./List";
import Form from "./Form";
import Post from "./Posts";
// from https://www.valentinog.com/blog/redux/
const App = () => (
  <>
    <div>
      <h2>Articles</h2>
      <List />
    </div>
    <div>
      <h2>Add a new article</h2>
      <Form />
    </div>
    <div>
      <h2>API posts</h2>
      <Post />
    </div>
  </>
);

export default App;
