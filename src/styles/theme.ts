import { DefaultTheme } from 'styled-components/native'

declare module 'styled-components' {
  type ThemeColors = {
    text: string
  }

  export interface DefaultTheme {
    background: string
    colors: ThemeColors
    isDark: boolean
  }
}

const light: DefaultTheme = {
  background: '#f5f5f5',
  colors: {
    text: '#232525',
  },
  isDark: false,
}

const dark: DefaultTheme = {
  background: '#232525',
  colors: {
    text: '#f5f5f5',
  },
  isDark: true,
}

export { light, dark }
