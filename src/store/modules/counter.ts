import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 100,
    },
    reducers: {
        changMessageAction(state, { payload }) {
            state.count = payload;
        },
    },
});

export const { changMessageAction } = counterSlice.actions;
export default counterSlice.reducer;
