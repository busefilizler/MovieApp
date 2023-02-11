<template>
  <div class="bg-stone-800 h-full w-full flex flex-col gap-5">
    <div class="pt-44 pb-10 w-full flex justify-center">
      <transition name="slide" appear>
        <form @submit.prevent="" class="flex justify-center items-center">
          <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-stone-900 dark:text-stone-900"
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
              class="bg-stone-400 md:w-96 sm:w-52 h-16 text-black text-base rounded-lg block pl-10 p-2.5 outline-0 shadow-2xl placeholder:text-stone-800"
              placeholder="Search"
              required
              v-model="searchTerm"
              @input="debounceSearch"
            />
          </div>
        </form>
      </transition>
    </div>
    <div
      v-if="showSearchResult"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-12 bg-stone-800 mx-24"
    >
      <MovieCard
        v-for="movie in searchMovies"
        :key="movie.id"
        :movie="movie"
        class="cursor-pointer flex flex-col justify-start items-center"
      />
    </div>
  </div>
</template>

<script>
import MovieCard from "@/components/Cards/MovieCard.vue";
import { movieService } from "@/services/movie-service";
export default {
  components: {
    MovieCard,
  },
  data() {
    return {
      searchTerm: "",
      showSearchResult: false,
      searchMovies: [],
    };
  },
  methods: {
    debounceSearch(event) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.getMovies(event.target.value);
      }, 500);
    },
    async getMovies(term) {
      const data = await movieService.fetchSearchedMovie(term);
      this.searchMovies = data;
      this.showSearchResult = true;
      console.log(this.searchMovies);
    },
    mounted() {
      this.getMovies();
    },
  },
};
</script>
