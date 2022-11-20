import React, { Component } from "react";
import DataComponent from "./Components/DataComponent";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <DataComponent />
        );
    }
}
export default App;
