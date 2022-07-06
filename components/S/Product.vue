<template>
  <!-- product-grid - start -->
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <!-- text - start -->
      <div class="mb-10 md:mb-16">
        <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Selected</h2>

        <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
      </div>
      <!-- text - end -->

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8">
        <!-- product - start -->
        <div>
          <a href="#" class="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg relative mb-2 lg:mb-3">
            <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />

            <div class="flex gap-2 absolute left-0 bottom-2">
              <span class="bg-red-500 text-white text-sm font-semibold tracking-wider uppercase rounded-r-lg px-3 py-1.5">-50%</span>
              <span class="bg-white text-gray-800 text-sm font-bold tracking-wider uppercase rounded-lg px-3 py-1.5">New</span>
            </div>
          </a>

          <div class="flex justify-between items-start gap-2 px-2">
            <div class="flex flex-col">
              <a href="#" class="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100">Fancy Outfit</a>
              <span class="text-gray-500">by Fancy Brand</span>
            </div>

            <div class="flex flex-col items-end">
              <span class="text-gray-600 lg:text-lg font-bold">$19.99</span>
              <span class="text-red-500 text-sm line-through">$39.99</span>
            </div>
          </div>
        </div>
        <!-- product - end -->

        <!-- product - start -->
        <div>
          <a href="#" class="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg relative mb-2 lg:mb-3">
            <img src="https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Nick Karvounis" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
          </a>

          <div class="flex justify-between items-start gap-2 px-2">
            <div class="flex flex-col">
              <a href="#" class="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100">Cool Outfit</a>
              <span class="text-gray-500">by Cool Brand</span>
            </div>

            <div class="flex flex-col items-end">
              <span class="text-gray-600 lg:text-lg font-bold">$29.99</span>
            </div>
          </div>
        </div>
        <!-- product - end -->

        <!-- product - start -->
        <div>
          <a href="#" class="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg relative mb-2 lg:mb-3">
            <img src="https://images.unsplash.com/photo-1548286978-f218023f8d18?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
          </a>

          <div class="flex justify-between items-start gap-2 px-2">
            <div class="flex flex-col">
              <a href="#" class="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100">Nice Outfit</a>
              <span class="text-gray-500">by Nice Brand</span>
            </div>

            <div class="flex flex-col items-end">
              <span class="text-gray-600 lg:text-lg font-bold">$35.00</span>
            </div>
          </div>
        </div>
        <!-- product - end -->

        <!-- product - start -->
        <div>
          <a href="#" class="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg relative mb-2 lg:mb-3">
            <img src="https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Vladimir Fedotov" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
          </a>

          <div class="flex justify-between items-start gap-2 px-2">
            <div class="flex flex-col">
              <a href="#" class="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100">Lavish Outfit</a>
              <span class="text-gray-500">by Lavish Brand</span>
            </div>

            <div class="flex flex-col items-end">
              <span class="text-gray-600 lg:text-lg font-bold">$49.99</span>
            </div>
          </div>
        </div>
        <!-- product - end -->
      </div>
    </div>
  </div>
<!-- product-grid - end -->
</template>