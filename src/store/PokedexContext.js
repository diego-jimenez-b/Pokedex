import PokedexContext from './pokedex-context';
import data from '../pokemons-data/data';
import { useReducer } from 'react';

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
  let updatedFilters = { ...state.configuration };

  if (action.type === 'NAME_INPUT') updatedFilters.name = action.value;
  if (action.type === 'TYPE') updatedFilters.type = action.value;
  if (action.type === 'SORT') updatedFilters.sorting = action.value;

  let transformedList = [...initialPokedex.pokemonsList];

  for (const key in updatedFilters) {
    const filterValue = updatedFilters[key];

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
    configuration: updatedFilters,
  };
};

const PokedexContextProvider = (props) => {
  const [pokedexState, dispatch] = useReducer(pokedexReducer, initialPokedex);

  const sortBy = (sortType) => {
    dispatch({ type: 'SORT', value: sortType });
  };

  const applyFilters = (type, value) => {
    if (type === 'name') dispatch({ type: 'NAME_INPUT', value });
    if (type === 'type') dispatch({ type: 'TYPE', value });
  };

  const pokedexContext = {
    pokemonsList: pokedexState.pokemonsList,
    currentTotal: pokedexState.currentTotal,
    total: 251,
    sortBy,
    applyFilters,
  };

  return (
    <PokedexContext.Provider value={pokedexContext}>
      {props.children}
    </PokedexContext.Provider>
  );
};

export default PokedexContextProvider;
