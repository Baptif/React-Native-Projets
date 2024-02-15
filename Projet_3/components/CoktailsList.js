import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { Card, Badge } from '@rneui/themed';

const CoktailsList = () => {
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

    const [coktailsData, setCoktailsData] = useState([]);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1";
    const fetchData = async () => { 
        try {
            setIsLoading(true);
            const response = await fetch(
                `${apiUrl}/search.php?f=${alphabet[currentLetterIndex]}`
            );
            const data = await response.json();
            setCoktailsData([...coktailsData, ...data.drinks]);
            setIsLoading(false);

        } catch (error) {
            alert('There is no coktails for this letter ' + alphabet[currentLetterIndex]);
            setIsLoading(false);
        }
    }; 

    useEffect(() => {
        fetchData();
    }, [currentLetterIndex]);

    const fetchMoreData = () => {
        if (currentLetterIndex<25 && !isLoading) {
            const nextIndex = currentLetterIndex + 1;
            setCurrentLetterIndex(nextIndex);
        }
    }

    const renderFooter = () => (
        <View>
            {isLoading && <ActivityIndicator style={{marginTop:10}}/>}
            {currentLetterIndex==25 && <Text style={styles.footerText}>No more coktails at the moment</Text>}
        </View>
    )

    return (
        <View style={styles.container}>
            {coktailsData ? (
                <FlatList
                    data={coktailsData}
                    renderItem={({ item }) => 
                        <Card>
                            <Card.Title>{item.strDrink}</Card.Title>
                            <Card.Divider />
                            <View style={styles.containerInCard}>
                                <Image source={{ uri: item.strDrinkThumb }} style={{ width: 100, height: 100 }} />
                                <View style={styles.containerBadge}>
                                    <Badge value={" "+item.strCategory+" "} status="primary" />
                                    <Badge value={" "+item.strAlcoholic+" "} status="warning" />
                                </View>
                            </View>
                        </Card>
                    }
                    keyExtractor={item => item.idDrink}
                    ListFooterComponent={renderFooter}
                    onEndReachedThreshold={0.8}
                    onEndReached={fetchMoreData}
                />
            ) : (
                <ActivityIndicator size="large" style={styles.spinner}/>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 10,
    },
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
    spinner: {
        justifyContent: 'center',
        marginTop: 100,
    },
    footerText: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        color: 'grey',
    },
});

export default CoktailsList;