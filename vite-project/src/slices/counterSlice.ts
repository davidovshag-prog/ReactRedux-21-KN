// Ініціалізація State для даного slice (reducer)
import {createSlice} from "@reduxjs/toolkit";

const initState = {
    value: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState: initState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByValue: (state, action ) => {
            state.value = action.payload
        }

    },

});

//Дії, які знаходяться в даному Reducer
export const {increment, decrement, incrementByValue} = counterSlice.actions;

export default counterSlice.reducer;