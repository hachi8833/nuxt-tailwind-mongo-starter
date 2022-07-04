<template>
  <div>
    <header>
      <nav>
        <ul class="mx-4 list-disc">
          <NuxtLink :to="`/`">{{ t('top') }}</NuxtLink>
          &gt;
          <NuxtLink :to="`/${locale}`">{{ t('locale home') }}</NuxtLink>
          &gt;
          <NuxtLink :to="`/${locale}/hello`">{{ t('hello posts') }}</NuxtLink>
        </ul>
      </nav>
    </header>

    <main>
      <template v-for="greeting of greetings">
        <div class="px-4 py-4 mx-4 my-4 bg-green-100 border rounded-lg">
          <div>
            <div class="text-zinc-700 text-size-lg">
              <input type="text" v-model="greeting.message" class="w-full px-2 py-1 bg-green-100 rounded" />
            </div>

            <div class="px-4 py-2">
              <div class="px-4 py-2 bg-green-200 border rounded-lg">
                <div class="flex text-sm text-zinc-700">
                  <div class="px-2">{{ t('ID') }}</div>
                  <div class="px-2">{{ greeting._id }}</div>
                </div>

                <div class="flex text-sm text-zinc-700">
                  <div class="px-2">{{ t('Created') }}</div>
                  <div class="px-2">{{ greeting.created_at }}</div>
                </div>

                <div class="flex text-sm text-zinc-700">
                  <div class="px-2">{{ t('Updated') }}</div>
                  <div class="px-2">{{ greeting.updated_at }}</div>
                </div>
              </div>
            </div>

            <Button
              class="mx-2 my-2"
              @click="update(greeting._id)"
            >
              <span>
                {{ t('Update') }}
              </span>
            </Button>

            <Button
              class="mx-2 my-2"
              @click="remove(greeting._id)"
            >
              <span>
                {{ t('Delete') }}
              </span>
            </Button>
          </div>
        </div>
      </template>

      <form class="mx-4 my-4 bg-yellow-100 border rounded-lg">
        <div class="px-4 py-4">
          <div>
            <label>
              <div class="text-sm text-zinc-700">
                <div>{{ t('Say hello:') }}</div>
              </div>
              <input type="text" class="w-full px-2 py-1 border rounded text-zinc-700" v-model="form.message" />
            </label>
          </div>

          <Button
            class="mx-2 my-2"
            type="submit"
            @click.prevent="submit"
          >
            <span>
              {{ t('Add') }}
            </span>
          </Button>
        </div>
      </form>
    </main>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n();
locale.value = 'en';

const greetings = ref([]);

const { data } = await useFetch(`/api/hello`);
greetings.value = data.value.greetings;

const form = reactive({
  message: "",
});

function submit() {
  $fetch(`/api/hello`, {
    method: "POST",
    body: {
      params: {
        message: form.message,
      },
    },
  }).then((result) => {
    greetings.value.push(...result.greetings);
  });
}

function update(id) {
  const item = greetings.value.find((item) => item._id === id);
  const { message } = item;
  $fetch(`/api/hello`, {
    method: "PUT",
    body: {
      params: {
        id,
        message,
      },
    },
  }).then((result) => {
    result.greetings.forEach((doc) => {
      const greeting = greetings.value.find((item) => item._id === doc._id);
      Object.assign(greeting, doc);
    });
  });
}

function remove(id) {
  $fetch(`/api/hello`, {
    method: "DELETE",
    body: {
      params: {
        id,
      },
    },
  }).then((result) => {
    result.greetings.forEach((doc) => {
      const index = greetings.value.findIndex((item) => item._id === doc._id);
      if (index >= 0) {
        greetings.value.splice(index, 1);
      }
    });
  });
}
</script>

<i18n locale="en">
{
  "top": "Top",
  "locale home": "Locale Home",
  "hello posts": "Hello Posts",
  "hello": "Hello!",
  "ID": "ID",
  "Created": "Created",
  "Updated": "Updated",
  "Say hello:": "Say Hello:",
  "Update": "Update",
  "Delete": "Delete",
  "Add": "Add",
}
</i18n>
