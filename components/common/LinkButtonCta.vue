<template>
  <div class="p-[2px] rounded-[15px] bg-gradient-to-r from-softSlate to-midnightOverlay w-fit">
    <div class="bg-gradient-to-br from-[#6971A2] to-[#272A3C] rounded-[15px] p-[1px]">
      <a target="_blank" :href="link" :class="[
        'flex items-center group justify-between text-white rounded-[15px] gap-[10px] py-[15px] px-5 w-full transition-colors duration-300',
        cn({
          'bg-gradient-to-r from-mauve to-purple-700 hover:from-purple-600 hover:to-purple-800': cta,
          'bg-gradient-to-r from-[#161A31] to-[#06091F] hover:from-[#23274a] hover:to-[#10133a]': !cta,
        })
      ]">
        <span>{{ label }}</span>
        <Icon v-if="icon" :name="icon" class="transition-transform duration-300 group-hover:rotate-12" />
      </a>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { cn } from '@/lib/utils';
import type { ButtonCtaProps } from '~/types/components/commons/ButtonCtaProps';

const { label, icon, cta, link } = defineProps<ButtonCtaProps>()
</script>