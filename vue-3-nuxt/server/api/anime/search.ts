import { AnimeData } from '~/types';

const ANIME_API = 'https://api.jikan.moe/v4/anime';

export default defineEventHandler(async (event) => {
  const { query } = getQuery(event);

  const response = (await $fetch(`${ANIME_API}?q=${query}&limit=6`)) as { data: AnimeData[] };

  return response?.data ?? [];
});
