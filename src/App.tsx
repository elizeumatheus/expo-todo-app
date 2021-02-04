import * as React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { registerRootComponent } from 'expo'

import Screen from '@/components/Screen'
import useTheme from '@/hooks/useTheme'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <Screen>
        <Text>{theme.background}</Text>
        <TouchableOpacity onPress={toggleTheme}>
          <Text>Toggle</Text>
        </TouchableOpacity>
      </Screen>
    </ThemeProvider>
  )
}

export default registerRootComponent(App)
