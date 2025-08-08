<template>
  <div class="p-[2px] rounded-[15px] bg-gradient-to-r from-softSlate to-midnightOverlay w-fit">
    <div class="bg-gradient-to-br from-[#6971A2] to-[#272A3C] rounded-[15px] p-[1px]">
      <a
        target="_blank"
        :href="link"
        :class="[
          'group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-[15px] px-5 font-medium text-white w-full transition hover:scale-110',
          cn({
            'bg-gradient-to-r from-mauve to-purple-700': cta,
            'bg-gradient-to-r from-[#161A31] to-[#06091F]': !cta,
          })
        ]"
      >
        <span class="flex items-center gap-[10px] justify-between w-full">{{ label }}<Icon v-if="icon" :name="icon" class="ml-2 transition-transform duration-300" /></span>
        <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
          <div class="relative h-full w-8 bg-white/20"></div>
        </div>
      </a>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { cn } from '@/lib/utils';
import type { ButtonCtaProps } from '~/types/components/commons/ButtonCtaProps';

const { label, icon, cta, link } = defineProps<ButtonCtaProps>()
</script>