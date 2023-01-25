<template>
  <div class="pt-24 pb-10 z-40">
    <transition name="slide" appear>
      <form class="flex justify-center items-center">
        <div class="relative w-full">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            class="bg-stone-300 md:w-96 sm:w-52 text-black text-sm rounded-lg block pl-10 p-2.5 outline-0 shadow-2xl z-30"
            placeholder="Search"
            required
          />
        </div>
      </form>
    </transition>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      movie: "",
    };
  },
};
</script>
