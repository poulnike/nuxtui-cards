<template>
  <div class="min-h-screen">
    <UButton> Выйти</UButton>
  </div>
</template>

<script lang="ts" setup>
const userStore = useUserStore();

definePageMeta({
  middleware: ['auth'],
});
</script>

<style scoped></style>
