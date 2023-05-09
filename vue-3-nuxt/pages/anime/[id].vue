<template>
  <div>Details ID: {{ id }}</div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;
</script>

<style scoped></style>
