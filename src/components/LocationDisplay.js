import React from "react";
import { useLocation } from "react-router-dom";
import Navli from "./Navli";

const LocationDisplay =()=>{
    const location = useLocation('');

    return(
        <>
             <Navli/>
        </>
    )
}

export default LocationDisplay;