import * as React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

import useTheme from '@/hooks/useTheme'

import * as S from './styles'
import { ScreenProps } from './Screen.types'

const Screen: React.FC<ScreenProps> = ({
  children,
  statusBarVisible = true,
}) => {
  const { theme } = useTheme()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Wrapper>{children}</S.Wrapper>
      <StatusBar
        backgroundColor={theme.background}
        hidden={!statusBarVisible}
        style='auto'
      />
    </SafeAreaView>
  )
}

export default Screen
