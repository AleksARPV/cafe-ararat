import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    data: null,
    isAuth: false,
    error: null,
    isLoading: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authRequested: (state) => {
            state.error = null
            state.isLoading = true
        },
        userRequestFailed: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        authRequestSuccess: (state, action) => {
            state.data = action.payload
            state.isAuth = true
            state.isLoading = false
        },
        userLoggedOut: (state) => {
            state.data = null
            state.isAuth = false
            state.error = null
            state.isLoading = false
        },
        authFinally: (state) => {
            state.isLoading = false
        }
    }
})

export const selectUser = (state) => state.user;

export const {
    authRequested,
    authRequestSuccess,
    userRequestFailed,
    userLoggedOut,
    authFinally
} = userSlice.actions

export default userSlice.reducer