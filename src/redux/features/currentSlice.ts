import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "../store"

// ## CartState Interface
export interface currentCharacterState {
  current: Object
}

// ## Define the initial state of Cart State
const initialState: currentCharacterState = {
  current: {},
}

export const currentSlice = createSlice({
  name: "current",
  initialState,
  reducers: {
    setCurrentCharacter(state, action) {
      state.current = action.payload
    },
  },
})

export const { setCurrentCharacter } = currentSlice.actions

export const getCurrentCharacter = (state: currentCharacterState) => state.current

export default currentSlice.reducer
