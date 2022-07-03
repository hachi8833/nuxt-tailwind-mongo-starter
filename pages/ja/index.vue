<template>
  <div>
    <header>
      <nav>
        <ul class="mx-4 list-disc">
          <NuxtLink to="/">Top</NuxtLink>
          &gt;
          <NuxtLink to="/ja">Ja</NuxtLink>
        </ul>
      </nav>
    </header>

    <main>
      こんにちは
      <ul class="mx-4 list-disc">
        <li>
          <NuxtLink to="/ja/hello">hello</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/ja/news/hello">content/hello</NuxtLink>
        </li>
      </ul>
    </main>
  </div>
</template>

