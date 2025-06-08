<script setup lang="ts">
const { data: tasks, error, status } = await useFetch("/api/tasks");
</script>

<template>
  <h1>Hello Nuxt not Next</h1>
  <article v-for="task in tasks" :key="task.id">{{ task.title }}</article>
</template>
