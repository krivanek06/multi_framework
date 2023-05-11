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
</script>

<style scoped></style>
