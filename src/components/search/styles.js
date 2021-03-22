import styled from "styled-components";

export const Input = styled.input`
    border-radius:20px;
    height:2em;
    width:21em;
    border:none;
    outline:none;
    padding:.3em 0 .3em .9em;
    box-shadow:2px 2px 5px rgba(0,0,0,.5);
`

export const Button = styled.button`
    padding:0;
    cursor:pointer;
    border:none;
    background-color:transparent;
    outline:none;
`


export const Form = styled.form`
    display:flex;
    justify-content:center;
    align-items:center;
    height:30vh;
`

export const Section = styled.section`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
`

export const Div = styled.div`
    display:flex;
    flex-direction:row-reverse;
    a{
        margin:.7em .7em 0 0;
        height:1.3em;
        background-color:#fff;
        border-radius:20em;
        color:#000;
        text-decoration:none;
        padding:.5em;
        font-size:1em;
        transition: background-color .8s ease, color .6s ease;


        &:hover{
            background-color:#000;
            color:#fff;
        }
    }
`


export const H1 = styled.h1`
    color:#fff;
`
