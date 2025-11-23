<template>
  <div class="flex flex-col min-h-screen overflow-x-hidden max-w-full">
    <Navbar />
    <main class="flex-1 overflow-x-hidden max-w-full">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.3s ease-in-out;
}

.layout-enter-from {
  opacity: 0;
}

.layout-leave-to {
  opacity: 0;
}
</style>
