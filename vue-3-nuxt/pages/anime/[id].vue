<template>
  <section>
    <Suspense>
      <template #default>
        <AnimeDetailsContainer />
      </template>
      <template #fallback>
        <SharedLoader />
      </template>
    </Suspense>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'main-layout'
});

useHead({
  title: 'Anime Details',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Description of an anime'
    }
  ]
});
</script>

<style scoped></style>
