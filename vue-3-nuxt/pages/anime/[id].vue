<template>
  <section>
    <Suspense>
      <template #default>
        <AnimeDetailsContainer :anime-id="($route.params.id as string)" />
      </template>
      <template #fallback>
        <SharedLoader />
      </template>
    </Suspense>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'main-layout',
  middleware: 'unauthenticated-access'
});

const route = useRoute();
console.log('routedID: ', route.params.id);
// ^^ doesn't work
</script>

<style scoped></style>
