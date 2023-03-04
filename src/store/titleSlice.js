import {createSlice} from "@reduxjs/toolkit";


const titleSlice = createSlice({
    name: "titleSlice",
    initialState: {
        title: "Old title",
        inputValue: ""
    },
    reducers: {
        changeTitle: (state) => {
            state.title = "hello world"
        },
        changeTitleWithParams: (state, action) => {
            state.title = action.payload
            state.inputValue = ""
        },
        changeInputValue: (state, action) => {
            state.inputValue = action.payload
        }
    }
})

export const {changeTitle, changeTitleWithParams, changeInputValue} = titleSlice.actions;
export default titleSlice.reducer;
