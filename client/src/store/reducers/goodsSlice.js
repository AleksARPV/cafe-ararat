import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    types: [],
    goods: [],
    error: null,
    isLoading: false
}

const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {
        goodRemoved: (state, action) => {
            const data = state.goods.filter(i => i.id !== action.payload);
            state.goods = data
        },
        dataRequested: (state) => {
            state.error = null
            state.isLoading = true
        },
        typesFetched: (state, action) => {
            state.types = action.payload
            state.isLoading = false
        },
        dataRequestFailed: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        goodsFetched: (state, action) => {
            state.goods = action.payload
            state.isLoading = false
        }
    }
})

export const selectGoods = (state) => state.goods.goods
export const selectTypes = (state) => state.goods.types
export const selectIsLoading = (state) => state.goods.isLoading

export const {
    goodRemoved,
    dataRequested,
    dataRequestFailed,
    typesFetched,
    goodsFetched
} = goodsSlice.actions

export default goodsSlice.reducer