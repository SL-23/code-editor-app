import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const darkModeSlide = createSlice({
  initialState,
  name: "darkMode",
  reducers: {
    toggleDarkMode(state) {
      return !state
    },
  },
})

export const { toggleDarkMode } = darkModeSlide.actions
export const darkModeReducer = darkModeSlide.reducer