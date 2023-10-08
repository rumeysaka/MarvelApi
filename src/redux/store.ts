import { charactersSlice } from "./features/charactersSlice"
import { configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import rootReducer from "./features"

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore["getState"]>
export const wrapper = createWrapper<AppStore>(makeStore)
