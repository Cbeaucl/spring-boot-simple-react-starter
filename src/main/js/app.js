"use strict";

// tag::vars[]
const React = require('react');
const ReactDOM = require('react-dom');
require('./app.scss')
require('bootstrap')

import { Link, BrowserRouter } from 'react-router-dom';
import { BeakerIcon } from 'react-octicons'
// end::vars[]

// tag::app[]
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <Link to="/home" type="button" className="btn btn-secondary">Left</Link>
                    <Link to="/home" type="button" className="btn btn-secondary">Middle</Link>
                    <Link to="/home" type="button" className="btn btn-secondary">Right</Link>
                </div>
            </BrowserRouter>)
    }

}

ReactDOM.render(
    <App />,
        document.getElementById("react")
    )
