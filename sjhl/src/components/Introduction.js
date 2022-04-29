import React from "react";
import "./components.css"

export default function Introduction(){
    return(
        <div className="Introduction">
            <img src="./../../images/sl.jpg" alt="display picture" border-radius="4px" width="300px" height="300px"
            />
            <h3 className="Name">Steven Lee</h3> 
            <p className="jobTitle">Software Developer</p> 
            <button type ="button" className="Email"> Work with me! </button>
            <button type ="button" className="linkedIn"> LinkedIn </button> 
        </div>
    )
}   