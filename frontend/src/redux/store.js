import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
    reducer:{
        LoginSignUp:authSlice
    }
});

export default store; 