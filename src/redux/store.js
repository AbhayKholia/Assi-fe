import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from './AuthSlice.js'
import storage from 'redux-persist/lib/storage'
import {  persistStore } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";


const persistConfig = {
    key:'root',
    storage,
    // whitelist:['Auth']
}

const Reducer = persistReducer(persistConfig, AuthSlice)

export const store = configureStore({
    reducer:{
        Auth:Reducer
    }
})
export const persistor = persistStore(store)