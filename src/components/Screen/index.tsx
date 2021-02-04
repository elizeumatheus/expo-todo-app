import * as React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'

const Screen: React.FC = ({ children }) => (
  <SafeAreaView>{children}</SafeAreaView>
)

export default Screen
