<script setup lang="ts">
const {
  data: tasks,
  error,
  status,
} = await useFetch("/api/tasks", {
  lazy: true,
});
</script>

<template>
  <article v-if="status === 'pending'" aria-busy="true" />
  <article class="error" v-else-if="error">{{ error.statusMessage }}</article>
  <div v-else>
    <article v-if="tasks?.length === 0">Add a task to get started</article>
    <article v-else v-for="task in tasks" :key="task.id">{{ task.title }}</article>
  </div>
</template>
