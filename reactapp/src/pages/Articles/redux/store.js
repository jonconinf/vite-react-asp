// store.js
import { configureStore } from '@reduxjs/toolkit';
import topicSortReducer from './topicSortSlice';

const store = configureStore({
    reducer: {
        topicSort: topicSortReducer,
    },
});

export default store;
