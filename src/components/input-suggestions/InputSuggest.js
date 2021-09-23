import { Fragment } from 'react';
import data from '../../pokemons-data/data';
import classes from './InputSuggest.module.css';

const pokemonsNames = data.map((pokemon) => pokemon.name)

const InputSuggest = (props) => {
  const { enteredName, onUserInput} = props;

  const selectNameHandler = (event) => {
    onUserInput(event.target.id);
  };

  const inputChangeHandler = (event) => {
    onUserInput(event.target.value.toLowerCase());
  };

  let suggestions;
  if (enteredName !== '') {
    suggestions = pokemonsNames.filter((name) => {
      return name.startsWith(enteredName);
    });
    if (suggestions.length > 7) suggestions.splice(8);
  }

  const isMatch = pokemonsNames.find((pokemon) => pokemon === enteredName);

  return (
    <Fragment>
      <input
        className={classes.input}
        type='text'
        placeholder='Enter a pókemon name'
        onChange={inputChangeHandler}
        value={enteredName}
      />

      {suggestions && !isMatch && (
        <div onClick={selectNameHandler}>
          {suggestions.map((name, ind) => (
            <span
              className={classes.suggestion}
              id={name}
              key={name}
              style={{
                top: `${35 + ind * 23}px`,
              }}
            >
              {name}
            </span>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default InputSuggest;
