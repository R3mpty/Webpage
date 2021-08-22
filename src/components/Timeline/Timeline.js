import React, {useEffect } from 'react';
import styled from 'styled-components';
import School from './School';
import './Timeline.css';
import AOS from "aos";
import "aos/dist/aos.css";

import {motion, useMotionValue, UseTransform, AnimatePresence} from 'framer-motion';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function Timeline(){

    useEffect(() => {
        window.scroll(0,0);
    }, [])


    const Timeline = styled.h1`
        // padding-top: 100px;
        color: #aac9f0;
        padding-bottom: 30px;
    `

    const SubHeading = styled.h2`
        color: #2f3547;
        font-size:  30px;
        padding-bottom: 15px;
    `

    useEffect (() => {
        AOS.init({duration: 1000})
    }, [])



    return (
        <motion.div id = "Timeline" 
            initial = {{ opacity: 0}}
            animate = {{ opacity: 1}}
            exit = {{ opacity: 0}}>

            <Timeline> Timeline </Timeline>
            <Link to = "/"> Home </Link>

            <div className="event-container">

                <div className="educations">
                    <SubHeading className="sub-title"> Educations </SubHeading>
                    <div data-aos = "fade-left"> <School name = "University of Michigan" date = "May 2002 -  June 2002" type = "Bachelor - Computer Science" description = "       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti provident laboriosam similique in! Omnis, veniam expedita ut assumenda iusto pariatur labore animi facere quis amet reprehenderit dolorem voluptatum minus laudantium." location = "Ann Arbor, USA" src = "/images/us.gif"/></div>
                    <div data-aos = "fade-left"> <School name = "Queen's University, Kingston" date = "May 2002 -  June 2002" type = "Bachelor - Computer Science" description = "       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti provident laboriosam similique in! Omnis, veniam expedita ut assumenda iusto pariatur labore animi facere quis amet reprehenderit dolorem voluptatum minus laudantium." location = "Kingston, Canada" src = "/images/cad.gif"/></div>
                    <div data-aos = "fade-left"> <School name = "Truro School, Cornwall" date = "May 2002 -  June 2002" type = "High School - IBMYP" description = "       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti provident laboriosam similique in! Omnis, veniam expedita ut assumenda iusto pariatur labore animi facere quis amet reprehenderit dolorem voluptatum minus laudantium." location = "Cornwall, UK" src = "/images/uk.gif"/></div>
                    <div data-aos = "fade-left"> <School name = "Creative Secondary School, Hong Kong" date = "May 2002 -  June 2002" type = "High School - IBMYP" description = "       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti provident laboriosam similique in! Omnis, veniam expedita ut assumenda iusto pariatur labore animi facere quis amet reprehenderit dolorem voluptatum minus laudantium." location = "Hong Kong" src = "/images/hk.gif"/></div>
                </div>

                <div className="other">
                    <SubHeading className="sub-title"> Other</SubHeading>
                    <div data-aos = "fade-left"> <School name = "AI Academy HK" date = "May 2002 -  June 2002" type = "Internship" description = "       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti provident laboriosam similique in! Omnis, veniam expedita ut assumenda iusto pariatur labore animi facere quis amet reprehenderit dolorem voluptatum minus laudantium." location = "Ann Arbor, USA" src = "/images/hk.gif"/></div>
                    <div data-aos = "fade-left"> <School name = "Monticle Millitary trainning camp" date = "May 2002  and June 2002" type = "Bachelor - Computer Science" description = "       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti provident laboriosam similique in! Omnis, veniam expedita ut assumenda iusto pariatur labore animi facere quis amet reprehenderit dolorem voluptatum minus laudantium." location = "Ann Arbor, USA" src = "/images/cad.gif"/></div>

                </div>

            </div>

        </motion.div>
    )

}

export default Timeline;