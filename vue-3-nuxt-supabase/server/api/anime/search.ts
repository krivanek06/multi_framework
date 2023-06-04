import { AnimeData } from '../../../types';

const ANIME_API = 'https://api.jikan.moe/v4/anime';

export default defineEventHandler(async (event) => {
  const { query } = getQuery(event);

  const response = await $fetch<{ data: AnimeData[] }>(`${ANIME_API}?q=${query}&limit=6`);

  return response?.data ?? [];
});
