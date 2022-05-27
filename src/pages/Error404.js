import React from "react";
import { useLocation } from "react-router-dom";
// import errphoto from "./404error.jpeg"
const Error404 = () =>{
    let location = useLocation();

    return (
        <div className="err">
        <h1 >Sorry! We couln't find the page you'were looking for.</h1>
        <p >Error 404: Couldn't fetch {location.pathname} </p> 
        <br />
 
        {/* <img src={errphoto} alt = "eror photo"/> */}
        </div>
    );
}
export default Error404;
