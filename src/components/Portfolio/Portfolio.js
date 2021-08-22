import React, { PureComponent } from 'react';
import './Portfolio.css';
import styled from 'styled-components';
import Project from './Project';


const MyPortfolio = styled.h1`
    // padding-top: 100px;
    color: #aac9f0;
    padding-bottom: 30px;
`


const Thumbnail = styled.img`
    width: 100%;
    height: 100%;
`

const Description = styled.p`
    font-size: 18px

`

function Portfolio(){

    return (
        <div className="Portfolio" id = "Portfolio">

            <div className="description">
                <MyPortfolio> My Portfolio </MyPortfolio>
            </div>

            <div className="container">
                
                <Project imgSrc = "/images/flappy.png" imgAlt="Flappy Bird"  text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis repudiandae quod reiciendis obcaecati quis voluptatibus? Nesciunt doloribus, delectus quisquam repellat quaerat commodi deserunt tenetur, praesentium nemo saepe possimus fugit at!" header = "Card One"  />
            
                <Project imgSrc = "/images/flappy.png" imgAlt="Flappy Bird"  text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis repudiandae quod reiciendis obcaecati quis voluptatibus? Nesciunt doloribus, delectus quisquam repellat quaerat commodi deserunt tenetur, praesentium nemo saepe possimus fugit at!" header = "Card One"  />
            
                <Project imgSrc = "/images/flappy.png" imgAlt="Flappy Bird"  text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis repudiandae quod reiciendis obcaecati quis voluptatibus? Nesciunt doloribus, delectus quisquam repellat quaerat commodi deserunt tenetur, praesentium nemo saepe possimus fugit at!" header = "Card One"  />

                <Project imgSrc = "/images/flappy.png" imgAlt="Flappy Bird"  text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis repudiandae quod reiciendis obcaecati quis voluptatibus? Nesciunt doloribus, delectus quisquam repellat quaerat commodi deserunt tenetur, praesentium nemo saepe possimus fugit at!" header = "Card One"  />

                <Project imgSrc = "/images/flappy.png" imgAlt="Flappy Bird"  text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis repudiandae quod reiciendis obcaecati quis voluptatibus? Nesciunt doloribus, delectus quisquam repellat quaerat commodi deserunt tenetur, praesentium nemo saepe possimus fugit at!" header = "Card One"  />

                <Project imgSrc = "/images/flappy.png" imgAlt="Flappy Bird"  text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis repudiandae quod reiciendis obcaecati quis voluptatibus? Nesciunt doloribus, delectus quisquam repellat quaerat commodi deserunt tenetur, praesentium nemo saepe possimus fugit at!" header = "Card One"  />

                
            </div>


            <button id = "seeMore"> See more </button>
           

        </div>
    )

}

export default Portfolio;