import {createSlice} from "@reduxjs/toolkit";




const usersSlice = createSlice({
    name: "usersSlice",
    initialState: {
        users: []
    },
    reducers: {
        addUser: (state, action) => {
            let id = 1;
            if(state.users.length > 0) {
                id = state.users[state.users.length - 1].id + 1
            }
            state.users = [...state.users, {id, username: action.payload}]
        },
        deleteUser: (state, action) => {

            const filteredUsers = state.users.filter(user => +user.id !== +action.payload);

            state.users = filteredUsers

        }
    }
})

export const {addUser, deleteUser} = usersSlice.actions;

export default usersSlice.reducer