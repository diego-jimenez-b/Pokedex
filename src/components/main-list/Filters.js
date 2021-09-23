import { Fragment, useState } from 'react';
import TypesFilter from './TypesFilter';
import Card from '../../UI/Card';
import InputSuggest from '../input-suggestions/InputSuggest';
import classes from './Filters.module.css';

const Filters = (props) => {
  const [showTypesFilter, setShowTypesFilter] = useState(false);

  const sortListHandler = (event) => {
    props.onSort(event.target.value);
  };

  const nameInputChangeHandler = (enteredName) => {
    props.onFilter('name', enteredName);
  };

  const toggleShowTypesHandler = () => {
    setShowTypesFilter((prevState) => !prevState);
  };

  return (
    <Fragment>
      <Card className={classes.card}>
        <span>{props.total} of 251 Pókemons</span>

        <select onChange={sortListHandler} defaultValue='0'>
          <option value='A'>By name A-Z</option>
          <option value='Z'>By name Z-A</option>
          <option value='0'>By number 0-9</option>
          <option value='9'>By number 9-0</option>
        </select>
      </Card>

      <Card className={classes.card}>
        <InputSuggest
          onUserInput={nameInputChangeHandler}
          enteredName={props.inputValue}
          pokemonsNames={props.pokemonsList}
        />
      </Card>

      {!showTypesFilter && (
        <div onClick={toggleShowTypesHandler} className={classes['types-btn']}>
          Types
        </div>
      )}
      {showTypesFilter && (
        <TypesFilter
          onClose={toggleShowTypesHandler}
          onFilter={props.onFilter}
        />
      )}
    </Fragment>
  );
};

export default Filters;
