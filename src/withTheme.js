import React from 'react'
import { ThemeProvider } from 'styled-components'

const withTheme = (theme, Component) => {
  return () => <ThemeProvider theme={theme}><Component /></ThemeProvider>
}

export default withTheme
