import { createSlice } from '@reduxjs/toolkit';

const topicSortSlice = createSlice({
    name: 'topicSort',
    initialState: {
        searchTopic: 'All',
        sorting: 'newest',
        page: 1
    },
    reducers: {
        setTopic: (state, action) => {
            state.searchTopic = action.payload;
        },
        setSorting: (state, action) => {
            state.sorting = action.payload;
        },
        setPage: (state, action) => {
            console.log(action)
            state.page = action.payload;
        },
    },
});

export const { setTopic, setSorting, setPage } = topicSortSlice.actions;
export const selectedTopic = (state) => state.topicSort.searchTopic;
export const selectedSorting = (state) => state.topicSort.sorting;
export const selectedPage = (state) => state.topicSort.page;
export default topicSortSlice.reducer;
