import { SyntheticEvent, useContext } from 'react';
import { Character, Status } from '../../models/character';
import { AppContext } from '../../context/app.context';
import { useNavigate, useParams } from 'react-router-dom';

export function FormModify() {
  const { modifyCharacter } = useContext(AppContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = (event: SyntheticEvent) => {
    const form = event.target as HTMLFormElement;
    event.preventDefault();
    const newCharacter: Partial<Character> = {
      id: id,
      _id: id,
      Nombre: (form.elements.namedItem('characterName') as HTMLInputElement)
        .value,
      Historia: (
        form.elements.namedItem('characterHistory') as HTMLInputElement
      ).value,
      Imagen: (form.elements.namedItem('characterImage') as HTMLInputElement)
        .value,
      Genero: (form.elements.namedItem('characterGender') as HTMLInputElement)
        .value,
      Estado: (form.elements.namedItem('characterState') as HTMLInputElement)
        .value as Status,
      Ocupacion: (
        form.elements.namedItem('characterOcupation') as HTMLInputElement
      ).value,
    };
    modifyCharacter(id as string, newCharacter);
    form.reset();
    navigate('/favorites');
  };

  return (
    <form className="character-form" onSubmit={handleSubmit}>
      <section className="Character Data">
        <div className="form-control">
          <label htmlFor="character-name">Nombre</label>
          <input
            type="text"
            name="characterName"
            id="character-name"
            placeholder="Nombre del personaje"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="character-history">Historia</label>
          <input
            type="text"
            name="characterHistory"
            id="character-history"
            placeholder="Historia del personaje"
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="character-image">Imagen</label>
          <input
            type="text"
            name="characterImage"
            id="character-image"
            placeholder="Url de la imagen"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="character-gender">Género</label>
          <select name="characterGender" id="alive-character">
            Status
            <option value="default" disabled>
              Selecciona el género del personaje
            </option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Desconocido">Desconocido</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="character-state">Estado</label>
          <select name="characterState" id="alive-character">
            Status
            <option value="default" disabled>
              Selecciona el Estado del personaje
            </option>
            <option value="Vivo">Vivo</option>
            <option value="Fallecido">Fallecido</option>
            <option value="Ficticio">Ficticio</option>
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="character-ocupation">Ocupación</label>
          <input
            type="text"
            name="characterOcupation"
            id="character-ocupation"
            placeholder="Ocupación del personaje"
            required
          />
        </div>
        <input type="submit" onSubmit={handleSubmit} value={'Enviar'} />
      </section>
    </form>
  );
}
