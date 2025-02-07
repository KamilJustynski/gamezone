export interface GameScheme {
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
  short_description: string;
  game_url: string;
  genre: string;
  minimum_system_requirements: GameDetailsSystemScheme;
  platform: string;
  publisher: string;
  release_date: string;
  screenshots: GameDetailsScreenshotsScheme[];
  status: string;
  thumbnail: string;
  title: string;
}

interface GameDetailsSystemScheme {
  graphics: string;
  memory: string;
  os: string;
  processor: string;
  storage: string;
}

interface GameDetailsScreenshotsScheme {
  id: number;
  image: string;
}

export interface PaginationScheme {
  games: GameScheme[];
  page: number;
  totalPages: number;
  endIndex: number;
  onClickNext: () => void;
  onClickPrev: () => void;
  lastPage: () => void;
  firstPage: () => void;
}
