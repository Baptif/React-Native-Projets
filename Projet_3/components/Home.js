import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoktailsList from "./CoktailsList";

const Stack = createNativeStackNavigator();

const Home = () => {
    return (
        <Stack.Navigator initialRouteName='CoktailsList' screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="CoktailsList"
                component={CoktailsList}
            />
        </Stack.Navigator>
    );
}

export default Home;