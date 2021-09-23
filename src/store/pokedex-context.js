import { createContext } from 'react';

const PokedexContext = createContext({
  pokemonsList: [],
  total: 0,
  currentTotal: 0,
  sortBy: () => {},
  applyFilters: () => {},
});

export default PokedexContext;
