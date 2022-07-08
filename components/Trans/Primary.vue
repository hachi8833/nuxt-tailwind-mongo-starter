<template>
  <section class="max-w-screen-2xl bg-gray-100 px-4 md:px-8 mx-auto">

    <h2 class=" text-black-800 text-xl sm:text-2xl md:text-3xl font-bold mt-4 md:mb-8"
    >主要な翻訳言語</h2>
    <div class="flex justify-center">
      <ul class="rounded-lg">
          <li v-for="item of primaryLanguage" class="listItem" :key="item.title">
            {{ item.title }}
          </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const primaryLanguage = [
  { title: '英語' },
  { title: '韓国語（ハングル）' },
  { title: 'タイ語' },
  { title: 'フランス語' },
  { title: 'ロシア語' },
  { title: '中国語（繁体字・簡体字）' },
  { title: 'タガログ語' },
  { title: 'ベトナム語' },
  { title: 'ドイツ語' },
  { title: 'その他のアジア・ヨーロッパ言語' },
]
</script>

<style lang="postcss" scoped>
  .listItem {
    @apply px-6 py-2 border-b border-gray-200 w-full rounded-t-lg text-lg;
  }
</style>