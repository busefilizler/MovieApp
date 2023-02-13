<template>
  <div class="flex flex-col w-full h-full bg-stone-800 px-14 pt-24">
    <h1
      class="sm:text-xl md:text-6xl lg:text:xl font-extrabold pt-10 pb-10 text-white text-center"
    >
      Your Collection
    </h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-12 bg-stone-800 mx-24"
    >
      <div class="card" v-for="movie in movies" :key="movie.id">
        <MovieCard
          class="cursor-pointer flex flex-col justify-start items-center"
          :movie="movie"
          :setDataFromChild="setDataFromChild"
        />
      </div>
    </div>
  </div>
</template>
<script>
import MovieCard from "@/components/Cards/MovieCard.vue";
import { movieService } from "@/services/movie-service";
export default {
  data() {
    return {
      movies: [],
    };
  },
  components: {
    MovieCard,
  },
  methods: {
    setDataFromChild(movieID) {
      this.movies = this.movies.filter((element) => element.id !== movieID);
    },
    async getMovies() {
      let moviesId = window.localStorage.movies
        ? window.localStorage.movies.split(",")
        : [];
      console.log(moviesId);
      for (let i = 0; i < moviesId.length; i++) {
        const data = await movieService.fetchMovieDetail(moviesId[i]);
        this.movies.push(data);
        console.log(data);
      }
    },
  },
  beforeMount() {
    this.getMovies();
  },
};
</script>
<style></style>
