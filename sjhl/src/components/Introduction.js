import React from "react";
import "./components.css"
import Image from 'react-bootstrap/Image'

/* Bootstrap */
import Button from 'react-bootstrap/Button';

/* Assets */
import dp from "./../images/sl.jpg"

export default function Introduction(){
    return(
        <div className="Introduction">
            <div className="IntroDesc">
                <img src={dp} alt="Picture of me" className='img-fluid rounded' width="300px" height="300px"/>
                <p>Hi! My name is Steven and I am a computer programmer who recently graduated from <b>McGill University</b> with a <b>bachelor's degree in computer science!</b>
                    I was recently a <b>Unity developer</b> at the <b>National Research Council of Canada</b>, assisting in the creation of a mobile game on the software side. 
                    <br></br>
                    During my time in undergrad, I created a with the <b>McGill Library</b> game team, using Javascript to create a VR application, and Unity to develop a trivia game.
                    I also had the opportunity to develop visual scientific tools to assist in data analytics, and performed research in Topic Modeling (NLP) at the McGill ROAAr, where I classified common key themes from 200 years of Victorian newspaper archives, using OCR Tesseract to collect textual information. 
                    <br></br>
                    My passions are learning new technologies and expressing my creativity through code. 
                    I aspire to create games that are accessible and can be enjoyed by all ages and groups.
                    I also love to teach and inspire others, having mentored in numerous game jams to help grow the next generation of young developers.
                </p>
            </div> 
            <p className="jobTitle"> 
                <b> Software Developer </b>- <b>Computer Scientist</b> -<b> Unity Developer </b>
            </p>
            <Button className="Email" variant="outline-success"> 
                <a href = "mailto: lee.j.steven@gmail.com"> Work with me! </a>
            </Button>
        </div>
    )
}   