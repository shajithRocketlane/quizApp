import { styled } from "styled-components"

export const QuizPageStyle = styled.div`
    color: white;
    width: 95%;
    max-width:1000px;
    & > .quiz-name{
        text-align: center;
        padding: 40px;
        font-size: 30px;
        font-weight: 600;
    }
    & button{
        padding:15px;
        background-color: #002244;
        color: white;
        border: none;
        font-size: 16px;
        border-radius:5px;
    }

    button:hover{
        background-color: #6699CC;
        transition: 200ms ease-in;
        cursor: pointer;
    }

    .bottom{
        display:flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        
        p{
            font-size: 25px;
        }
    }
`