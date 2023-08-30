import { createSlice } from '@reduxjs/toolkit';

const topicSortSlice = createSlice({
    name: 'topicSort',
    initialState: {
        searchTopic: 'All',
        sorting: 'newest',
    },
    reducers: {
        setTopic: (state, action) => {
            state.searchTopic = action.payload;
        },
        setSorting: (state, action) => {
            state.sorting = action.payload;
        },
    },
});

export const { setTopic, setSorting } = topicSortSlice.actions;
export const selectedTopic = (state) => state.topicSort.searchTopic;
export const selectedSorting = (state) => state.topicSort.sorting;
export default topicSortSlice.reducer;
