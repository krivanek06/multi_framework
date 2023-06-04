<!-- eslint-disable vue/no-v-html -->
<template>
  <DefineTemplate v-slot="{ name, value }">
    <div class="space-x-1">
      <span
        class="text-base"
        :class="{ 'text-green-700': !props.animeData.isCool, 'text-yellow-700': props.animeData.isCool }"
      >
        {{ name }}
      </span>
      <span> {{ value ?? 0 }} </span>
    </div>
  </DefineTemplate>

  <article>
    <div class="flex gap-4 mb-2">
      <ReuseTemplate name="User" :value="props.animeData.userId" />

      <div v-if="props.animeData.description" class="w-[2px] bg-gray-300"></div>

      <ReuseTemplate v-if="props.animeData.description" name="Description" :value="props.animeData.description" />
    </div>
    <div class="flex gap-4">
      <ReuseTemplate name="Episodes" :value="props.animeData.selectedAnime.episodes" />

      <div class="w-[2px] bg-gray-300"></div>

      <ReuseTemplate name="Score" :value="props.animeData.selectedAnime.score" />

      <div class="w-[2px] bg-gray-300"></div>

      <ReuseTemplate name="Duration" :value="props.animeData.selectedAnime.duration" />

      <div class="w-[2px] bg-gray-300"></div>

      <div>Equation: {{ hardMathEquationMemo(props.animeData.selectedAnime.score ?? 1) }}</div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { AnimeTypeStore, hardMathEquationMemo } from '~/types';

const [DefineTemplate, ReuseTemplate] = createReusableTemplate<{ name: string; value?: string | number | null }>();

const props = defineProps<{
  animeData: AnimeTypeStore;
}>();
</script>

<style scoped></style>
