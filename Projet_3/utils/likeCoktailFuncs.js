import AsyncStorage from '@react-native-async-storage/async-storage';

// Fonction pour récupérer les cocktails likés depuis AsyncStorage
const getLikedCocktails = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@likedCocktails');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error("Error getting liked cocktails from AsyncStorage: ", e);
    return [];
  }
};

export const getLikedCocktail = async (cocktailId) => {
  try {
    const likedCocktails = await getLikedCocktails();
    return (likedCocktails.find(cocktail => cocktail.id === cocktailId) != null);
  } catch (e) {
    console.error("Error getting liked cocktail from AsyncStorage: ", e);
    return null;
  }
};

// Fonction pour ajouter un cocktail à la liste des cocktails likés
const likeCocktail = async (cocktail) => {
  try {
    let likedCocktails = await getLikedCocktails();
    if (!likedCocktails.some(item => item.id === cocktail.id)) {
      likedCocktails.push({ id: cocktail.id, name: cocktail.name });
      await AsyncStorage.setItem('@likedCocktails', JSON.stringify(likedCocktails));
    }
  } catch (e) {
    console.error("Error liking cocktail and storing in AsyncStorage: ", e);
  }
};


// Fonction pour supprimer un cocktail de la liste des cocktails likés
const unlikeCocktail = async (cocktailId) => {
  try {
    let likedCocktails = await getLikedCocktails();
    likedCocktails = likedCocktails.filter(item => item.id !== cocktailId);
    await AsyncStorage.setItem('@likedCocktails', JSON.stringify(likedCocktails));
  } catch (e) {
    console.error("Error unliking cocktail and storing in AsyncStorage: ", e);
  }
};

const clearLikedCocktails = async () => {
  try {
    await AsyncStorage.removeItem('@likedCocktails');
  } catch (e) {
    console.error("Error clearing liked cocktails from AsyncStorage: ", e);
  }
};

export { getLikedCocktails, likeCocktail, unlikeCocktail, clearLikedCocktails };