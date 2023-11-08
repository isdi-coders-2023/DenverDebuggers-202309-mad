import { useCharacters } from '../hooks/use.character';
import { AppContext, ContextStructure } from './app.context';

type Props = {
  children: JSX.Element;
};

export function AppContextProvider({ children }: Props) {
  const charactersState = useCharacters();
  const context: ContextStructure = charactersState;
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
