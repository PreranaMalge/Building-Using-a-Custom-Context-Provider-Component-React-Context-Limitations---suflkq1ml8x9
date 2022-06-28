import React from "react";
import { useLocation } from "react-router-dom";

const LocationDisplay =()=>{
    const location = useLocation('');

    return(
        <>
             <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/*" component={NotMatch}/>
                    <Other/>
            </Switch>
        </>
    )
}

export default LocationDisplay;