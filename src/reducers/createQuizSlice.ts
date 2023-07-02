import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { QuizProps } from "./quizSlice";
import axios from "axios";
import { URL } from "../URL";

export const createNewQuiz = createAsyncThunk('create/createNewQuiz',async(payload)=>{
    const response = await axios.post(URL+"quiz/create",payload,{
        headers:{
            "ngrok-ignore-browser-warning":"69420"
        }
    }).then(response => console.log(response))
    return response
})

let initialState : QuizProps[] = []

const createQuizSlice = createSlice({
    name:'create',
    initialState,
    reducers:{
        setQuiz: (state,action)=>{
            state.create = action.payload
        }    
    },
    extraReducers(builder){
        builder
            .addCase(createNewQuiz.fulfilled,(state,action)=>{
                alert('Quiz Created')
            })
    }
})

export const {} = createQuizSlice.actions

export default createQuizSlice.reducer

