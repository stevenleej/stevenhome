import React from "react"
import "./components.css"
import Image from 'react-bootstrap/Image'

/* assets */
import skillsTable from './../images/stack.svg'

export default function Skills(){
    return(
        <div className="Skills">
            <Image src={skillsTable} alt="my stack and languages" fluid={true}/>
        </div>
    )
}   