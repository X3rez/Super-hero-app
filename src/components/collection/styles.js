import styled from "styled-components";


export const Div = styled.div`
    display:flex;
    a{
        margin:.7em 0 0 .7em;
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

export const Section = styled.section`
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    display:flex;
`