<script setup lang="ts">
const route = useRoute();

const {
  data: task,
  error,
  status,
} = await useFetch(`/api/tasks/${route.params.id}`, {
  lazy: true,
});

async function toggleDone() {
  if (!task.value) return;

  try {
    const result = await $fetch(`/api/tasks/${task.value.id}`, {
      method: "PATCH",
      body: {
        done: !task.value.done,
      },
    });

    if (!result) throw Error;
    task.value.done = result[0].done;
  } catch (error) {
    console.error(error);
  }
}

async function removeTask() {
  if (!task.value) return;

  try {
    const result = await $fetch(`/api/tasks/${task.value.id}`, {
      method: "DELETE",
    });
    if (!result) throw Error;
    navigateTo("/");
  } catch {
    console.error(error);
  }
}
</script>

<template>
  <article v-if="status === 'pending'" aria-busy="true" />
  <article class="error" v-else-if="error">{{ error.statusMessage }}</article>
  <div v-else-if="task">
    <article>
      <label>
        <input @input="toggleDone" type="checkbox" :checked="task.done" />
      </label>
      <span :class="{ done: task.done }">{{ task.title }}</span>
    </article>
    <div class="button-container">
      <button @click="removeTask">Remove</button>
    </div>
  </div>
</template>
