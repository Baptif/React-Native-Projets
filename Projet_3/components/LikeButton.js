import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { unlikeCocktail, likeCocktail, getLikedCocktail } from '../utils/likeCoktailFuncs';
import { useIsFocused } from '@react-navigation/native';

const LikeButton = ({ cocktail }) => {
    const isFocused = useIsFocused();
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        const getLikedStatus = async () => {
            const likedCocktail = await getLikedCocktail(cocktail.id);
            setIsLiked(likedCocktail);
        };

        if (isFocused) {
            getLikedStatus();
        }
    }, [isFocused]);

    const handleLikePress = async () => {
        if (isLiked) {
            await unlikeCocktail(cocktail.id);
        } else {
            await likeCocktail({ id: cocktail.id, name: cocktail.name });
        }
        setIsLiked(!isLiked);
    };

    return (
        <View style={styles.container}>
            <AntDesign
                name={isLiked ? "heart" : "hearto"}
                size={20}
                color={'tomato'}
                onPress={handleLikePress}
                style={styles.likeIcon}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 5,
        paddingRight: 5,
    },
});

export default LikeButton;
