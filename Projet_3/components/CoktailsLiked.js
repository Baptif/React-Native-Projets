import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
    <View>
      {likedCoktails.length != 0 ? (
        likedCoktails.map((cocktail) => (
          <View key={cocktail.id} style={styles.containerLiked}>
            <Text style={{paddingLeft:10}}>{cocktail.name}</Text>
            <LikeButton cocktail={{id: cocktail.id, name: cocktail.name}}/>
          </View> 
        ))
      ) : (
        <Text style={styles.noLikeText}>No liked coktails for the moment</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerLiked: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginTop: 10,
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
