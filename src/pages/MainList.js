import { Fragment, useReducer } from 'react';
import data from '../pokemons-data/data';
import Filters from '../components/main-list/Filters';
import PokemonsList from '../components/main-list/PokemonsList';

const initialPokedex = {
  pokemonsList: data,
  currentTotal: data.length,
  configuration: {
    name: '',
    type: 'any',
    sorting: '0',
  },
};

const pokedexReducer = (state, action) => {
  let updatedConfig = { ...state.configuration };

  if (action.type === 'NAME_INPUT') updatedConfig.name = action.value;
  if (action.type === 'TYPE') updatedConfig.type = action.value;
  if (action.type === 'SORT') updatedConfig.sorting = action.value;

  let transformedList = [...initialPokedex.pokemonsList];

  for (const key in updatedConfig) {
    const filterValue = updatedConfig[key];

    if (key === 'name') {
      transformedList = transformedList.filter((pokemon) => {
        return pokemon.name.startsWith(filterValue);
      });
    }
    if (key === 'type' && filterValue !== 'any') {
      transformedList = transformedList.filter((pokemon) => {
        return pokemon.type.includes(filterValue);
      });
    }
    if (key === 'sorting') {
      transformedList.sort((a, b) => {
        if (filterValue === 'A') return a.name.localeCompare(b.name);
        if (filterValue === 'Z') return b.name.localeCompare(a.name);
        if (filterValue === '9') return b.num - a.num;
        return a.num - b.num;
      });
    }
  }

  return {
    pokemonsList: transformedList,
    currentTotal: transformedList.length,
    configuration: updatedConfig,
  };
};

const MainList = () => {
  const [pokedexState, dispatch] = useReducer(pokedexReducer, initialPokedex);

  const sortBy = (sortType) => {
    dispatch({ type: 'SORT', value: sortType });
  };

  const applyFilters = (type, value) => {
    if (type === 'name') dispatch({ type: 'NAME_INPUT', value });
    if (type === 'type') dispatch({ type: 'TYPE', value });
  };

  return (
    <Fragment>
      <Filters
        onSort={sortBy}
        onFilter={applyFilters}
        total={pokedexState.currentTotal}
        inputValue={pokedexState.configuration.name}
      />
      <PokemonsList pokemonsList={pokedexState.pokemonsList} />
    </Fragment>
  );
};

export default MainList;
