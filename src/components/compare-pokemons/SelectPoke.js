import { useState } from 'react';
import Card from '../../UI/Card';
import data from '../../pokemons-data/data';
import classes from './SelectPoke.module.css';
import PokemonChars from './PokemonChars';
import InputSuggest from '../input-suggestions/InputSuggest';

const SelectPoke = () => {
  const [enteredName, setEnteredName] = useState('');

  let selectedPokemon;
  if (enteredName !== '') {
    selectedPokemon = data.find((poke) => {
      return poke.name.startsWith(enteredName);
    });
  }

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <InputSuggest
          enteredName={enteredName}
          onUserInput={setEnteredName}
        />
      </Card>

      {!selectedPokemon && (
        <Card className={classes.message}>
          <p>No pókemon selected</p>
        </Card>
      )}
      {selectedPokemon && (
        <PokemonChars className={classes.card} pokemonInfo={selectedPokemon} />
      )}
    </div>
  );
};

export default SelectPoke;
