import { toggleDarkMode, darkModeReducer } from "./darkMode";

describe("dark mode reducer", () => {
  it("should enable the dark mode if it's disabled", () => {
    expect(darkModeReducer(false, toggleDarkMode())).toEqual(true)
  })

  it("should disable the dark mode if it's enabled", () => {
    expect(darkModeReducer(true, toggleDarkMode())).toEqual(false)
  })
})