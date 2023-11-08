import { AppContext } from '../../context/app.context';
import { useContext, useEffect } from 'react';

export function Pagination() {
  const {
    characterTools: { state, handleNext, handlePrevious },
  } = useContext(AppContext);

  useEffect(() => {
    console.log(state.page);
  }, [state.page]);

  return (
    <>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
}
