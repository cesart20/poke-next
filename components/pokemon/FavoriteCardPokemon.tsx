import { FC } from "react";
import { useRouter } from "next/router";
import { Card, Grid } from "@nextui-org/react";

interface Props {
    pokemonId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({pokemonId}) => {

    const route = useRouter();


    const onFavoriteClicked = () => {
        route.push(`/pokemon/${pokemonId}`)
    }
    


  return (
    <Grid onClick={onFavoriteClicked} xs={6} sm={3} md={2} xl={1} key={pokemonId}>
        <Card hoverable clickable css={{padding: 10}}>
            <Card.Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                width={'100%'}
                height={140}
            />
        </Card>
    </Grid>
  )
}
