import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteTour) => {},
  removeFavorite: (tourId) => {},
  itemIsFavorite: (tourId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  let favorites = [];

  function addFavoriteHandler(favoriteTour) {
    setUserFavorites((prevUserFavorites) => {
      favorites = userFavorites.concat(favoriteTour);
      return favorites;
    });
  }

  function removeFavoriteHandler(tourId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((tour) => tour.id !== tourId);
    });
  }
  function isFavoriteHandler(tourId) {
    return userFavorites.some((tour) => tour.id === tourId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: isFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
