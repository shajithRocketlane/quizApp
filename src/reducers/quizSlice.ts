import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit"
import axios from "axios"
import { URL } from "../URL"

//types
export type OptionProps = {
    option_id:number,
    option:string
}

export type QuestionProps = {
    question_id:number,
    question:string,
    options:OptionProps[]
}

export type QuizProps = {
    quiz_id?:number,
    quiz_name:string,
    no_of_questions?:number,
    difficulty:string,
    questions:QuestionProps[]
}

//functions

export const getQuiz = createAsyncThunk('quiz/getQuiz',async(quiz_id:number)=>{
    const headers= {"ngrok-ignore-browser-warning":"69420"}
    const quiz = await axios.post(URL+"quiz/questions?quiz_id="+quiz_id,{headers:headers}).then(response => {
        console.log(response)
        return response.data
    }).catch(err => console.log('No Quiz'))
    return quiz
})

export const submitQuiz = createAsyncThunk('quiz/submitQuiz',async(payload)=>{
    const headers = {"ngrok-ignore-browser-warning":"69420"}
    const response = await axios.post(URL+"quiz/score",payload,{headers}).then(res => res.data)
    return response
})

//state
let initialState : QuizProps  = {}

let score : number = 0

const quizSlice = createSlice({
    name:'quiz',
    initialState:{
        initialState,
        score
    },
    reducers:{
    },
    extraReducers(builder){
        builder
            .addCase(getQuiz.fulfilled,(state,action)=>{
                console.log(current(state))
                let temp = {...action.payload,no_of_questions:action.payload.questions.length}
                state.initialState = temp
                state.score = 0
            })
            .addCase(submitQuiz.fulfilled,(state,action)=>{
                console.log(action.payload)
                state.score = action.payload
            })
    }
})

//exports and selectors
export const {} = quizSlice.actions

export default quizSlice.reducer

export const selectQuestions = (state:QuizProps) => state.quiz.initialState
export const selectScore = (state) => state.quiz.score 

