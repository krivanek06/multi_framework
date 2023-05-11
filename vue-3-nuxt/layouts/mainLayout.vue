<template>
  <div>
    <nav class="flex items-center justify-between w-full gap-4 p-4 bg-green-700">
      <NuxtLink to="/anime"> Dashboard </NuxtLink>
      <NuxtLink to="/login" @click="onLogOut"> Logout </NuxtLink>
    </nav>

    <!-- banner -->
    <SharedBanner :banner-time="8" />

    <!-- bottom sticky -->
    <div v-sticky:bottom>This is a bottom</div>

    <h3 class="mt-20 text-xl text-center">Welcome: {{ authenticationStore.user?.name }}</h3>

    <main class="w-full max-w-[840px] mx-auto mt-20 px-3 sm:px-6">
      <!-- <slot /> -->

      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
const authenticationStore = useAuthenticationStore();
const animeStore = useAnimeStore();

const onLogOut = () => {
  authenticationStore.logout();
  animeStore.clearAnimeStore();
};
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
