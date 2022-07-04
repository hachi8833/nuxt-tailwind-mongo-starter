<template>
  <div>
    <main class="container px-4 mx-auto my-4">
      <h1 class="text-xl text-gray-800">
        Welcome!
      </h1>
      <Button outline @click="clicks++">Click me</Button>
      {{ t('welcome to name', { name: 'Nuxt3' }) }}
      {{ t('you are nth visitor', { nth: clicks }) }}
      <p>
        Choose locale
      </p>
      <ul class="mx-4 list-disc">
        <li><NuxtLink to="/ja">ja</NuxtLink></li>
        <li><NuxtLink to="/en">en</NuxtLink></li>
      </ul>
    </main>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const clicks = ref(0);
</script>