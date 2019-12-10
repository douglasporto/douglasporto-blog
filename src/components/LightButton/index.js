import React, { useState, useEffect } from "react"

import * as S from "./styles"

export default function LightButton() {
  const [theme, setTheme] = useState(null)
  const isDarkMode = theme === "dark"

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  if (theme !== null) {
    // trackGetTheme(theme)
  }

  const onChange = () => {
    // trackClickTheme(theme)
    window.__setPreferredTheme(isDarkMode ? "light" : "dark")

    // if (window && window.DISQUS !== undefined) {
    //   window.setTimeout(() => window.DISQUS.reset({ reload: true }), 600)
    // }
  }
  return (
    <S.LightButton active={!isDarkMode} onClick={onChange}>
      {isDarkMode ? <S.LightButtonIconSun /> : <S.LightButtonIconMoon />}
    </S.LightButton>
  )
}
