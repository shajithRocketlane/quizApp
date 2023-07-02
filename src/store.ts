import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./reducers/quizSlice";
import searchSlice from "./reducers/searchSlice";
import createQuizSlice from "./reducers/createQuizSlice";
import editQuizSlice from "./reducers/editQuizSlice";

export default configureStore({
    reducer:{
        quiz:quizSlice,
        search:searchSlice,
        create:createQuizSlice,
        edit:editQuizSlice
    }
})