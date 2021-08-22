import React, {useState, useEffect} from 'react'
import './AboutMe.css';
import styled from 'styled-components'
import Skills from './Skills';

// import Timeline from '../Timeline/Timeline';
// import App from '../../App';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


const Title = styled.h1`
    color: #aac9f0;
`

const Text = styled.p`
    padding-bottom: 10px;
    font-size: 25px;
    color: white;
`


function AboutMe(){



    return (
        <div>


            <div id = "AboutMe">

                <div id = "leftImage">
                    <img src="/images/photo.jpeg" alt="Photo" className = "aboutMeImage"/>
                </div>

                <div id = "rightText">
                    <Title className = "AboutMeText" >About Me</Title> 

                    <div className="timelineSection">
                        <span id = "timlineText"> Here is a timeline of my education and accomplishments: </span>
                        <Link className = "specialButton" to = "/components/Timeline/Timeline"> Timeline </Link>
                    </div>

                    <Text>Welcome to my website, I’m a software developer who focuses on machine learning and 3D animations. Scroll down to see some of the projects I haven done or click the timeline button above for a list of my education.
                    </Text>
                
                    <Skills />
                    {/* <button id = "resumeButton"> Link to my resume </button> */}
                </div>
                {/* This is somehow not needed so I will just leave it here: viewBox = "0 0 100% 172" */}
                <svg width="100%" height="172" className= "waves">
                    <path fill="ghostwhite">
                    
                    <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s"
                        values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.90189 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

                        M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;

                        M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;

                        M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;" />
                    </path>
                </svg>

                
                

            </div>

            
        </div>
    )

}

export default AboutMe