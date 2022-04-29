import React from "react"
import "./components.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer(){
    return(
        <div className="Footer">
            <footer>
                <FontAwesomeIcon icon="fa-brands fa-github" size="3x"/>
                <FontAwesomeIcon icon="fa-brands fa-itch-io" size="3x"/>
            </footer>
        </div>
    )
}   