import React from 'react'
import styled from 'styled-components'
import bggif from '../../assets/imgs/電車.gif'
export default function Home() {
    return (
        <StyledHome>
            <h1>
                Home
            </h1>
        </StyledHome>
    )
}

const StyledHome = styled.div`
background: url(${bggif});
height:100vh;
width:100vw;
padding-top:10vh;
h1{
    text-align:center;
    color:white;
    background-color: rgba(33,37,41,0.8);
}

`