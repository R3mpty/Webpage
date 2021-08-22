import React, {useRef} from 'react';
import SvgWelcomeToMyWebsite from '../svgs/WelcomeToMyWebsite.js'
import './LandingPage.css'
import SvgWaving from '../svgs/Waving.js';
import SvgAnotherWelcome from '../svgs/AnotherWelcome.js';
import SvgAnotherWave from '../svgs/AnotherWave.js';
import SvgV3Waving from '../svgs/V3Waving.js';


function LandingPage(){

    return (
        <div className="aboutMe" id = "Home">

            <div className="name">
                <h1 className = "fancy"> Hi, </h1>
                <h1 className = "fancy"> I'm Ries, </h1>

                <SvgAnotherWelcome className = "welcome"/>
                <SvgAnotherWave className = "CartoonMe"/>
{/* 
                <button id = "Contact" > Contact</button> */}
                {/* <SvgV3Waving className = "CartoonMe"/> */}
                
                {/* <SvgWelcomeToMyWebsite className = "welcome"/> */}
                {/* <SvgWaving className = "CartoonMe"/> */}

                <svg width="100%" height="172" viewBox = "0 0 100% 172" fill="none" className= "waves">
                    <path fill="white">
                    
                    <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s"
                        values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

                        M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;

                        M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;

                        M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;" />
                    </path>
                </svg>
                
                

            </div>

        </div>

    )
}

export default LandingPage;