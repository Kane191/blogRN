import { useContext, useEffect } from 'react';
import { StyleSheet, Text} from 'react-native';
import { BlogProvider } from './src/context/BlogContext';
import AuthContext, { AuthProvider } from './src/context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './src/screens/Index';
import ShowScreen from './src/screens/ShowScreen';
import EditScreen from './src/screens/EditScreen';
import StartScreen from './src/screens/StartScreen';
import ShowHeader from './src/components/ShowHeader';
import CreateScreen from './src/screens/CreateScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';
// const prefix = Linking.createURL('/');

const Stack = createNativeStackNavigator();

import * as Linking from 'expo-linking';
const prefix = Linking.createURL('myapp://app');

const config = {
  screens: {
    Register: "register",
    Login: {
      path: "login/:token",
      parse: {
        message: (token) => `${token}`,
      },
    }
  },
};

const App = () => {
  
// exp://192.168.100.131:8081

  const { isSignedIn } = useContext(AuthContext);

  return (
    <NavigationContainer linking={{ prefixes: [prefix], config }}>
      <Stack.Navigator>

        {
          isSignedIn ? (
            <>
              <Stack.Screen name='Home' component={Index}/>
              <Stack.Screen 
                name='Show' 
                component={ShowScreen}
                options={({navigation, route})=>({
                  headerRight: () => <ShowHeader navigation={navigation} route={route}/>
                })}
              />
              <Stack.Screen name='Create' component={CreateScreen}/>
              <Stack.Screen name='Edit' component={EditScreen}/>
            </>
          ) : (
            <>
              <Stack.Screen name='Start' component={StartScreen} options={{ headerShown: false }}/>
              <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }}/>
              <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }}/>
            </>
          )
        }
        {/* color picker */}
        {/* reducer practice */}
      </Stack.Navigator>
    </NavigationContainer>
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

export default ()=> {
  return (
    <AuthProvider>
      <BlogProvider>
        <App/>
      </BlogProvider>
    </AuthProvider>
  )
}
