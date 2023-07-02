import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../URL";

//types
export type OptionProps = {
  option_id: number;
  option: string;
};

export type QuestionProps = {
  question_id: number;
  question?: string;
  options?: OptionProps[];
};

export type QuizProps = {
  quiz_id?: number;
  quiz_name?: string;
  no_of_questions?: number;
  difficulty?: string;
  questions?: QuestionProps[];
};

//functions

export const getEditQuiz = createAsyncThunk(
  "edit/getEditQuiz",
  async (quiz_id: number) => {
    const quiz = await axios
      .post(URL + "quiz/editQuestions?quiz_id=" + quiz_id, {
        headers: {
          "ngrok-ignore-browser-warning": "69420",
        },
      })
      .then((response) => response.data);
    return quiz;
  }
);

export const deleteQuiz = createAsyncThunk(
  "edit/deleteQuiz",
  async (quiz_id: string | number) => {
    await axios.post(URL + "quiz/deleteQuiz?quiz_id=" + quiz_id, {
      headers: {
        "ngrok-ignore-browser-warning": "69420",
      },
    });
  }
);

export const updateQuestion = createAsyncThunk(
  "edit/updateQuestion",
  async (data) => {
    await axios.post(URL + "quiz/changeQuestion", data, {
      headers: {
        "ngrok-ignore-browser-warning": "69420",
      },
    });
  }
); //takes care of updating question and options

export const deleteQuestion = createAsyncThunk(
  "edit/deleteQuestion",
  async (question_id) => {
    await axios.post(URL + "quiz/deleteQuestion?question_id=" + question_id, {
      headers: {
        "ngrok-ignore-browser-warning": "69420",
      },
    });
  }
); // deletes question

export const addNewQuestion = createAsyncThunk(
  "edit/addQuestion",
  async (data) => {
    await axios.post(URL + "quiz/createQuestion", data, {
      headers: {
        "ngrok-ignore-browser-warning": "69420",
      },
    });
  }
); // add new question quiz_id and data

export const updateQuizInfo = createAsyncThunk(
  "edit/updateQuizInfo",
  async (data) => {
    await axios.post(URL, data, {
      headers: {
        "ngrok-ignore-browser-warning": "69420",
      },
    });
  }
); // quiz name and difficulty with id

export const deleteOption = createAsyncThunk(
  "edit/deleteOption",
  async (option_id) => {
    await axios.post(URL + "quiz/deleteOption?option_id=" + option_id, {
      headers: {
        "ngrok-ignore-browser-warning": "69420",
      },
    });
  }
);

export const addOption = createAsyncThunk("edit/addOption",async(data)=>{
  await axios.post(URL+"quiz/createOption",data,{
    headers:{
      "ngrok-ignore-browser-warning":"69420"
    }
  })
})

//state
let initialState: QuizProps = {};

const editQuizSlice = createSlice({
  name: "edit",
  initialState: {
    initialState,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getEditQuiz.fulfilled, (state, action) => {
        state.initialState = action.payload;
        console.log(state.initialState);
      })
      .addCase(deleteQuiz.fulfilled, (state, action) => {
        alert("Quiz Deleted");
      })
      .addCase(updateQuestion.fulfilled, (state, action) => {
        console.log("Question Updated");
      })
      .addCase(deleteQuestion.fulfilled, (state, action) => {
        console.log("Question Deleted");
      })
      .addCase(deleteOption.fulfilled, (state, action) => {
        console.log("Option Deleted");
      });
  },
});

//exports and selectors
export const {} = editQuizSlice.actions;

export default editQuizSlice.reducer;

export const selectQuestions = (state: QuizProps) => state.edit.initialState;
