<template>
  <a
    v-if="href"
    :href="href"
    v-bind="$attrs"
    :class="[
      'inline-flex items-center justify-center gap-3 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[0.98]',
      'rounded-[8px]',
      variantClasses
    ]"
  >
    <span v-if="content">{{ content }}</span>
    <component v-if="icon" :is="iconComponent" :class="['w-5 h-5', { 'animate-spin': icon === 'Loader2' }]" :stroke-width="2" />
  </a>
  <button
    v-else
    v-bind="$attrs"
    :class="[
      'inline-flex items-center justify-center gap-3 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[0.98]',
      'rounded-[8px]',
      variantClasses
    ]"
  >
    <span v-if="content">{{ content }}</span>
    <component v-if="icon" :is="iconComponent" :class="['w-5 h-5', { 'animate-spin': icon === 'Loader2' }]" :stroke-width="2" />
  </button>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';
import type { ButtonProps } from '~/types/components/commons/ButtonProps';

defineOptions({
  inheritAttrs: false
});

const { content, icon, variant, href } = defineProps<ButtonProps>();

const iconComponent = computed(() => {
  if (!icon) return null;
  return defineAsyncComponent(() => import('lucide-vue-next').then(module => module[icon]));
});

const variantClasses = computed(() => {
  const variants = {
    primary: 'px-4 py-2 bg-purple-600 text-white border-2 border-purple-600 hover:bg-transparent hover:text-purple-600 dark:hover:text-white',
    secondary: 'px-4 py-2 bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 dark:hover:from-gray-700 dark:hover:to-gray-800 from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 dark:text-white text-gray-800 border dark:border-gray-600 border-gray-300 dark:hover:border-gray-500 hover:border-gray-400'
  };

  return variants[variant];
});
</script>
