import React from "react"
import "./components.css"
import Image from 'react-bootstrap/Image'

/* assets */
import skillsTable from './../images/stack.svg'

export default function Skills(){
    return(
        <div className="Skills">
            <div className="SkillsSections"> 
                <div className="ProgLang">
                    <h1>
                        Programming Languages
                    </h1>
                    <hr></hr>
                    <ul> C# </ul>
                    <ul> Java </ul>
                    <ul> Python </ul>
                    <ul> C++ </ul>
                    <ul> HTML/CSS </ul>
                    <ul> JavaScript </ul>
                    <ul> Lua </ul>
                </div>

                <div className="TechStack">
                    <h1>
                        Tech Stack
                    </h1>
                    <hr></hr>
                    <ul> Git </ul>
                    <ul> AWS </ul>
                    <ul> Unity </ul>
                    <ul> Docker </ul>
                    <ul> PostgreSQL </ul>
                    <ul> Frameworks </ul>
                    <ul> Terraform </ul>
                    <ul> Dash </ul>
                    <ul> Android </ul>
                </div>

                <div className="Certs">
                    <h1>
                        Certifications
                    </h1>
                    <hr></hr>
                    <ul> <a href="https://www.credly.com/badges/734e8da1-4d0b-4ede-9f06-965702c20a02/public_url"> AWS for Games: Cloud Game Development </a> </ul>
                </div>
            </div>
        </div>
    )
}   