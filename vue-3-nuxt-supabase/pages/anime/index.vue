<template>
  <section>
    <AnimeForm @form-submit="onFormSubmit($event)" />

    <div class="mt-12 mb-3">Total Selected Data: {{ animeStore.getStoredAnime.length }}</div>

    <div class="flex flex-col gap-4">
      <SharedGeneralCard
        v-for="data of animeStore.getStoredAnime"
        :key="data.selectedAnime.popularity"
        :title="data.selectedAnime.title"
        :show-button-delete="true"
        :show-button-details="true"
        @details-clicked="onDetails(data)"
        @delete-clicked="onDelete(data)"
      >
        <AnimeDetails :anime-data="data" />
      </SharedGeneralCard>
    </div>

    <footer class="h-16"></footer>
  </section>
</template>

<script setup lang="ts">
import { AnimeTypeStore, AnimeTypeStoreForm } from '~/types';
const client = useSupabaseClient();
const user = useSupabaseUser();

definePageMeta({
  layout: 'main-layout'
});

useHead({
  title: 'Anime',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'List of anime content'
    }
  ]
});

const animeStore = useAnimeStore();

const onFormSubmit = async (value: AnimeTypeStoreForm) => {
  // animeStore.saveAnimeToStore(value);
  const newAnime: AnimeTypeStore = { ...value, userId: user.value?.id ?? '' };
  const { data } = await client.from('favourite_anime').insert([newAnime]);
  console.log(data);
};

function onDetails(data: AnimeTypeStore) {
  navigateTo(`/anime/${data.selectedAnime.mal_id}`);
  // $route.params.id = data.selectedAnime.mal_id;
}

const onDelete = (data: AnimeTypeStore) => {
  animeStore.deleteAnimeFromStore(data);
};
</script>

<style scoped></style>
