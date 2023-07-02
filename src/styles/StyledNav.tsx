import { styled } from "styled-components";

export const StyledNav = styled.nav`
    padding: 20px;
    background-color: #13274F;
    color: white;
    border-bottom: 3px solid lightblue;
    display:flex;
    justify-content: space-around;
    align-items: center;
    p{
        font-weight: bold;
        font-size: 50px;
    }
    div{
        display:flex;
        gap: 10px;
        button{
            padding:10px;
            background-color: #002244;
            color: white;
            border: none;
            border-radius:5px;
            font-size: 14px;
        }
    }
    button:hover{
        background-color: #6699CC;
        transition: 200ms ease-in;
        cursor: pointer;
    }
    span{
        color: lightblue;
        rotate: 180deg;
        font-size: 35px;
    }
`