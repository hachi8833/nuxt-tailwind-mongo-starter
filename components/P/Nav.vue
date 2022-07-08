<template>
  <!-- nav - start -->
  <nav class="hidden lg:flex gap-12 2xl:ml-16">
    <template v-for="item of menuItems">
      <a :href="item.href" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-sm font-semibold transition duration-100">
        {{ item.title }}
      </a>
    </template>
  <!-- nav - end -->
  </nav>
</template>

<script setup>
const menuItems = [
  { href: 'translation', title: '翻訳サービス' },
  { href: 'research', title: '海外・国内リサーチ' },
  { href: 'marketing', title: 'デジタルマーケティング' },
  { href: 'consulting', title: '海外ビジネスコンサル' },
]
</script>