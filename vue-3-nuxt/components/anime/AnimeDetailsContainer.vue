<template>
  <section>
    <SharedGeneralCard
      :display-life-cycle-hooks="true"
      :title="animeData.selectedAnime.title"
      :show-edit-button="true"
      @edit-clicked="onModalDisplay"
    >
      <AnimeDetails :anime-data="animeData" />
    </SharedGeneralCard>

    <SharedInputModal
      :show-modal="showModal"
      :input-value="animeData.description"
      @confirm-clicked="(e: string) => onModalConfirm(e)"
      @cancel-clicked="onModalCancel"
    />

    <!-- display buttons for dynamic component -->
    <div class="grid mt-20 place-content-center">
      <div class="flex items-center justify-center gap-4 mb-10">
        <button class="bg-blue-500 general" @click="dynamicComponent = CompShark">Shark</button>
        <button class="bg-white general" @click="dynamicComponent = CompCow">Cow</button>
        <button class="bg-red-400 general" @click="onThrowError">Throw Error</button>
      </div>

      <!-- dynamic component -->
      <keep-alive>
        <component :is="dynamicComponent" />
      </keep-alive>
    </div>
  </section>
</template>

<script setup lang="ts">
import { AnimeTypeStore } from '~/types';
import CompCow from '../shared/CompCow.vue';
import CompShark from '../shared/CompShark.vue';

const route = useRoute();
const animeStore = useAnimeStore();

const showModal = ref<boolean>(false);
const animeId = route.params.id as string;
const animeData = animeStore.getAnimeTypeStoreById(Number(animeId)) as AnimeTypeStore;

const dynamicComponent = shallowRef();

const onModalDisplay = () => {
  showModal.value = true;
};

const onModalCancel = () => {
  showModal.value = false;
};

const onModalConfirm = (newValue: string) => {
  animeStore.editAnimeInStore(animeData.selectedAnime.mal_id, newValue);
  showModal.value = false;
};

const onThrowError = () => {
  throw new Error('This is an error');
};

// used to display loading state for suspense
await $fetch('/api/anime/get-by-id');
</script>

<style scoped lang="sass"></style>
