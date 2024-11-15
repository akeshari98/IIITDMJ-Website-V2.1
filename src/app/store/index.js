import { configureStore } from '@reduxjs/toolkit';
import {sessionReducer} from '../slice/sessionSlice';
import { fontSizeReducer } from '../slice/sessionSlice';
const store = configureStore({
    reducer: {
        session: sessionReducer,
        fontSize: fontSizeReducer,
    },
});

export default store;
