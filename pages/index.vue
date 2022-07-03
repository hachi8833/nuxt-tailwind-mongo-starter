<template>
  <div class="container px-4 mx-auto my-4">
    <h1 class="text-xl text-gray-800">
      Welcome!
    </h1>
    <Button outline>Click me</Button>
    <p>
      Choose locale
    </p>
    <ul class="bullet">
      <li><NuxtLink to="/ja">ja</NuxtLink></li>
      <li><NuxtLink to="/en">en</NuxtLink></li>
    </ul>
  </div>
</template>
