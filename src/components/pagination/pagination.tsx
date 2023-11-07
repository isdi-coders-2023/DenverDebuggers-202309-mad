import { AppContext } from '../../context/app.context';
import { SyntheticEvent, useContext, useEffect } from 'react';

export function Pagination() {
  const {
    characterTools: { page, setPage },
  } = useContext(AppContext);

  useEffect(() => {
    console.log(page);
  }, [page]);

  const handleNext = (event: SyntheticEvent) => {
    event.preventDefault();
    setPage(page + 1);
  };

  const handlePrevious = (event: SyntheticEvent) => {
    event.preventDefault();
    setPage(page - 1);
  };

  return (
    <>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
}
