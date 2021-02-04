import { DefaultTheme } from 'styled-components/native'

import { ThemeColors, ThemeTypography } from '@/models/theme.model'

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string
    colors: ThemeColors
    isDark: boolean
    typography: ThemeTypography
  }
}

const typography: ThemeTypography = {
  sizes: {
    large: '32px',
    normal: '16px',
    small: '12px',
  },
}

const light: DefaultTheme = {
  background: '#f5f5f5',
  colors: {
    text: '#232525',
  },
  isDark: false,
  typography,
}

const dark: DefaultTheme = {
  background: '#232525',
  colors: {
    text: '#f5f5f5',
  },
  isDark: true,
  typography,
}

export { light, dark }
