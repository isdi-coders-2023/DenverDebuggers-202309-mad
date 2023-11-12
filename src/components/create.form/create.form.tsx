import { SyntheticEvent, useContext } from 'react';
import { Character, Status } from '../../models/character';
import { AppContext } from '../../context/app.context';
import { useNavigate, useParams } from 'react-router-dom';
import './create.form.scss';
export function FormCreate() {
  const { addCharacter, modifyCharacter } = useContext(AppContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleSubmit = (event: SyntheticEvent) => {
    const form = event.target as HTMLFormElement;
    event.preventDefault();
    let idRandom = crypto.randomUUID();
    const newCharacter: Partial<Character> = {
      id: idRandom,
      _id: idRandom,
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
    if (id === 'new') {
      addCharacter(newCharacter);
    } else {
      modifyCharacter(id as string, newCharacter);
    }
    form.reset();

    navigate('/favorites');
  };

  return (
    <form className="character-form" onSubmit={handleSubmit}>
      <div className="form-container">
        <label htmlFor="character-name">Nombre</label>
        <div className="name-input">
          <input
            type="text"
            name="characterName"
            id="character-name"
            placeholder="Nombre del personaje"
            required
          />
        </div>
      </div>
      <div className="character-container">
        <label htmlFor="character-history">Historia</label>
        <input
          type="text"
          name="characterHistory"
          id="character-history"
          placeholder="Historia del personaje"
          required
        />
      </div>
      <div className="image-container">
        <label htmlFor="character-image">Imagen</label>
        <input
          type="text"
          name="characterImage"
          id="character-image"
          placeholder="Url de la imagen"
          required
        />
      </div>
      <div className="gender-container">
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
      <div className="state-container">
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
      <div className="ocupation-container">
        <label htmlFor="character-ocupation">Ocupación</label>
        <input
          type="text"
          name="characterOcupation"
          id="character-ocupation"
          placeholder="Ocupación del personaje"
          required
        />
      </div>
      <div className="button-submit">
        <input type="submit" value={'Enviar'} />
      </div>
    </form>
  );
}
