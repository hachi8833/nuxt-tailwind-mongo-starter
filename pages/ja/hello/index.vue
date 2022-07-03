<template>
  <div>
    <ul>
      <NuxtLink to="/">Top</NuxtLink>
      &gt;
      <NuxtLink to="/ja">Ja</NuxtLink>
      &gt;
      <NuxtLink to="/ja/hello">Hello</NuxtLink>
    </ul>
    <template v-for="greeting of greetings">
      <div class="px-4 py-4 mx-4 my-4 bg-green-100 border rounded-lg">
        <div>
          <div class="text-zinc-700 text-size-lg">
            <input type="text" v-model="greeting.message" class="w-full px-2 py-1 bg-green-100 rounded" />
          </div>

          <div class="px-4 py-2">
            <div class="px-4 py-2 bg-green-200 border rounded-lg">
              <div class="flex text-sm text-zinc-700">
                <div class="px-2">ID</div>
                <div class="px-2">{{ greeting._id }}</div>
              </div>

              <div class="flex text-sm text-zinc-700">
                <div class="px-2">Created</div>
                <div class="px-2">{{ greeting.created_at }}</div>
              </div>

              <div class="flex text-sm text-zinc-700">
                <div class="px-2">Updated</div>
                <div class="px-2">{{ greeting.updated_at }}</div>
              </div>
            </div>
          </div>

          <Button
            class="mx-2 my-2"
            @click="update(greeting._id)"
          >
            <span>
              Update
            </span>
          </Button>

          <Button
            class="mx-2 my-2"
            @click="remove(greeting._id)"
          >
            <span>
              Delete
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
              <div>Say hello:</div>
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
            Add
          </span>
        </Button>
      </div>
    </form>
  </div>
</template>

<script setup>
definePageMeta({
    layout: "custom-ja",
});

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
