<template>
  <div class="flex flex-col">
    <Navbar />
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>
