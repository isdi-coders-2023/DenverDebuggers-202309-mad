import { AppContext } from '../../context/app.context';
import { useContext } from 'react';

export function Filter() {
  const { handleFilter, state } = useContext(AppContext);
  return (
    <div>
      <label htmlFor="filter">Estado: </label>
      <select name="filter" onChange={handleFilter} value={state.selectedValue}>
        <option value="">Todos</option>
        <option value="Vivo">Vivo</option>
        <option value="Fallecido">Fallecido</option>
        <option value="Ficticio">Ficticio</option>
      </select>
    </div>
  );
}
