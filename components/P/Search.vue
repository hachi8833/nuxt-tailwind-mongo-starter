<template>
  <div class="flex justify-end mx-4">
    <form class="w-full max-w-md flex gap-2 mb-3">
      <input placeholder="検索キーワード" class="w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />

      <button class="inline-block bg-gray-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">検索</button>
    </form>

    <a href="#_" class="px-5 mx-5 py-2 relative rounded group text-white font-bold inline-block">
      <span class="absolute top-0 left-0 w-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
      <span class="w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
      <span class="absolute inset-0 w-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
      <span class="absolute inset-0 w-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
      <span class="relative">お問い合わせ</span>
    </a>

      <a href="#_" class="px-8 mx-5 py-2 relative rounded group text-white font-bold inline-block">
      <span class="absolute inset-0 w-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
      <span class="relative">お見積り</span>
    </a>
  </div>
</template>