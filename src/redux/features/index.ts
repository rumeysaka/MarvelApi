

import { combineReducers } from "@reduxjs/toolkit"
import charactersSlice from "./charactersSlice"
import currentSlice from "./currentSlice"

const rootReducer = combineReducers({
  characters: charactersSlice,
  current: currentSlice,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
