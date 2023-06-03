import { AnimeData } from './api-anime-data.model';

export type User = {
  name: string;
};

export type AnimeTypeStore = {
  selectedAnime: AnimeData;
  description: string;
  isCool: boolean;
  user: User;
};
