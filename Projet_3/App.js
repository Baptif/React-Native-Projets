import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, Image } from 'react-native';

export default function App() {
  const [coktailsData, setCoktailsData] = useState(null);
  const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1";

  useEffect(() => {
    const fetchData = async () => { 
      try {
        const response = await fetch(
          `${apiUrl}/search.php?f=a`
        );
        const data = await response.json();
        setCoktailsData(data);
      } catch (error) {
        alert('Error fetching coktails data:', error);
      }
    };     

    fetchData();
  }, []);

  return (
    <View>
      {coktailsData ? (
        <FlatList
          data={coktailsData.drinks}
          renderItem={({ item }) => 
            <View>
              <Text>{item.strDrink}</Text>
              <Image source={{ uri: item.strDrinkThumb }} style={{ width: 50, height: 50 }} />
            </View>
          }
          keyExtractor={item => item.idDrink}
        />
      ) : (
        <Text>Loading...</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}