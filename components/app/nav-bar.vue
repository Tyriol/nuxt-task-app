<template>
  <nav class="container">
    <ul>
      <li>
        <NuxtLink to="/"><strong>Nuxt Tasks</strong></NuxtLink>
      </li>
    </ul>
    <ul>
      <li><NuxtLink :to="{ name: 'create' }">Create a task</NuxtLink></li>
    </ul>
  </nav>
</template>
