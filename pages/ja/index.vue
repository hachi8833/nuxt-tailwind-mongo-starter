<template>
  <div>
    <ul>
      <NuxtLink to="/">Top</NuxtLink>
      &gt;
      <NuxtLink to="/ja">Ja</NuxtLink>
    </ul>
    こんにちは
    <NuxtLink to="/ja/hello">hello</NuxtLink>
  </div>
</template>

<script setup>
definePageMeta({
    layout: "custom-ja",
});
</script>