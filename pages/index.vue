<template>
  <div>
    <main class="container px-4 mx-auto my-4">
      <h1 class="text-xl text-gray-800">
        {{ t('Welcome!') }}
      </h1>

      <Button outline @click="clicks++">{{ t('Click me') }}</Button>
      <p>
        {{ t('welcome to name', { name: 'Nuxt3' }) }}
      </p>
      <p>
        {{ t('you are {n}th visitor', { n: clicks }) }}
      </p>

      <hr />

      <p>
        {{ $t('hello from global file') }}
        <span>(Use `$t`)</span>
      </p>
      <h2>
        {{ $t('Change global locale') }}
      </h2>
      <ul class="mx-4 list-disc">
        <li><button @click="$i18n.locale = 'ja'">ja</button></li>
        <li><button @click="$i18n.locale = 'en'">en</button></li>
      </ul>
      
      <hr />

      <p>
        {{ t('hello from local locale section') }}
        <span>(Use `t`)</span>
      </p>
      <h2>{{ t('Choose page locale') }}</h2>
      <ul class="mx-4 list-disc">
        <li><button @click="setPageLocale('ja')">ja</button></li>
        <li><button @click="setPageLocale('en')">en</button></li>
      </ul>

      <hr />

      <h2>
        {{ t('Choose directory locale') }}
      </h2>
      <ul class="mx-4 list-disc">
        <li><NuxtLink to="/ja">ja</NuxtLink></li>
        <li><NuxtLink to="/en">en</NuxtLink></li>
      </ul>
    </main>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

const clicks = ref(0);

function setPageLocale(value) {
  locale.value = value;
}
</script>

<i18n locale="ja">
{
  "Welcome!": "ようこそ!",
  "hello from local locale section": "ローカルのロケールセクションからの「こんにちは」",
  "Click me": "クリックしてください",
  "welcome to name": "{name}へようこそ!",
  "you are {n}th visitor": "あなたは{n}番目の訪問者です。",
  "Choose page locale": "ページのロケールを選択",
  "Choose directory locale": "ディレクトリのロケールを選択"
}
</i18n>

<i18n locale="en">
{
  "Welcome!": "Welcome!",
  "hello from local locale section": "Hello from local locale section",
  "Click me": "Click me",
  "welcome to name": "Welcome to {name}!",
  "you are {n}th visitor": "You are {n}th visitor.",
  "Choose page locale": "Choose page locale",
  "Choose directory locale": "Choose directory locale"
}
</i18n>
