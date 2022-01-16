import { combineReducers } from "redux"

import counterSlice from "./counter.slice"

const rootReducer = combineReducers({
    [counterSlice.name]: counterSlice.reducer,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
