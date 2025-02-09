<template>
  <div class="h-screen flex items-center justify-center">
    <div class="max-w-[800px] flex flex-col items-center gap-7 mx-auto text-center z-10">
      <h1 class="text-white s font-extrabold leading-tight text-6xl">{{ t('header.title') }}
        <span class="text-primaryPerso">
          {{ t('header.span_title') }}
        </span>
      </h1>
      <h2 class="text-secondary text-xl mx-auto max-w-[500px]">
        {{ t('header.description') }}
      </h2>
      <Button
        class="border border-borderPerso bg-gradient-to-r from-slate-900 to-[#0d1132] rounded-xl py-7 px-8 transition duration-300 hover:scale-105">{{
          t('button.see_work') }}
        <Icon :stroke-width="1.75" name="ArrowUpRight" />
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()
</script>