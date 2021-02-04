import * as React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

import useTheme from '@/hooks/useTheme'

import * as S from './styles'

const Screen: React.FC = ({ children }) => {
  const { theme } = useTheme()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Wrapper>{children}</S.Wrapper>
      <StatusBar style='auto' backgroundColor={theme.background} />
    </SafeAreaView>
  )
}

export default Screen
