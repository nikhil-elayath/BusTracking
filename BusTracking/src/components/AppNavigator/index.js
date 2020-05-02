import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

//creating a new stack of navigation
const Stack = createStackNavigator()
import Login from '../../containers/onboarding/EmailScreenContainer'
import UserHomePage from '../../containers/UserHomePage/UserHomePageContainer'
import driver from '../../containers/driver/DriverContainer'

const AppNavigator = props => {
  return (
    //every navigation has to be wrapped in a navigation container

    <NavigationContainer>
      {/* header mode none means we are disabling the header on each screen */}
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='UserHomePage' component={UserHomePage} />
        <Stack.Screen name='DriverLocation' component={driver} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default AppNavigator
