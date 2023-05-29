import { Container, Grid, Image, Text, Card } from "@nextui-org/react";
import { FC } from "react";
import { FavoriteCardPokemon } from "../pokemon";

interface Props {
  pokemons: number[];
}
 


export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row">
      {pokemons.map((id) => (
        <FavoriteCardPokemon key={id} pokemonId={id} />
      ))}
    </Grid.Container>
  );
};
