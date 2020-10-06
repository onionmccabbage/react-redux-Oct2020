import React from "react";
import List from "./List";
import Form from "./Form";
import FormFn from "./Form_fn";
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
            <hr/>
            <h2>Functional Version of Form component</h2>
            <FormFn />
        </div>
    </>
);

export default App;