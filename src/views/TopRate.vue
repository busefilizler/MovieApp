<template>
  <div>
    <div
      v-if="!isLoading"
      class="w-full bg-stone-800 flex flex-col justify-center items-center"
    >
      <h1
        class="sm:text-xl md:text-6xl lg:text:xl font-extrabold pt-20 pb-10 text-white"
      >
        Top Rated Movies
      </h1>
      <transition name="fade" appear>
        <div
          class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-12 bg-stone-800"
        >
          <MovieCard
            v-for="topRate in topRates"
            :key="topRate.id"
            :movie="topRate"
            class="cursor-pointer flex flex-col justify-start items-center"
          />
        </div>
      </transition>
      <hr class="border-1 border-opacity-25 border-white w-full mb-5" />
      <div
        class="flex flex-row justify-center items-center content-center gap-4"
      >
        <button
          @click="currentPage--"
          :disabled="currentPage <= 1"
          class="bg-white text-black p-2 px-10 shadow-2xl rounded-full mb-11 text-base font-semibold !cursor-pointer hover:bg-red-600 hover:text-white"
        >
          Back
        </button>
        <p class="text-white p-2 px-10 mb-11">-{{ currentPage }}-</p>
        <button
          @click="currentPage++"
          v-if="currentPage < 42"
          class="bg-white text-black p-2 px-10 shadow-2xl rounded-full mb-11 text-base font-semibold !cursor-pointer hover:bg-red-600 hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
    <div>
      <transition name="slide" appear>
        <LoadingBar
          class="w-full bg-stone-800 flex flex-col justify-center items-center"
          v-if="isLoading"
        />
      </transition>
    </div>
  </div>
</template>
<script>
import LoadingBar from "@/components/Navbar/LoadingBar.vue";
import MovieCard from "@/components/Cards/MovieCard.vue";
import { movieService } from "@/services/movie-service";
export default {
  components: {
    MovieCard,
    LoadingBar,
  },
  data() {
    return {
      topRates: [],
      isLoading: false,
      totalPages: null,
      currentPage: 1,
    };
  },
  methods: {
    async getTopRateMovie() {
      const { results } = await movieService.fetchTopRatedMovies("1");
      this.topRates = results;
      console.log(this.topRates);
    },
  },
  async mounted() {
    this.getTopRateMovie();
  },
  watch: {
    async currentPage(newcurrentPage) {
      this.isLoading = true;
      const data = await movieService.fetchTopRatedMovies(`${newcurrentPage}`);
      this.topRates = data.results;
      this.totalPages = data.page;
      this.isLoading = false;
    },
  },
};
</script>
<style></style>
