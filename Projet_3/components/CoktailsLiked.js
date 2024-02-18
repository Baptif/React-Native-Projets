import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { getLikedCocktails, clearLikedCocktails } from '../utils/likeCoktailFuncs';
import LikeButton from './LikeButton';

const CoktailsLiked = () => {
  const isFocused = useIsFocused();
  const [likedCoktails, setLikedCoktails] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const reponse = await getLikedCocktails();
      setLikedCoktails(reponse);
    };

    if (isFocused) {
      getData();
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      {likedCoktails.length != 0 ? (
        <FlatList
          data={likedCoktails}
          renderItem={({ item }) => 
            <View key={item.id} style={styles.containerLiked}>
              <Text style={{paddingLeft:10}}>{item.name}</Text>
              <LikeButton cocktail={{id: item.id, name: item.name}}/>
            </View>
          }
          keyExtractor={item => item.id}
        />
      ) : (
        <Text style={styles.noLikeText}>No liked coktails for the moment</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    paddingBottom: 10,
  },
  containerLiked: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginBottom: 3,
    marginTop: 7,
    padding: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  noLikeText: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    color: 'grey',
  },
});

export default CoktailsLiked;
