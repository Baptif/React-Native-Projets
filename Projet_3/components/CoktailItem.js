import React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import { Card, Badge } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import LikeButton from './LikeButton';

const CoktailItem = ({item}) => {
    const navigation = useNavigation();

    const handleCardPress = () => {
        navigation.push('CoktailsDetails', { id: item.idDrink });
    };

    return (
        <Pressable onPress={handleCardPress}>
            <Card>
                <View style={styles.containerCard}>
                    <Card.Title>{item.strDrink}</Card.Title>
                    <Card.Divider />
                    <View style={styles.containerInCard}>
                        <Image source={{ uri: item.strDrinkThumb }} style={{ width: 100, height: 100 }} />
                        <View style={styles.containerBadge}>
                            <Badge value={" "+item.strCategory+" "} status="primary" />
                            <Badge value={" "+item.strAlcoholic+" "} status="warning"/>
                            <LikeButton cocktail={{id: item.idDrink, name: item.strDrink}} />
                        </View>
                    </View>
                </View>
            </Card>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    containerInCard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerBadge: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    likeIcon: {
        marginLeft: 5,
    },
});

export default CoktailItem;
