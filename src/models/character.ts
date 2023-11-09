export type Status = 'Vivo' | 'Fallecido' | 'Ficticio';

export type Character = {
  _id: string;
  Nombre: string;
  Historia: string;
  Imagen: string;
  Genero: string;
  Estado: Status;
  Ocupacion: string;
};

export type Repo = {
  docs: Character[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number;
};
