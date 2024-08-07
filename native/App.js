import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, getFocusedRouteNameFromRoute, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboard from './components/onboarding/Onboard';
import { AppNavigator, OnboardNavigator } from './Routes';
import { registerRootComponent } from 'expo';
import { name as appName} from './app.json'

{/* TODO: Make onboard responsive */}

function App() {
  
  const Stack = createStackNavigator();

 
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{header: ()=> null}}
      >
        <Stack.Screen name="main" component={AppNavigator} />
        <Stack.Screen name="onboard" component={Onboard} />   
        <Stack.Screen name="auth" component={OnboardNavigator} />
        
      </Stack.Navigator>
      </NavigationContainer>
  
     </>
   
  );
}
export default App
registerRootComponent('main', () => App)

