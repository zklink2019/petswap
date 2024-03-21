import { configureStore } from '@reduxjs/toolkit';
import initReducer from './rootReducer';


export const store = configureStore({
    reducer: {
        initReducer:initReducer
    }
})