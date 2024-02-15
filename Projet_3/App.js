import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Home from './components/Home';
import Favs from './components/Favs';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} options={{ title: '🍸 Coktails List 🍸' }} />
          <Tab.Screen name="Favs" component={Favs}/>
        </Tab.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});