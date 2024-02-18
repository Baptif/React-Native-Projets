import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoktailsList from "./CoktailsList";
import CocktailDetails from "./CoktailDetails";

const Stack = createNativeStackNavigator();

const Home = () => {
    return (
        <Stack.Navigator initialRouteName='CoktailsList'>
            <Stack.Screen
                name="CoktailsList"
                component={CoktailsList}
                options={{
                    title: '🍹Coktails List🍹',
                    headerTintColor: 'orange',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <Stack.Screen
                name="CoktailsDetails"
                component={CocktailDetails}
                options={{ title: 'Coktails Details' }}
            />
        </Stack.Navigator>
    );
}

export default Home;