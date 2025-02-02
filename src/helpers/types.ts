export interface Game {
  id: number;
  title: string;
  game_url: string;
  platform?: string;
  developer: string;
  genre: string;
  publisher?: string;
  release_date: string;
  short_description: string;
  thumbnail: string;
}
