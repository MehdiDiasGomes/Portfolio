<template>
  <div :class="['w-full flex my-10', props.side === 'top' ? 'justify-end pr-8' : 'justify-center pr-0']">
    <Button
      :icon="props.side === 'top' ? 'ArrowBigUpDash' : 'ArrowBigDownDash'"
      variant="secondary"
      class="border border-borderPerso hover:bg-[#12152D] cursor-pointer"
      @click="props.side === 'top' ? scrollTop() : scrollBot()"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Button from "@/components/common/Button.vue";

const showButton = ref(false);

const props = defineProps<{ side: "top" | "bottom" }>();

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

const scrollBot = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
};
</script>
