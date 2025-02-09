<template>
  <div class="h-screen flex items-center justify-center">
    <div class="max-w-[800px] flex flex-col gap-3 mx-auto text-center z-10">
      <h1 class="text-white text-5xl">{{ t('header.title') }}
        <span class="text-[#CBACF9]">
          {{ t('header.span_title') }}
        </span>
      </h1>
      <h2 class="text-white text-1xl">
        {{ t('header.description') }}
      </h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()
</script>