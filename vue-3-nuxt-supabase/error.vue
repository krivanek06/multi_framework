<template>
  <div class="mt-[120px]">
    <div class="grid gap-10 place-content-center p-10 max-w-[500px] m-auto">
      <h1 class="text-3xl text-center text-red-400">Error page</h1>
      <div>
        {{ error.message }}
      </div>
      <button class="bg-gray-300 general" @click="handleError">This will clear the error.</button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: {
    type: Object,
    required: true
  }
});

const handleError = () => {
  clearError({
    redirect: '/anime'
  });
};
</script>

<style scoped></style>
