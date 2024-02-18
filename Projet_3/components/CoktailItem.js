import React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import { Badge, Text, Divider } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import LikeButton from './LikeButton';

const CoktailItem = ({item}) => {
    const navigation = useNavigation();

    const handleCardPress = () => {
        navigation.push('CoktailsDetails', { id: item.idDrink });
    };

    return (
        <View style={styles.containerCocktail}>
            <Pressable onPress={handleCardPress}>
                <View style={styles.containerRow}>
                    <Text style={styles.titleCocktail}>{item.strDrink}</Text>
                    <LikeButton cocktail={{id: item.idDrink, name: item.strDrink}} />
                </View>
                <Divider style={styles.divider}/>
                <View style={styles.containerInCard}>
                    <Image source={{ uri: item.strDrinkThumb }} style={styles.imageC} />
                    <View style={styles.containerRow}>
                        <Badge value={" "+item.strCategory+" "} status="primary" />
                        <Badge value={" "+item.strAlcoholic+" "} status="warning"/>
                    </View>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    divider: {
        marginBottom: 5,
        width: '80%',
        alignSelf: 'center',
    },
    imageC: {
        width: 120,
        height: 120,
        marginBottom: 5,
        borderRadius: 5,
    },
    containerInCard: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleCocktail: {
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center',
        paddingBottom: 5,
    },
    containerCocktail: {
        flex: 1,
        alignSelf: 'center',
        width: '80%',
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
      },
});

export default CoktailItem;
