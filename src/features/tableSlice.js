// fileSlice.js
import { createSlice } from '@reduxjs/toolkit';

const fileSlice = createSlice({
    name: 'file',
    initialState: {
        fileData: null,
    },
    reducers: {
        uploadFile(state, action) {
            state.fileData = action.payload;
        },
    },
});

export const { uploadFile } = fileSlice.actions;

export default fileSlice.reducer;
