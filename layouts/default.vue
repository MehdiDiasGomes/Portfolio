<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <div class="flex-grow">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup></script>
