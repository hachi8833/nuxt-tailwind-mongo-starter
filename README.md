# Nuxt3 + TailwindCSS + MongoDB Example

Deploy your Nuxt3 + TailwindCSS + MongoDB project to Vercel with zero configuration.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tanquar/nuxt-tailwind-mongo-starter)

_Live Example: https://nuxt-tailwind-mongo-starter.vercel.app/_

## Prerequisites

Install `n` and `yarn`.

```bash
brew install n
brew install yarn
```

## Setup

Install the dependencies:

```bash
yarn install
```

## Setup MongoDB

Visit [MongoDB Atlas](https://www.mongodb.com/) and create an Atlas database.
Free tier should be sufficient for testing.
Define a connection user and password.

Set environment variables in Vercel:

```
(All)
MONGODB_URL=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority

(Production)
MONGODB_DBNAME=nuxt-tailwind-mongo-starter-prod

(Preview)
MONGODB_DBNAME=nuxt-tailwind-mongo-starter-prev

(Development)
MONGODB_DBNAME=nuxt-tailwind-mongo-starter-dev
```

Create a local `.env` file:

```
MONGODB_URL=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority
MONGODB_DBNAME=nuxt-tailwind-mongo-starter-dev
```

where `<user>` and `<password>` are the credentials you have just created in Atlas.

You can also create three different clusters and assign different credentials for each environment:

```
(All)
MONGODB_DBNAME=nuxt-tailwind-mongo-starter

(Production)
MONGODB_URL=mongodb+srv://<prod-user>:<password>@<prod-cluster>.mongodb.net/?retryWrites=true&w=majority

(Preview)
MONGODB_URL=mongodb+srv://<prev-user>:<password>@<prev-cluster>.mongodb.net/?retryWrites=true&w=majority

(Development)
MONGODB_URL=mongodb+srv://<dev-user>:<password>@<dev-cluster>.mongodb.net/?retryWrites=true&w=majority

(local `.env` file)
MONGODB_URL=mongodb+srv://<dev-user>:<password>@<dev-cluster>.mongodb.net/?retryWrites=true&w=majority
MONGODB_DBNAME=nuxt-tailwind-mongo-starter
```

## Allow IP in MongoDB Atlas

If Versel generates an error `Task timed out after 10.01 seconds`,
the Mongo DB Atlas is blocking an IP address of the Versel Server Function.
You need to allow `0.0.0.0` by visiting MongoDB Atlas > Security > Network Access > Add IP Address.

Note that allowing `0.0.0.0` will accept any IP address,
so make sure that the username and password are long and complex enough.

## Development

Start the development server on http://localhost:3000:

```bash
yarn dev
```

## Deploy Your Own

Build the application for production:

```bash
yarn build
```

## Amendments applied to Vercel setup of Nuxt3

Updated made to package.json:

```diff
= "scripts": {
-   "dev": "nuxi dev",
+   "dev": "nuxt dev",
-   "build": "nuxi build",
+   "build": "nuxt build",
...
= "devDependencies": {
-   "nuxt3": "latest",
+   "nuxt": "nuxt3@latest",
```

Updated made to nuxt.config.ts:

```diff
- import { defineNuxtConfig } from 'nuxt3'
+ import { defineNuxtConfig } from 'nuxt'
```

Commands executed:

```bash
% rm -rf node_modules
% rm -rf .nuxt
% rm yarn.lock
% yarn install
```

# Tips for implementation

## `layouts` of Nuxt3

1. Create `default.vue` and custom layouts:

~/layouts/default.vue:

```html
<template>
  <div>
    <header class="bg-zinc-200">
      <div>Default layout</div>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer class="bg-zinc-200">
      <div>Default footer</div>
    </footer>
  </div>
</template>
```

~/layouts/custom-ja.vue:

```html
<template>
  <div>
    <header class="bg-red-200">
      <div>Custom Ja layout</div>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer class="bg-red-200">
      <div>Custom Ja footer</div>
    </footer>
  </div>
</template>
```

~/layouts/custom-en.vue:

```html
<template>
  <div>
    <header class="bg-blue-300">
      <div>Custom En layout</div>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <div>Custom En footer</div>
    </footer>
  </div>
</template>
```

2. Create `~/pages/index.vue` as the entry point with `default` layout.
   ~/pages/index.vue:

```html
<template>
  <div>
    <h1>Welcome!</h1>
    <p>Choose locale</p>
    <ul>
      <li><NuxtLink to="/ja">ja</NuxtLink></li>
      <li><NuxtLink to="/en">en</NuxtLink></li>
    </ul>
  </div>
</template>
```

3. Create `~/pages/ja/ja.vue` that works as a skelton for all child items down this directory.
   Define the layout using `definePageMeta()` macro.

~/pages/ja/ja.vue:

```html
<template>
  <div>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: "custom-ja",
  });
</script>
```

4. Create `~/pages/ja/index.vue`.
   This file, and all the child pages, will inherit the layout defined in `ja.vue`.

~/pages/ja/index.vue:

```html
<template>
  <div>
    <nav>
      <ul>
        <NuxtLink to="/">Top</NuxtLink>
        &gt;
        <NuxtLink to="/ja">Ja</NuxtLink>
      </ul>
    </nav>
    こんにちは
    <ul class="mx-4 list-disc">
      <li>
        <NuxtLink to="/ja/hello">hello</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/ja/news/hello">content/hello</NuxtLink>
      </li>
    </ul>
  </div>
</template>
```

5. Within `~/pages/ja/` directory, create `hello/index.vue` as a child page using the same `custom-ja` layout.

~/pages/ja/hello/index.vue:

```html
<template>
  <div>
    <ul>
      <NuxtLink to="/">Top</NuxtLink>
      &gt;
      <NuxtLink to="/ja">Ja</NuxtLink>
      &gt;
      <NuxtLink to="/ja/hello">Hello</NuxtLink>
    </ul>
    <div>Hello! こんにちは!</div>
  </div>
</template>
```

6. Create `en/en.vue` (skelton), `en/index.vue`, and `en/hello/index.vue` in the same way.
