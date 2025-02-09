<template>
  <div class="h-screen flex items-center justify-center">
    <div class="max-w-[800px] flex flex-col gap-3 mx-auto text-center z-10">
      <h1 class="text-white font-extrabold text-6xl">{{ t('header.title') }}
        <span class="text-primaryPerso">
          {{ t('header.span_title') }}
        </span>
      </h1>
      <h2 class="text-secondary text-xl mx-auto max-w-[500px]">
        {{ t('header.description') }}
      </h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()
</script>