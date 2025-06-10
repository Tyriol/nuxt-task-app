<script setup lang="ts">
import { FetchError } from "ofetch";

const errorMessage = ref("");
const loading = ref(false);
const taskName = ref("");

async function onSubmit() {
  if (!taskName.value.trim()) {
    errorMessage.value = "Task cannot be blank";
    return;
  }
  try {
    loading.value = true;
    errorMessage.value = "";
    const result = await $fetch("/api/tasks", {
      method: "POST",
      body: {
        title: taskName.value,
      },
    });
    navigateTo({
      name: "tasks-id",
      params: {
        id: result.id,
      },
    });
  } catch (e) {
    const error = e as FetchError;
    errorMessage.value = error.statusMessage || "An unexpected error has occurred";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="create-task-container">
    <form @submit.prevent="onSubmit">
      <label>
        Task:
        <input v-model="taskName" name="title" />
      </label>
      <div class="button-container"><button>Create</button></div>
    </form>
    <article v-if="loading" aria-busy="true" />
    <article v-else-if="errorMessage" class="error">{{ errorMessage }}</article>
  </div>
</template>

<style scoped>
.create-task-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
