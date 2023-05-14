<template>
  <section>
    <Suspense>
      <template #default>
        <NuxtErrorBoundary>
          <!-- template -->
          <AnimeDetailsContainer />

          <!-- catch error -->
          <template #error="{ error }">
            <div class="grid gap-10 place-content-center">
              You can display the error locally here: {{ error }}
              <button class="bg-gray-300 general" @click="onResetError(error)">This will clear the error.</button>
            </div>
          </template>
        </NuxtErrorBoundary>
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

const onResetError = (error: Error) => {
  console.warn('error', error);
  clearError({
    redirect: '/anime'
  });
};
</script>

<style scoped></style>
