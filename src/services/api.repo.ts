import { Character, Repo } from '../models/character';

export class ApiSimpsons {
  url: string;
  page: number;
  characterUrl: string;
  constructor(page: number) {
    this.url = 'https://apisimpsons.fly.dev/api/personajes?limit=6&page=';
    this.page = page;
    this.characterUrl = this.url + this.page;
  }

  async getAll(): Promise<Repo> {
    const response = await fetch(this.characterUrl);
    console.log(this.characterUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}

export class ApiSimpsonsPrivate {
  privateApiUrl = 'http://localhost:3000/privateCharacters';

  async getPrivateCharacters(): Promise<Character[]> {
    const response = await fetch(this.privateApiUrl);
    if (!response.ok) throw new Error(response.status + '' + response.status);
    return response.json();
  }

  async createCharacter(newCharacter: Partial<Character>): Promise<Character> {
    const response = await fetch(this.privateApiUrl, {
      method: 'POST',
      body: JSON.stringify(newCharacter),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }

  async modifyCharacter(
    id: Character['id'],
    updatedCharacter: Partial<Character>
  ): Promise<Character> {
    const finalUrl = `${this.privateApiUrl}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'PATCH',
      body: JSON.stringify(updatedCharacter),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }

  async deleteCharacter(id: Character['id']): Promise<Character[]> {
    const finalUrl = `${this.privateApiUrl}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'DELETE',
    });
    return response.json();
  }
}
