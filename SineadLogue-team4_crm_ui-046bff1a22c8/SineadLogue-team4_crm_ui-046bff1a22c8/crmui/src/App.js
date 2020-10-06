import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import AddCustomer from './components/AddCustomer'
import AddInteraction from './components/AddInteraction'
import ListCustomer from './components/ListCustomer';
import ListInteraction from './components/ListInteraction';
import Welcome from './components/Welcome';
import About from './components/About';
import './css/custom.css';
import './App.css';

function App() {
  return (
      <div id="container">
        <nav className="navbar navbar-expand navbar-light bg-light">
          <a href="/home" className="navbar-brand">
            GYM
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/customers"} className="nav-link">
                Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/AddCustomer"} className="nav-link">
                Add Customer
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Interactions"} className="nav-link">
                Interactions
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/AddInteraction"} className="nav-link">
                Add Interaction
              </Link>
            </li>
          </div>
        </nav>
        <div className="text-center text-primary PageHeader">
          <h1 className="pageTitle">Gym CRM </h1>
        </div>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Welcome} />
            <Route exact path={["/", "/customers"]} component={ListCustomer} />
            <Route exact path="/AddCustomer" component={AddCustomer} />
            <Route exact path="/Interactions" component={ListInteraction} />
            <Route exact path="/AddInteraction" component={AddInteraction} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </div>
  );
}

export default App;
