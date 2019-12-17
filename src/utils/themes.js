import * as V from "../styles/variables"

export const getActiveTheme = () => {
  if (typeof document === "undefined") return

  const body = document.querySelector("body")
  return body.classList.contains("dark")
    ? V.Color.menuDarkerRgb
    : V.Color.themeColor
}
