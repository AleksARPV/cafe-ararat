import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import goodsSlice from "./reducers/goodsSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        goods: goodsSlice
    }
})

