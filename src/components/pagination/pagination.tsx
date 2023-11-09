import { AppContext } from '../../context/app.context';
import { useContext, useEffect } from 'react';
import './pagination.scss';

export function Pagination() {
  const { state, handleNext, handlePrevious } = useContext(AppContext);

  useEffect(() => {}, [state.page]);
  return (
    <div className="button-container">
      <button onClick={handlePrevious} disabled={state.page === 1}>
        Previous
      </button>
      <button onClick={handleNext} disabled={state.page === 109}>
        Next
      </button>
    </div>
  );
}
