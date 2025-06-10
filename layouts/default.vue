<template>
  <div>
    <AppNavBar />
    <main class="container">
      <slot />
    </main>
  </div>
</template>

<style>
.button-container {
  display: flex;
  justify-content: end;
  gap: 1rem;
}

.error {
  color: red;
}

.done {
  text-decoration: line-through;
}
</style>
