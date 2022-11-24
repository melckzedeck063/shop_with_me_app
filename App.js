import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { TailwindProvider } from 'tailwindcss-react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import ProductScreen from './screens/ProductScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      <StatusBar style="light" />
      {/* <LinearGradient colors={['#073CFC', 'transparent']} > */}
      <NavigationContainer>
        <TailwindProvider>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#D54749' },
              headerTintColor : 'white'
           }}
          >
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Restaurant' component={RestaurantScreen} />
            <Stack.Screen name='Product' component={ProductScreen}  />
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
      {/* </LinearGradient> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
