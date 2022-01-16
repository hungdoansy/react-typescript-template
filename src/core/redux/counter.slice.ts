import { createSlice } from "@reduxjs/toolkit"

interface IState {
    count: number
}

const initialState: IState = {
    count: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increments: (state) => {
            state.count++
        },
        decrements: (state) => {
            state.count--
        },
    },
})

export default counterSlice
