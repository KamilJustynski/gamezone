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

export interface GameDetailsScheme {
  description: string;
  developer: string;
  freetogame_profile_url: string;
  short_description:string
  game_url: string;
  genre: string;
  minimum_system_requirements: GameDetailsSystem;
  platform: string;
  publisher: string;
  release_date: string;
  screenshots: GameDetailsScreenshots[];
  status: string;
  thumbnail: string;
  title: string;
}

export interface GameDetailsSystem {
  graphics: string;
  memory: string;
  os: string;
  processor: string;
  storage: string;
}

export interface GameDetailsScreenshots {
  id: number;
  image: string;
}
