"use strict";

// tag::vars[]
const React = require('react');
const ReactDOM = require('react-dom');
// end::vars[]

// tag::app[]
class App extends React.Component {
    render() {
        return (<div><h1>Hay, Welcome To This supper cool starter app.</h1></div>    )
    }
}

ReactDOM.render(
    <App />,
        document.getElementById("react")
    )
