import { Fragment } from 'react';
import PokemonItem from '../pokemons/PokemonItem';
import classes from './PokemonsList.module.css';
import Card from '../../UI/Card';

const PokemonsList = ({ pokemonsList }) => {
  const listLength = pokemonsList.length;

  return (
    <Fragment>
      {listLength === 0 && (
        <Card className={classes.card}>
          <p>No pókemon found</p>
        </Card>
      )}

      {listLength > 0 && (
        <ul className={classes.list}>
          {pokemonsList.map((pokemon) => (
            <PokemonItem key={pokemon.num} data={pokemon} />
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default PokemonsList;
