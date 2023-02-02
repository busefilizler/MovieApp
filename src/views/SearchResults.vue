<template>
  <div class="bg-stone-800 h-full w-full flex flex-col gap-5">
    <SearchingBar class="flex justify-center mt-12" />
    <div
      class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-6 bg-stone-800"
    >
      <MovieCard class="cursor-pointer" />
    </div>
  </div>
</template>

<script>
import MovieCard from "@/components/Cards/MovieCard.vue";
import SearchingBar from "../components/Search/SearchingBar.vue";
export default {
  components: {
    SearchingBar,
    MovieCard,
  },
  data() {
    return {
      numb: 5,
    };
  },
};
</script>
