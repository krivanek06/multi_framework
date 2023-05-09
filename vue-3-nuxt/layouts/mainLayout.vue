<template>
  <div>
    <nav class="flex items-center justify-between w-full gap-4 p-4 bg-green-700">
      <NuxtLink to="/dashboard"> Dashboard </NuxtLink>
      <NuxtLink to="/login" @click="onLogOut"> Logout </NuxtLink>
    </nav>

    <!-- banner -->
    <!-- <Banner :banner-time="8" /> -->

    <!-- bottom sticky -->
    <!-- <div v-sticky:bottom>This is a bottom</div> -->

    <!-- <h3 class="mt-20 text-xl text-center">Welcome: {{ authenticationStore.user?.name }}</h3> -->

    <main class="w-full max-w-[840px] mx-auto mt-20 px-3 sm:px-6">
      <RouterView v-slot="{ Component, route }" class="route-view">
        <Transition name="fade" mode="out-in">
          <div :key="route.path">
            <component :is="Component" />
          </div>
        </Transition>
      </RouterView>
    </main>
  </div>
</template>

<script setup lang="ts">
const onLogOut = () => {
  //   authenticationStore.logout();
  //   animeStore.clearAnimeStore();
  console.log('loaaal');
};
</script>
