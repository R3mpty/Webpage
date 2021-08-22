import React, { useState } from 'react';
import styled from 'styled-components';
import './School.css';
import Iframe from 'react-iframe'



    const TimelineText = styled.p`
        font-size: 18px
    `
    
    const Flag = styled.img`
        width:30px;
        height:24px;

        padding: 4px 4px;
        margin-bottom: 4px;
    `

function School(props){

    const [name, setName] = useState(props.name);
    const [date, setDate] = useState(props.date);
    const [type, setType] = useState(props.type);
    const [description, setDescription] = useState(props.description);
    const [location, setLocation] = useState(props.location);
    const [scr, setscr] = useState(props.src);

    return(

        <div className="school">
            <div className="leftSide">
                <h3> {name} </h3>
                <TimelineText id = "date"> {date}</TimelineText>
            </div>

            <div className="rightSide">
                <strong> {type} </strong>
                <TimelineText id = "description"> {description}</TimelineText>
                <div className="location">
                    <img id = "pin" src="/images/pin.png" alt="pin" />
                    <TimelineText> {location} </TimelineText>
                    <Flag src= {scr} alt= "flag" />

                    
                    {/* 
                    Issue with showing the location on command
                    <Iframe id = "map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.022289923996!2d-83.74041278462838!3d42.27804754826953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883cae38e7de1701%3A0x5ba14e5178e997e3!2sUniversity%20of%20Michigan!5e0!3m2!1sen!2sca!4v1628204540121!5m2!1sen!2sca" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></Iframe> */}

                    
                </div>
            </div>
        </div>


    )

        
}

export default School;