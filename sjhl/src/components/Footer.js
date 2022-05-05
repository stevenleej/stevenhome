import React from "react"
import "./components.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer(){
    return(
        <div className="Footer">
            <footer>
                <div className="FooterIcons">
                    <span>
                        <a href="https://github.com/stevenleej" className="Github" target="_blank">
                            <FontAwesomeIcon icon="fa-brands fa-github" size="2x"/>
                        </a>
                    </span>
                    <span>
                        <a href="https://green-tea.itch.io/" className="Itch" target="_blank">
                            <FontAwesomeIcon icon="fa-brands fa-itch-io" size="2x"/>
                        </a>
                    </span>
                    <span>
                        <a href="https://www.linkedin.com/in/stevenleej/" className="Linkedin" target="_blank">
                            <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2x"/>
                        </a>
                    </span>
                </div>
                <div className="Copyright">
                    <p> Made by Steven Lee - Powered by React</p>
                </div>
            </footer>
        </div>
    )
}   