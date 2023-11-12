import { AppContext } from '../../context/app.context';
import { useContext } from 'react';
import './filter.scss';

export function Filter() {
  const { handleFilter, state } = useContext(AppContext);
  return (
    <div className="filter-container">
      <label htmlFor="filter">
        {' '}
        <img src="./filter-icon.png" alt="Filter icon" height="40" width="40" />
      </label>
      <select name="filter" onChange={handleFilter} value={state.selectedValue}>
        <option value="">Todos</option>
        <option value="Vivo">Vivo</option>
        <option value="Fallecido">Fallecido</option>
        <option value="Ficticio">Ficticio</option>
      </select>
    </div>
  );
}
