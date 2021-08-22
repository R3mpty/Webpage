import React, { useState, useEffect} from 'react'
import './Project.css'
import styled from 'styled-components';



const Thumbnail = styled.img`
    width: 100%;
    height: 100%;
`

const Description = styled.p`
    font-size: 18px

`


function Project( props ){


    const [src, setSrc] = useState(props.imgSrc);
    const [alt, setAlt] = useState(props.imgAlt);
    const [text, setText] = useState(props.text);
    const [header, setHeader] = useState(props.header);


    return (

        <div className="card">

            <div className="img">
                <Thumbnail src={src} alt={alt} />
            </div>

            <div className="content">
                <h2>{header }</h2>
                <Description> {text} </Description>
            </div>

        </div>


    )


}

export default Project;