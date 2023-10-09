import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "../store"

export interface currentCharacterState {
  current: Object
}

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
