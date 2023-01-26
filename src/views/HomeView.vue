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
        <div class="flex flex-row pl-10 absolute h-full">
          <div
            class="w-1/2 flex flex-col items-start justify-center ml-24 text-white"
          >
            <h1 class="text-6xl font-extrabold pb-4">{{ movies[i].title }}</h1>
            <p class="md:text-lg sm:text-base">
              {{ movies[i].overview }}
            </p>
            <button
              class="bg-white text-black p-2 px-10 shadow-2xl rounded-full mt-11 text-base font-semibold !cursor-pointer hover:bg-red-600 hover:text-white z-50"
              @click="watchTrailer"
            >
              Watch Trailer
            </button>
          </div>
          <div
            @click="counter"
            class="w-1/2 hidden lg:flex items-center justify-center mx-24"
          >
            <img
              :src="posterPath"
              class="w-2/4 rounded-xl shadow-2xl cursor-pointer z-50"
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
          class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-6 bg-stone-800"
        >
          <MovieCard
            v-for="(movie, index) in movies"
            :key="index"
            :movie="movie"
            class="z-40 cursor-pointer flex flex-col justify-start items-center"
          />
        </div>
      </transition>
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
    };
  },
  async mounted() {
    const data = await movieService.fetchPopularMovies();
    this.movies = data.results;
    // console.log(this.movies);
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
      console.log(this.link);
      window.open(this.link);
    },
  },
};
</script>
<style></style>
