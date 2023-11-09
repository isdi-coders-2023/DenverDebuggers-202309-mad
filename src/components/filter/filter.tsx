import { AppContext } from '../../context/app.context';
import { useContext } from 'react';

export function Filter() {
  const { handleFilter, filteredCharacters } = useContext(AppContext);
  console.log(filteredCharacters);
  return (
    <div>
      <label htmlFor="filter">Filter: </label>
      <select name="filter" onChange={handleFilter}>
        <option value="Vivo">Vivo</option>
        <option value="Muerto">Muerto</option>
        <option value="Ficticio">Ficticio</option>
      </select>
    </div>
  );
}
