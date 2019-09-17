import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from "./Main";
// import "./css/index.css";
export default class Index extends Component {
    render() {
        return (
            <div className="container">
            <Main />
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
