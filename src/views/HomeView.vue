<template>
  <div
    class="flex bg-stone-800 flex-wrap place-items-start absolute h-full w-full"
  >
    <div class="BACKGROUND w-full relative h-full">
      <img
        :src="backdropPath"
        class="w-full absolute object-cover h-full opacity-30 mask"
      />
      <transition name="slide" appear>
        <div
          class="flex justify-between items-center flex-row pl-10 absolute h-full"
        >
          <div
            class="w-1/2 flex flex-col lg:justify-center lg:items-start items-center ml-24 text-white"
          >
            <h1 class="text-6xl font-extrabold pb-4">{{ movies[i].title }}</h1>
            <p class="md:text-lg sm:text-base">
              {{ movies[i].overview }}
            </p>
            <button
              class="bg-white text-black p-2 px-10 shadow-2xl rounded-full mt-11 text-base font-semibold !cursor-pointer hover:bg-red-600 hover:text-white"
              @click="watchTrailer"
            >
              Watch Trailer
            </button>
          </div>
          <div
            @click="counter"
            class="lg:w-1/2 w-full hidden lg:flex items-center justify-center mx-24"
          >
            <img
              :src="posterPath"
              class="w-2/4 rounded-xl shadow-2xl cursor-pointer"
            />
          </div>
        </div>
      </transition>
    </div>
    <div class="w-full bg-stone-800 flex flex-col justify-center items-center">
      <h1
        class="sm:text-xl md:text-6xl lg:text:xl font-extrabold pt-10 pb-10 text-white"
      >
        Popular Movies
      </h1>
      <transition name="fade" appear>
        <div
          class="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-12 bg-stone-800"
        >
          <MovieCard
            v-for="movie in movies"
            :key="movie.id"
            :movie="movie"
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
  </div>
</template>

<script>
import { IMG_PATH } from "../services/baseURL";
import { movieService } from "@/services/movie-service";
import MovieCard from "@/components/Cards/MovieCard.vue";
export default {
  components: {
    MovieCard,
  },
  data() {
    return {
      movies: [],
      i: 0,
      link: "",
      totalPages: null,
      currentPage: 1,
    };
  },
  async mounted() {
    const data = await movieService.fetchPopularMovies(1);
    this.movies = data.results;
    console.log(this.movies);
  },
  computed: {
    posterPath() {
      return IMG_PATH + this.movies[this.i]?.poster_path;
    },
    backdropPath() {
      return IMG_PATH + this.movies[this.i]?.backdrop_path;
    },
  },
  methods: {
    counter() {
      this.i = (this.i + 1) % 20;
    },
    async watchTrailer() {
      const { results } = await movieService.fetchMovieTrailerInfo(
        this.movies[this.i].id
      );
      const key = results[0].key;
      this.link = `https://www.youtube.com/watch?v=${key}`;
      window.open(this.link);
    },
  },
  watch: {
    async currentPage(newcurrentPage) {
      const data = await movieService.fetchPopularMovies(`${newcurrentPage}`);
      console.log(data);
      this.movies = data.results;
      this.totalPages = data.page;
    },
  },
};
</script>
<style></style>
