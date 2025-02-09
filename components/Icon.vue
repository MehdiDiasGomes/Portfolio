<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import * as icons from 'lucide-vue-next'
import type IconProps from '~/types/components/props/IconProps';

const { name, size, color, strokeWidth, defaultClass } = defineProps<IconProps>()

const icon = ref<Component | null>(null)

watchEffect(() => {
  icon.value = icons[name as keyof typeof icons] as Component
})
</script>

<template>
  <component :is="icon" :size="size" :color="color" :stroke-width="strokeWidth" :default-class="defaultClass" />
</template>