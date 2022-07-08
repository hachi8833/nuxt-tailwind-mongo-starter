<template>
  <section class="max-w-screen-2xl bg-gray-100 px-4 md:px-8 mx-auto">

    <h2 class=" text-black-800 text-xl sm:text-2xl md:text-3xl font-bold mt-4 md:mb-4"
    >主要な翻訳分野</h2>

    <div class="w-full lg:pt-48 lg:pb-8 mb-2 sm:mb-4 lg:mb-0 ">
      <div class="container mx-auto flex flex-wrap">
        <div class="p-8 lg:w-1/2 rounded-xl shadow-md" v-for="item of primaryGenre" :key="item.title">
          <h3 class="mb-2 text-lg w-full font-semibold">
            {{ item.title }}
          </h3>
          <p class="text-base">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
const primaryGenre = [
  { title: 'IT関連文書', desc: 'IT関連のソフトウェアやアプリケーションのマニュアル、ヘルプ、仕様書、カタログ、パンフレットなど、正確な翻訳を何よりも重視する資料から、読者への訴求力を重視する文書まで、柔軟に対応します。' },
  { title: 'ビジネス文書', desc: 'プレゼン資料や社内報、投資家向けの資料などのビジネス関連資料、法務・契約関連資料など' },
  { title: 'アウトバウンド・海外進出', desc: '企業の海外市場進出時に必要な、さまざまな資料やWebサイト、ＳＮＳ、オウンドメディアの企画・運用サポートなど' },
  { title: 'インバウンド・観光文書', desc: '海外からの旅行者、留学生、技能研修性向けの、さまざまな資料やWebサイト、外国語でのSEO（検索エンジン最適化）など' },
]
</script>
