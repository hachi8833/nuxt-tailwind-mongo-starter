<template>
  <div>
    <header>
      <nav>
        <ul class="mx-4 list-disc">
          <NuxtLink :to="`/`">{{ t('top') }}</NuxtLink>
          &gt;
          <NuxtLink :to="`/${locale}`">{{ t('locale home') }}</NuxtLink>
          &gt;
          <NuxtLink :to="`/${locale}/news/hello`">{{ t('news: hello') }}</NuxtLink>
        </ul>
      </nav>
    </header>

    <main>
      <ContentDoc class="px-4 py-4 mx-4 my-4 border rounded bg-slate-100"/>
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
  "news: hello": "News: hello",
}
</i18n>
