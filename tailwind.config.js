/** @type {import('tailwindcss').Config} */
module.exports =
  {
    content: [
      "./app.vue",
      "./components/**/*.{vue,js,ts}",
      "./layouts/**/*.{vue,js,ts}",
      "./pages/**/*.{vue,js,ts}",
      "./plugins/**/*.{js,ts}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
