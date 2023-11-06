
type Estado = 'Vivo' | 'Fallecido' | 'Ficticio';


export type Character = {
  _id: string;
  Nombre: string;
  Historia: string;
  Imagen: string;
  Genero: string;
  Estado: Estado;
  Ocupacion: string;
};
