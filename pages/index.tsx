import { Grid } from '@nextui-org/react';
import { GetStaticProps, NextPage } from 'next';
import { pokeApi } from '@/api';
import { Layout } from '@/components/layouts';
import { PokeListResponse, SmallPokemon } from '@/interfaces';
import { PokemonCard } from '@/components/pokemon';

interface Props {
  pokemons: SmallPokemon[];
}	


const HomePage: NextPage<Props> = ({pokemons}) => {

  return (
    <Layout title="Listado de pokemon">
      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map((pokemon) => (
            <PokemonCard  pokemon={ pokemon } key={pokemon.id} />
          ))
        }
      </Grid.Container>
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const {data} = await pokeApi.get<PokeListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;




 