import React, {Component, useState} from "react";
import {BrowserRouter, Route, Routes, Switch} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NotMatch from "./Notmatch";
import Other from "./Other";
import '../styles/App.css';
import LocationDisplay from "./LocationDisplay";

class App extends Component {
    render() {

        return(
            <>
            <BrowserRouter>
                <div id="main">
                     {/* Do not remove the main div */}
                   <LocationDisplay/>
                </div>
            </BrowserRouter>
            </>
        )
    }
}


export default App;
