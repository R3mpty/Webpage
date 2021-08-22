import React, { Component } from 'react'
import './Skills.css';
import { motion } from "framer-motion"

// SVGS:
import SvgPython from '../svgs/icons/Python';
import styled, { css } from 'styled-components';
import SvgJava from '../svgs/icons/Java';
import SvgC from '../svgs/icons/C';
import SvgCplusplus from '../svgs/icons/Cplusplus';
import SvgHtml from '../svgs/icons/Html';
import SvgCss from '../svgs/icons/Css';
import SvgJavascript from '../svgs/icons/Javascript';
import SvgGatsby from '../svgs/icons/Gatsby';
import SvgNode from '../svgs/icons/Node';
import SvgReact from '../svgs/icons/React';
import SvgWebpack from '../svgs/icons/Webpack';



const Title = styled.h1`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 50px;
    color: ghostwhite;
`


function Skills(){

    console.log("This is from skills");

    return (
        <div className="Skills">

            <div className="langugage">
                <Title> Languages: </Title>   
                <motion.div drag dragConstraints = {{left: 0, top:0, right: 0, bottom:0}}><SvgPython className = "Logo"/></motion.div>
                 <motion.div drag dragConstraints = {{left: 0, top:0, right: 0, bottom:0}}> <SvgJava className = "Logo"/></motion.div>
                 <motion.div drag dragConstraints = {{left: 0, top:0, right: 0, bottom:0}}> <SvgC className = "Logo"/></motion.div>
                 <motion.div drag dragConstraints = {{left: 0, top:0, right: 0, bottom:0}}> <SvgCplusplus className = "Logo"/></motion.div>
                 <motion.div drag dragConstraints = {{left: 0, top:0, right: 0, bottom:0}}> <SvgHtml className = "Logo" /></motion.div>
                 <motion.div drag dragConstraints = {{left: 0, top:0, right: 0, bottom:0}}> <SvgCss className = "Logo" /></motion.div>
                 <motion.div drag dragConstraints = {{left: 0, top:0, right: 0, bottom:0}}> <SvgJavascript className = "Logo" /></motion.div>
            </div>


            <div className="frameworks">
                <Title> Frameworks: </Title>   
                 <motion.div drag dragConstraints = {{left: 0, top:0, right: 0, bottom:0}}> <SvgNode className = "Logo"/></motion.div>
                 <motion.div drag dragConstraints = {{left: 0, top:0, right: 0, bottom:0}}> <SvgReact className = "Logo"/></motion.div>
                 <motion.div drag dragConstraints = {{left: 0, top:0, right: 0, bottom:0}}> <SvgWebpack className = "Logo"/></motion.div>
                 <motion.div drag dragConstraints = {{left: 0, top:0, right: 0, bottom:0}}> <SvgGatsby className = "Logo"/></motion.div>


            </div>

            <div className="others">

            </div>


        </div>
    )


}

export default Skills;