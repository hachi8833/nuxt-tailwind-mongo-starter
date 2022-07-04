<template>
  <div>
    <header>
      <nav>
        <ul class="mx-4 list-disc">
          <NuxtLink :to="`/`">{{ t('top') }}</NuxtLink>
          &gt;
          <NuxtLink :to="`/${locale}`">{{ t('locale home') }}</NuxtLink>
        </ul>
      </nav>
    </header>

    <main>
      {{ t('hello') }}
      <ul class="mx-4 list-disc">
        <li>
          <NuxtLink :to="`/${locale}/hello`">hello</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="`/${locale}/news/hello`">content/hello</NuxtLink>
        </li>
      </ul>
    </main>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n();
locale.value = 'en';
</script>

<i18n locale="en">
{
  "top": "Top",
  "locale home": "Locale Home",
  "hello": "Hello!",
}
</i18n>
