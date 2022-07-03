<template>
  <div>
    <header>
      <nav>
        <ul class="mx-4 list-disc">
          <NuxtLink to="/">Top</NuxtLink>
          &gt;
          <NuxtLink to="/ja">Ja</NuxtLink>
          &gt;
          <NuxtLink to="/ja/hello">Hello</NuxtLink>
        </ul>
      </nav>
    </header>

    <main>
      <ContentDoc class="px-4 py-4 mx-4 my-4 border rounded bg-slate-100"/>
    </main>
  </div>
</template>
