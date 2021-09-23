import { configureStore } from '@reduxjs/toolkit';

import challengeDataReducer from "./challenge-data";

const store = configureStore({
    reducer: {
        challengeData: challengeDataReducer,
    }
});

export default store;