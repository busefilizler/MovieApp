<template>
  <div
    class="flex bg-stone-800 flex-wrap place-items-start absolute h-full w-full"
  >
    <div class="BACKGROUND w-full relative h-full">
      <img
        :src="backdropPath"
        class="w-full absolute object-cover h-full opacity-60 mask"
      />
      <transition name="slide" appear>
        <div
          class="flex justify-between items-center flex-row px-10 absolute h-full"
        >
          <div
            class="lg:w-1/2 md:w-full flex flex-col lg:justify-center lg:items-start items-center lg:ml-36 md:ml-0 text-white"
          >
            <h1
              class="xl:text-6xl lg:text-4xl md:text-3xl sm:text-2xl sm:text-center lg:text-left md:text-left xl:text-left font-extrabold pb-4"
            >
              {{ movies[i].title }}
            </h1>
            <p class="md:text-lg sm:text-base">
              {{ movies[i].overview }}
            </p>
            <button
              class="bg-white text-red-600 p-2 px-10 shadow-2xl rounded-full mt-11 sm:text-base lg:text-xl font-semibold !cursor-pointer hover:bg-red-600 hover:text-white"
              @click="watchTrailer"
            >
              Watch Trailer
            </button>
          </div>
          <div
            class="lg:w-1/2 w-full hidden lg:flex items-center justify-center mx-24"
          >
            <img
              :src="posterPath"
              class="w-2/4 rounded-xl shadow-2xl shadow-gray-500"
            />
          </div>
        </div>
      </transition>
      <div
        class="cursor-pointer lg:text-9xl sm:text-xl text-white text-opacity-50 absolute right-0 top-2/4 bottom-2/4 pr-10"
        @click="counterPlus"
      >
        &gt;
      </div>
      <div
        class="cursor-pointer lg:text-9xl sm:text-xl text-white text-opacity-50 absolute left-0 top-2/4 bottom-2/4 pl-10"
        @click="counterMinus"
      >
        &lt;
      </div>
    </div>
    <div
      v-if="!isLoading"
      class="w-full bg-stone-800 flex flex-col justify-center items-center"
    >
      <h1
        class="sm:text-xl md:text-6xl lg:text:xl font-extrabold pt-10 pb-10 text-white"
      >
        Popular Movies
      </h1>
      <transition name="fade" appear>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-12 bg-stone-800 mx-24"
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
import { IMG_PATH } from "../services/baseURL";
import { movieService } from "@/services/movie-service";
import MovieCard from "@/components/Cards/MovieCard.vue";
import { mapGetters } from "vuex";
import LoadingBar from "../components/Navbar/LoadingBar.vue";

export default {
  components: {
    MovieCard,
    LoadingBar,
  },
  data() {
    return {
      movies: [],
      i: 0,
      link: "",
      totalPages: null,
      currentPage: 1,
      isLoading: false,
    };
  },
  async mounted() {
    const data = await movieService.fetchPopularMovies(this.i + 1);
    this.movies = data.results;
  },
  computed: {
    ...mapGetters("movie", ["isLoading"]),
    posterPath() {
      const posterPath = this.movies[this.i]?.poster_path;
      if (!posterPath) {
        return "https://via.placeholder.com/185x278";
      }
      return IMG_PATH + posterPath;
    },
    backdropPath() {
      return IMG_PATH + this.movies[this.i]?.backdrop_path;
    },
  },
  methods: {
    counterPlus() {
      this.isLoading = true;
      this.i = (this.i + 1) % 20;
      this.isLoading = false;
    },
    counterMinus() {
      this.isLoading = true;
      if (this.i > 0) {
        this.i = (this.i - 1) % 20;
      } else {
        this.i = 20;
      }
      this.isLoading = false;
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
      this.isLoading = true;
      const data = await movieService.fetchPopularMovies(`${newcurrentPage}`);
      this.movies = data.results;
      this.totalPages = data.page;
      this.isLoading = false;
    },
  },
};
</script>
<style></style>
