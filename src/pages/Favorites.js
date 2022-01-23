import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import ToursList from "../components/tours/ToursList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <ToursList items={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
