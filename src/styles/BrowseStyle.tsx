import { styled } from "styled-components";

export const BrowseStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:30px;

    & > div{
        display: flex;
        width: 80%;
        max-width: 800px;
    }

    input{
        width: 100%;
        max-width: 800px;
        padding: 15px;
        outline: none;
        border: 3px solid lightblue;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        background-color: #13274F;
        font-size: 15px;
        color:white;
        border-right: 0px;
    }
    button{
        padding: 0px 10px;
        border: none;
        border-top-right-radius: 10px;
        border-bottom-right-radius:10px;
        outline: none;
        color: white;
        background-color: #002244;
        border: 3px solid lightblue;
        border-left: 0px;
        cursor:pointer;
    }

    button:hover{
        background-color: #6699CC;
        transition: 200ms ease-in;
    }

    .results{
        display:flex;
        flex-direction: column;
        gap:20px;
        margin: 20px;

        .quiz-card{
            div{
                border: 2px solid lightblue;
                border-bottom: 0px;
                border-top-right-radius: 10px;
                border-top-left-radius: 10px;
                display: flex;
                justify-content: space-between;
            }
            .q-name{
                background-color: #002244;
                padding: 15px 25px;
                width: 100%;
                border-top-left-radius: 10px;
                
            }
            .diff{
                padding: 15px 25px;
                border: 2px solid lightblue;
                border-radius: 10px;
                border-top: 0px;
                border-top-right-radius: 0px;
                border-top-left-radius: 0px;
            }
            button{
                border: none;
                padding-right: 25px;
                cursor:pointer;
            }
            button:hover{
                background-color: #002244;
            }
        }
    }
`