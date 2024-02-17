import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Home from './components/Home';
import CoktailsLiked from './components/CoktailsLiked';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color, size }) => {
              let icon;

              if (route.name === 'Home') {
                icon = focused ? 
                  <Entypo name="drink" size={size} color={color} /> 
                  : 
                  <MaterialIcons name="no-drinks" size={size} color={color} />;
              } else if (route.name === 'CoktailsLiked') {
                icon = focused ? 
                  <AntDesign name="heart" size={size} color={color} /> 
                  : 
                  <AntDesign name="hearto" size={size} color={color} />;
              }

              return icon;
            },
            tabBarActiveTintColor: 'orange',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Tab.Screen name="CoktailsLiked" component={CoktailsLiked} options={{title: 'Liked Coktails'}}/>
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