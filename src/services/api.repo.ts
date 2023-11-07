import { Repo } from '../models/character';

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
