import React from "react";
import "./components.css";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

import navIcon from './../images/icon.png'
import resume from './../images/stevenlee.pdf'

/* https://www.notion.so/stevenshome/Projects-fd5e5b973db04be0ae756b365644294b */

export default function MyNavbar(){
    return(
        <div>
            <Navbar className="container-fluid" expand="lg" fixed="top">
              <Container>
              <img src={navIcon} width="28" height="32" className="NavImage" alt="pixel logo"/>
                <Navbar.Brand href="#home">
                  Steven Lee
                  </Navbar.Brand>
                <Nav className="ml-auto">
                  <Nav.Link href="#projects">
                    <a href="https://stevenshome.notion.site/Projects-fd5e5b973db04be0ae756b365644294b" target="_blank">
                      Projects 
                    </a>
                  </Nav.Link>
                  <Nav.Link href="#resume">
                    <a href={resume} target="_blank">
                    Resume
                    </a>
                  </Nav.Link>
                </Nav>
              </Container>
            </Navbar>
        </div>
    )
}