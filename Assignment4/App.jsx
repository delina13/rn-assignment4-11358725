import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, View } from 'react-native';
import Login from './Screens/Login';
import Home from './Screens/Home';

const Stack = createStackNavigator();

function App() {
  return (
    <View style={{flex:1}}>
      <StatusBar barStyle='dark-content' backgroundColor='white' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
