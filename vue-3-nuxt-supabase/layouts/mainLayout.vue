<template>
  <div>
    <nav class="flex items-center justify-between w-full gap-4 p-4 bg-green-700">
      <NuxtLink to="/anime"> Dashboard </NuxtLink>
      <NuxtLink to="/login" @click="onLogOut"> Logout </NuxtLink>
    </nav>

    <!-- banner -->
    <SharedBanner :banner-time="8" />

    <div class="flex items-center justify-around gap-10 mt-20">
      <h3 class="text-xl">Welcome: {{ user?.email }}</h3>
      <NuxtLink class="bg-red-400 general" to="/lololo">Non Existing Route</NuxtLink>
    </div>

    <main class="w-full max-w-[840px] mx-auto mt-20 px-3 sm:px-6">
      <!-- <slot /> -->
      <NuxtPage />
    </main>

    <!-- bottom sticky -->
    <div v-sticky:bottom>This is a bottom</div>
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
const auth = useSupabaseAuthClient();

const animeStore = useAnimeStore();

const onLogOut = () => {
  auth.auth.signOut();
  animeStore.clearAnimeStore();
};

useHead({
  titleTemplate: 'App Name - %s'
});
</script>

<style scss>
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(60px);
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
