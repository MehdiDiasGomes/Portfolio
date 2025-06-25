<template>
  <div :class="['w-full flex my-10', props.side === 'top' ? 'justify-end pr-8' : 'justify-center pr-0']">
    <Button
      class="border cursor-pointer flex bg-transparent items-center justify-center border-borderPerso hover:bg-[#12152D] rounded-xl p-4 transition"
      @click="props.side === 'top' ? scrollTop() : scrollBot()">
      <Icon h="1.75" :name="props.side === 'top' ? 'ArrowBigUpDash' : 'ArrowBigDownDash'" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

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
