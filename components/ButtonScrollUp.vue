<template>
  <div class="w-full flex justify-end my-10 pr-8">
    <Button
      v-if="showButton"
      class="border cursor-pointer flex items-center justify-center border-borderPerso hover:bg-gray-700 rounded-xl p-4 transition hover:scale-105"
      @click="scrollTop"
    >
      <Icon h="1.75" name="ArrowBigUpDash" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const showButton = ref(false);

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const checkScroll = () => {
  showButton.value = window.scrollY > 300;
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>
