import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../URL";

export type QuizInfoProps = {
    quiz_id:number,
    quiz_name:string,
    difficulty:string,
}

export const fetchSearchResults = createAsyncThunk('search/fetchSearchResults',async(search:string)=>{
    const results = await axios.post(URL+"quiz?search="+search,{"ngrok-ignore-browser-warning":"69420"}).then(response => response.data)
    return results
})

let initialState : QuizInfoProps[] = []

const searchSlice = createSlice({
    name:'search',
    initialState:{
        initialState
    },
    reducers:{
    },
    extraReducers(builder){
        builder
            .addCase(fetchSearchResults.fulfilled,(state,action)=>{
                state.initialState = action.payload
            })
    }
})

export const {} = searchSlice.actions
export default searchSlice.reducer

export const selectSearchResults = (state:QuizInfoProps[]) => state.search.initialState