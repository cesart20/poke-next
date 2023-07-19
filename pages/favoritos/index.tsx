import { Layout } from "@/components/layouts";
import { NotFavorites } from "@/components/ui";
import { FavoritePokemons } from "@/components/pokemon/FavoritePokemons";
import { localFavorites } from "@/utils";

import { NextPage } from "next"
import { useEffect, useState } from "react";



const FavoritosPage: NextPage = () => {


  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, [])
  



  return (
    <Layout title="Pokemons - Favoritos">

      {
        favoritePokemons.length === 0 ?
        (<NotFavorites />) :
        (
          <FavoritePokemons pokemons={favoritePokemons} />
        )
      }        
    </Layout>
  )
}


export default FavoritosPage;