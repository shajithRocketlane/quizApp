import { styled } from "styled-components";

export const EditStyle = styled.div`
    display: flex;
    justify-content: space-around;

    & .main{
        .io{
            display: flex;
            justify-content: space-between;
            align-items: center;
            button{
                padding: 5px;
                border: 2px solid lightblue;
                border-radius:10px;
                margin: 5px;
                cursor: pointer;
                :hover{
                    background-color: lightblue;
                    transition: 200ms ease-in;
                }
            }
        }
        & > div > p{
            font-size: 30px;
            text-align: center;
            margin: 15px;
        }
        width: 50%;
        button{
            background-color: #002244;
            padding: 10px;
            &:hover{
                background-color: #6699CC;
                transition:150ms ease-in;
            }
        }
    }

    & .questions{
        width: 100%;
        border-radius: 10px;
        div{
            width: 100%;
            font-size: 18px;
            p{
                background-color: #002244;
                padding: 10px;
                border-radius: 10px 10px 0px 0px;
                padding-left: 20px;
            }
            li{
                margin-left: 35px;
                margin-top: 5px;
                margin-bottom: 5px;
            }
            button{
                margin: 10px;
                border: 2px solid lightblue;
                border-radius: 10px;
                z-index: 10;
            }
        }
        & > div{
            margin: 10px;
            border: 2px solid lightblue;
            border-radius: 10px;
            cursor: pointer;
            & div:not(:hover){
                opacity: 0.6;
                transition: 250ms ease-in;
            }
        }
    }
`