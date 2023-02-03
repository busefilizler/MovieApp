<template>
  <div
    class="flex bg-stone-800 flex-wrap place-items-center justify-center absolute h-full w-full"
  >
    <div class="BACKGROUND w-full relative h-full">
      <img
        :src="backdropPath"
        class="w-full absolute object-cover h-full opacity-30 mask"
      />
      <div class="w-full h-full">
        <transition name="slide" appear>
          <div
            class="DETATILS w-full p-20 flex justify-center flex-row-reverse absolute h-full pt-10"
          >
            <div
              class="lg:w-1/2 w-full h-full flex flex-col lg:items-start items-center justify-center lg:mr-24 lg:ml-1 ml-10 mr-10 text-white"
            >
              <h1 class="text-6xl font-extrabold">
                {{ movie.title }}
              </h1>
              <div
                class="w-full flex justify-center lg:justify-start items-center gap-5 pb-6 pt-4"
              >
                <span
                  class="border-2 border-white px-2 py-1 rounded-full md:text-sm sm:text-xs"
                  :key="genre"
                  v-for="genre in getGenreNames()"
                  >{{ genre }}</span
                >
              </div>
              <p class="text-xl">
                {{ movie.overview }}
              </p>
              <h1 class="sm:text-xl md:text-3xl font-extrabold">Casts</h1>
              <div class="w-full h-54 flex flex-row gap-10 overflow-y-auto">
                <CastCards
                  v-for="credit in credits"
                  :key="credit"
                  :credit="credit"
                />
              </div>
              <button
                class="bg-white text-black p-2 px-10 shadow-2xl rounded-full mt-3 text-base font-semibold !cursor-pointer hover:bg-red-600 hover:text-white"
              >
                Add Collection
              </button>
            </div>
            <div class="w-1/2 hidden lg:flex items-center justify-center">
              <img
                :src="posterPath"
                class="sm:w-2/4 w-full rounded-xl shadow-2xl shadow-gray-700"
              />
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div
      class="w-full h-full bg-stone-800 flex flex-col justify-start items-start"
    >
      <div
        class="TRAILER w-full h-full flex flex-col justify-center items-center"
      >
        <h1 class="sm:text-xl md:text-6xl font-extrabold pb-6 text-white">
          Trailer
        </h1>
        <iframe
          class="w-3/4 h-3/4 shadow-2xl shadow-gray-700"
          :src="trailerLink"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div
      class="SIMILAR_MOVIE w-full flex flex-col justify-center items-center pt-10 px-14"
      v-if="similar.length > 0"
    >
      <h1 class="sm:text-xl md:text-3xl font-extrabold pb-2 text-white">
        Similar Movie
      </h1>
      <div class="flex w-full m-4 overflow-y-scroll">
        <MovieCard
          class="cursor-pointer flex flex-col justify-start items-center"
          v-for="movie in similar"
          :key="movie.id"
          :movie="movie"
        />
      </div>
    </div>
  </div>
</template>
<script>
import CastCards from "@/components/Cards/CastCards.vue";
import MovieCard from "@/components/Cards/MovieCard.vue";
import { movieService } from "@/services/movie-service";
import { IMG_PATH } from "@/services/baseURL";

export default {
  components: {
    CastCards,
    MovieCard,
  },
  data() {
    return {
      movie: "",
      link: "",
      similar: "",
      credits: "",
    };
  },
  computed: {
    posterPath() {
      return IMG_PATH + this.movie.poster_path;
    },
    backdropPath() {
      return IMG_PATH + this.movie.backdrop_path;
    },
    trailerLink() {
      return this.link;
    },
  },
  methods: {
    getGenreNames() {
      return this.movie.genres.map((item) => item.name);
    },
  },
  async mounted() {
    const data = await movieService.fetchMovieDetail(this.$route.params.id);
    this.movie = data;

    const { results } = await movieService.fetchMovieTrailerInfo(
      this.$route.params.id
    );
    const key = results[0].key;
    this.link = `https://www.youtube.com/embed/${key}`;

    const similar = await movieService.fetchSmilarMovies(this.$route.params.id);
    this.similar = similar.results;
    console.log(this.similar);

    const credits = await movieService.fetchMovieCredits(this.$route.params.id);
    this.credits = credits.cast;
  },
  watch: {
    "$route.params.id": {
      handler() {
        this.fetchMovieDetail(this.$route.params.id);
      },
      immediate: true,
    },
  },
};
</script>
<style></style>
