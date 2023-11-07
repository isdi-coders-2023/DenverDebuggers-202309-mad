import { AppContext } from '../../context/app.context';
import { useContext, useEffect } from 'react';

export function Pagination() {
  const {
    characterTools: { page, handleNext, handlePrevious },
  } = useContext(AppContext);

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
}
