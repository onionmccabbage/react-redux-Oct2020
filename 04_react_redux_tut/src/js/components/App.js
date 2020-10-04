import React from "react";
import List from "./List";
import Form from "./Form";
import Form_fn from "./Form_fn"

const App = () => (
  <>
    <div>
      <h2>Articles</h2>
      <List />
    </div>
    <div>
      <h2>Add a new article</h2>
      <Form />
      <hr/>
      <Form_fn />
    </div>
  </>
);

export default App;
