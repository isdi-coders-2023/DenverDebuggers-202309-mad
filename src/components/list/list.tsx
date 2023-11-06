import { AppContext } from '../../context/app.context';
import { SyntheticEvent, useContext, useEffect } from 'react';

export function List() {
  const {
    characterTools: { characters, loadCharacters, page, setPage },
  } = useContext(AppContext);

  useEffect(() => {
    console.log(page);
  }, [page]);

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);
  console.log(characters);

  const handleNext = (event: SyntheticEvent) => {
    event.preventDefault();
    nextStep();
  };

  const handlePrevious = (event: SyntheticEvent) => {
    event.preventDefault();
    previousStep();
  };

  const previousStep = () => {
    setPage(page - 1);
    console.log(page);
  };

  const nextStep = () => {
    setPage(page + 1);
    console.log(page);
  };

  return (
    <>
      <p></p>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
}
