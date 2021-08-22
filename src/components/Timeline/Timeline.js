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
                    <div data-aos = "fade-left"> <School name = "University of Michigan, Ann Arbor" date = "September 2021 - Present" type = "Bachelor - Computer Science" description = "I am currently continuing my pursuit of my undergraduate computer science degree at Michigan." location = "Ann Arbor, USA" src = "/images/us.gif"/></div>
                    <div data-aos = "fade-left"> <School name = "Queen's University, Kingston" date = "September 2020 - May 2021" type = "Bachelor - Computer Science" description = "I spent a year of my undergraduate computing degree at Queens where I took a dive into object oriented programming with Java, linear algebra and physics." location = "Kingston, Canada" src = "/images/cad.gif"/></div>
                    <div data-aos = "fade-left"> <School name = "Truro School, Cornwall" date = "May 2002 -  June 2002" type = "High School - A-Levels" description = "I was a border at Truro School where I studied A-Level Computer Science (Python), Mathematics and Psychology.During my time there, I was given the opportunity to take on various leadership opportunities, one of which being the Deputy head of boarding school where I managed cleaning teams, coordinated social events, and provided detailed tours for potential students and families.I was also the school’s first basketball captain in its 140 year history where I recruited team members, organizing tryouts, refereeing games, strategizing for matches, and managing logistics (eg. getting jerseys, basketballs, bus booking, etc.)" location = "Cornwall, UK" src = "/images/uk.gif"/></div>
                    <div data-aos = "fade-left"> <School name = "Creative Secondary School, Hong Kong" date = "September 2015 - June 2018" type = "High School - IBMYP" description = "I studied IB MYP at creative secondary, where I studied the following topics to an introductory level: Chinese literature, English Literature, Mathematics, Liberal studies, Geography, Chemistry, Physical Education, Design & Information Technology." location = "Hong Kong" src = "/images/hk.gif"/></div>
                </div>

                <div className="other">
                    <SubHeading className="sub-title"> Other</SubHeading>
                    <div data-aos = "fade-left"> <School name = "AI Academy HK" date = "March 2020 - September 2020" type = "Internship" description = "AI academy is a software development company with a special focus on implementing AI into real world applications, providing technology solutions for various companies and schools. One of which was a computer vision program for Lu Fu Shan where I was given the opportunity to shadow the lead developer and assist him with the front-end design of the finished product as well as data labelling for various sets of images." location = "Hong Kong" src = "/images/hk.gif"/></div>
                    <div data-aos = "fade-left"> <School name = "Monticle Millitary trainning camp" date = "Summer of 2016, 2018" type = "Bachelor - Computer Science" description = "Monticle military training camp is a leadership training program where students had to finish a 7-day expedition in Algonquin Park and a 160km walkathon to Niagara falls from Toronto Pearson airport. I finished the first camp in the summer of 2016 and was recruited back in 2018 for an enhancement training program where I was tasked to lead the group through the two challenges for two camps. I was awarded the black shirt as indication of such achieve and is the highest honor given in by the program" location = "Markham, Canada" src = "/images/cad.gif"/></div>

                </div>

            </div>

        </motion.div>
    )

}

export default Timeline;