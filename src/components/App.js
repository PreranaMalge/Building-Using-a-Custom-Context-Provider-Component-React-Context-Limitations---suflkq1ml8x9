import React, {Component, useState} from "react";
import {BrowserRouter, Route, Routes, Switch} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NotMatch from "./Notmatch";
import Other from "./NotFound";
import '../styles/App.css';
import LocationDisplay from "./LocationDisplay";
import NotFound from "./NotFound";


class App extends Component {
    render() {

        return(
            <>
            <BrowserRouter>
                <div id="main">
                     {/* Do not remove the main div */}
                         <Other/>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/about" component={About}/>
                                <Route exact path="/*" component={NotMatch}/>
                            </Switch>
                        <LocationDisplay/>
                </div>
            </BrowserRouter>
            </>
        )
    }
}


export default App;
