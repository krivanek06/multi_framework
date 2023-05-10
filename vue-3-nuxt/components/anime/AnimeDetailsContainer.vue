<template>
  <section>
    <SharedGeneralCard :title="animeData.selectedAnime.title" :show-edit-button="true" @edit-clicked="onModalDisplay">
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

const props = defineProps({
  animeId: {
    type: String,
    required: true
  }
});

const animeStore = useAnimeStore();
const animeData = animeStore.getAnimeTypeStoreById(Number(props.animeId)) as AnimeTypeStore;

const showModal = ref<boolean>(false);

const dynamicComponent = shallowRef();

onMounted(() => {
  console.log('mounted');
});

onUnmounted(() => {
  console.log('destroyed');
});

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

// used to display loading state for suspense
await $fetch('/api/anime/get-by-id');
</script>

<style scoped lang="sass"></style>
