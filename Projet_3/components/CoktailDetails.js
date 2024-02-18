import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, SafeAreaView, ScrollView } from 'react-native';

const CocktailDetails = ({ route }) => {

    const { id } = route.params;
    const [cocktail, setCocktail] = useState(null);
    const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1";

    useEffect(() => {
        const fetchCocktailDetails = async () => {
            try {
                const response = await fetch(`${apiUrl}/lookup.php?i=${id}`);
                const data = await response.json();
                setCocktail(data.drinks[0]);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCocktailDetails();
    }, []);

    return (
        <SafeAreaView  style={styles.container}>
            {cocktail ? (
                <ScrollView >
                    <Text style={styles.title}>{cocktail.strDrink}</Text>
                    <Text style={styles.text}>{cocktail.strAlcoholic}</Text>
                    <Text style={styles.text}>{cocktail.strGlass}</Text>
                    <Text style={styles.text}>{cocktail.strInstructions}</Text>
                    <Text style={styles.subTitle}>Ingrédients</Text>
                    {Object.keys(cocktail).map((key) => {
                        if (key.startsWith("strIngredient") && cocktail[key] !== null) {
                            return <Text style={styles.ingredient} key={key}>- {cocktail[key]}</Text>;
                        }
                        return null;
                    })} 
                </ScrollView>
            ) : (
                <ActivityIndicator size="large" style={styles.spinner}/>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
    },
    ingredient: {
        fontSize: 16,
        marginLeft: 10,
    },
    spinner: {
        justifyContent: 'center',
        marginTop: 100,
    },
});

export default CocktailDetails;
