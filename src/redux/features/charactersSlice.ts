import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "../store"

export interface characterState {
  characters: Object
}

const initialState: characterState = {
  characters: {},
}

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharacters(state, action) {
      state.characters = action.payload
    },
  },
})

export const { setCharacters } = charactersSlice.actions

export const getCharacters = (state: characterState) => state.characters

export default charactersSlice.reducer
