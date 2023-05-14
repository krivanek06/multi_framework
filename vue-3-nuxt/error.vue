<template>
  <div class="mt-[200px]">
    <div class="grid gap-10 place-content-center">
      <h1 class="text-3xl text-center text-red-400">Error page</h1>
      You can display the error locally here: {{ error }}
      <button class="bg-gray-300 general" @click="handleError">This will clear the error.</button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: {
    type: Error,
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
