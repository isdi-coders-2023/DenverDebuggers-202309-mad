import { AppContext } from '../../context/app.context';
import { useContext, useEffect } from 'react';
import './pagination.scss';

export function Pagination() {
  const { state, handleNext, handlePrevious } = useContext(AppContext);

  useEffect(() => {}, [state.page]);

  return (
    <div className="button-container">
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
