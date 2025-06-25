<template>
  <div class="flex flex-col">
    <Navbar />
    <div class="flex-grow">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup></script>
