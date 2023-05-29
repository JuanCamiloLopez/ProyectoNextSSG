import { Layout } from "../../components/layouts/Layout";
import { NoFavorites } from "@/components/ui";
import { useEffect, useState } from "react";
import { localFavorites } from "@/utils";
import { FavoritePokemons } from "@/components/ui/FavoritePokemons";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="favorites">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
