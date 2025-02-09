<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">
        Open
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56">
      <DropdownMenuLabel>Appearance</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuCheckboxItem v-model:checked="showStatusBar">
        <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem v-model:checked="showActivityBar">
        <NuxtLink :to="switchLocalePath('fr')">Français</NuxtLink>
      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script lang="ts" setup>
import type { DropdownMenuCheckboxItemProps } from 'radix-vue'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ref } from 'vue'

type Checked = DropdownMenuCheckboxItemProps['checked']

const showStatusBar = ref<Checked>(true)
const showActivityBar = ref<Checked>(false)
const showPanel = ref<Checked>(false)
const switchLocalePath = useSwitchLocalePath()
</script>
