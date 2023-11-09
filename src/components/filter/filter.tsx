import { AppContext } from '../../context/app.context';
import { useContext } from 'react';

export function Filter() {
  const { handleFilter, state } = useContext(AppContext);
  const filteredCharacters = state.filteredCharacters;
  console.log(filteredCharacters);
  return (
    <div>
      <label htmlFor="filter">Filter: </label>
      <select name="filter" onChange={handleFilter}>
        <option value="">Seleccione uno</option>
        <option value="Vivo">Vivo</option>
        <option value="Fallecido">Fallecido</option>
        <option value="Ficticio">Ficticio</option>
      </select>
    </div>
  );
}
