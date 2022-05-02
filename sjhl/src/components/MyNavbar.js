import React from "react";
import "./components.css";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

import navIcon from './../images/icon.png'


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
                  <Nav.Link href="#projects">Projects</Nav.Link>
                  <Nav.Link href="#resume">Resume</Nav.Link>
                  <Nav.Link href="#aboutme">About Me</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
        </div>
    )
}