import * as React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import Dashboard from '@/screens/Dashboard'

const Stack = createStackNavigator()

const Routes = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='dashboard' component={Dashboard} />
  </Stack.Navigator>
)

export default Routes
