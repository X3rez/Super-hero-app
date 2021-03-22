import styled from "styled-components";



export const Div = styled.div`
    display:flex;
    flex-direction:column;
    width:15em;
    height:20em;
    margin:1em;
    background:linear-gradient(black 30%,white 30%);
    border-radius:5px;
    justify-content:center;
    align-items:center;
    text-align:center;
    position:relative;
`

export const Button = styled.button`
    padding:.6em;
    background-color:#000;
    color:#fff;
    border-radius:5px;
    outline:none;
    border:none;
    cursor:pointer;
`

export const H3 = styled.h3`
`

export const Img = styled.img`
    object-fit:cover;
    height:10em;
    width:10em;
    border-radius:50%;
    border:7px solid white;
`

export const Span = styled.span`
    position:absolute;
    top:-3%;
    right:-3%;
    background-color:white;
    border-radius:50%;
    cursor:pointer;
`