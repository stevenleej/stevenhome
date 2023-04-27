import React from "react";
import "./components.css"
import Image from 'react-bootstrap/Image'

/* Bootstrap */
import Button from 'react-bootstrap/Button';

/* Assets */
import dp from "./../images/stevenme.jpeg"

export default function Introduction(){
    return(
        <div className="Introduction">
            <div className="IntroDesc">
                <Image src={dp} alt="Picture of me" className='img-fluid rounded' width="300px" height="300px"/>
                <p>
                    <br></br>
                    <b>Hi! My name is Steven and <i>I currently work in Cloud engineering at Amazon Web Services.</i></b>
                    <br></br><br></br>
                    I have built a solid foundation of the Cloud, especially in AWS Serverless technologies, and software development through my work and education.
                    I leverage my strong skills in debugging and advanced troubleshooting with my foundation in programming to provide solutions for my clients.
                    <br></br><br></br>
                    My passions are learning new technologies and disovering new solutions to things. 
                    In my free time, I love to learn new technologies and develop prototype games and applications with the AWS Cloud.
                    <br></br><br></br>
                    I also love to teach and inspire others, having mentored in numerous game jams to help grow the next generation of young developers.
                </p>
            </div> 
            <p className="jobTitle"> 
                <b> Cloud Engineering </b>- <b>Computer Scientist</b> -<b> Programmer </b>
            </p>
            <Button className="Email" variant="outline-success"> 
                <a href = "mailto: lee.j.steven@gmail.com"> Contact me through email ! </a>
            </Button>
        </div>
    )
}   