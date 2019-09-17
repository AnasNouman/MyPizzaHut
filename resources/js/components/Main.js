import React, { Component } from "react";

import {FaShoppingCart} from 'react-icons/fa';
import Items from "./Items"
import Cart from "./Cart"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// import {
//   Route,
//   NavLink,
//   HashRouter
// } from "react-router-dom";


export default class Main extends Component {
  render() {
    return (
      <Router>

     <div>
         <h1 className ="myhead"> <Link className="heading" to= "/">MyPizzaHut</Link></h1>

          <Route exact path = '/' component={Items}/>
          <Route exact path = '/cart' component={Cart}/>

    

    </div>

       </Router>
    );
    
  }
}


