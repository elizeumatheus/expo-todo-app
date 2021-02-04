import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components/native'
import { registerRootComponent } from 'expo'

import Routes from '@/routes'
import useTheme from '@/hooks/useTheme'

const App = () => {
  const { theme } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default registerRootComponent(App)
