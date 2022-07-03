<template>
  <div>
    <div>
      <ul>
        <NuxtLink to="/">Top</NuxtLink>
        &gt;
        <NuxtLink to="/en">En</NuxtLink>
      </ul>
      Hello!
    </div>
  </div>
</template>

<script setup>
definePageMeta({
    layout: "custom-en",
});
</script>