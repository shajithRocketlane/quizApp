import { styled } from "styled-components";

export const CreateQuizStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    button:hover{
        background-color: #6699CC;
        transition: 150ms ease-in;
        cursor: pointer;
    }

    p.title{
        font-size: 30px;
        margin: 20px;
        font-weight: bold;
    } 

    button{
        background-color: #002244;
        border: none;
        padding: 10px;
    }

    & input,select{
        outline:none;
        background-color: #13274F;
        padding: 10px;
        border: none;
        font-size: 16px;
    }

    & .name-diff{
        display: flex;
        margin: 5px;
        width: 80%;
        max-width: 600px;
        border-radius: 10px;
        border: 2px solid lightblue;
        select{
            border-left: 2px solid lightblue;
            width: 53%;
            border-radius: 0px 10px 10px 0px;
        }
        input{
            width: 49%;
            border-radius: 10px 10px;
        }
    }

    & .question{
        display: flex;
        width: 80%;
        max-width: 600px;
        border-radius: 10px;
        border: 2px solid lightblue;
        div{
            display: flex;
            justify-content: stretch;
            flex: auto;
        }
        button{
            width: 50%;
            border-right: 2px solid lightblue;

        }
        input{
            border-right:2px solid lightblue;
            border-radius: 10px 0px 0px 10px;
        }
        .last-btn{
            border-right: 0px;
            border-radius: 0px 10px 10px 0px;
        }
    }

    & .question-edit{
        display: flex;
        width: 100%;
        max-width: 600px;
        border-radius: 10px;
        border: 2px solid lightblue;
        div{
            display: flex;
            justify-content: stretch;
            flex: auto;
        }
        button{
            width: 50%;
            border-right: 2px solid lightblue;
        }
        input{
            border-right:2px solid lightblue;
            border-radius: 10px 0px 0px 10px;
        }
        .last-btn{
            border-radius: 0px 10px 10px 0px;
            border-right: 0px;
        }
    }

    & .options{
        display: flex;
        gap: 10px;
        justify-content: center;
        margin: 10px;
        p{
            display: flex;
            align-items: center;
            gap: 5px;
            border-radius: 10px;
            border: 2px solid lightblue;
            button{
                border-radius: 0px 10px 10px 0px;
                font-size: 12px;
            }
            font-size: 12px;
            padding-left: 5px;
        }
    }

    & .options-edit{
        display: flex;
        gap: 10px;
        flex-direction: column;
        align-items: center;
        margin: 10px;
        p{
            display: flex;
            align-items: center;
            gap: 5px;
            border-radius: 10px;
            border: 2px solid lightblue;
            button{
                border-radius: 0px 10px 10px 0px;
                font-size: 12px;
            }
            font-size: 12px;
            padding-left: 5px;
        }
    }

    & .option-ans{
        width: 80%;
        max-width: 300px;
        display: flex;
        align-items: center;
        justify-content: stretch;
        select,button{
            width: 50%;
            text-align: center;
        }
        border: 2px solid lightblue;
        border-radius: 10px;
        select{
            border-radius: 10px 0px 0px 10px;
        }
        button{
            border-radius: 0px 10px 10px 0px;
        }
        margin: 10px;
    }
    & .questions{
        width: 100%;
        max-width: 1000px;
        border: 2px solid lightblue;
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
            }
        }
    }
    & .submit{
        margin: 10px;
        padding: 10px;
        font-size: 18px;
        border-radius: 10px;
    }
`
