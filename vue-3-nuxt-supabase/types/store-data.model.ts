import { AnimeData } from './api-anime-data.model';

export type AnimeTypeStoreForm = {
  selectedAnime: AnimeData;
  description: string;
  isCool: boolean;
};

export type AnimeTypeStore = AnimeTypeStoreForm & {
  userId: string;
};
