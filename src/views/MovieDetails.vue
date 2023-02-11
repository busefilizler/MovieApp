<template>
  <div>
    <div
      class="flex bg-stone-800 flex-wrap place-items-center justify-center absolute h-full w-full"
      v-if="!isLoading"
    >
      <div class="BACKGROUND w-full relative h-full">
        <img
          :src="backdropPath"
          class="w-full absolute object-cover h-full opacity-60 mask"
        />
        <div class="w-full h-full mt-20">
          <transition name="slide" appear>
            <div
              class="DETATILS w-full 2xl:p-20 xl:p-20 lg:p-20 md:p-20 p-12 flex justify-center flex-row-reverse absolute h-full pt-10"
            >
              <div
                class="lg:w-1/2 w-full h-full flex flex-col lg:items-start items-center justify-center lg:mr-24 lg:ml-1 ml-10 mr-10 text-white"
              >
                <h1
                  class="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-3xl text-center lg:text-left font-extrabold"
                >
                  {{ movie.title }}
                </h1>
                <div
                  class="w-full flex justify-center lg:justify-start items-center gap-5 pb-6 pt-4"
                >
                  <span
                    class="border-2 border-white px-2 py-1 rounded-full sm:text-xs text-xs"
                    :key="genre"
                    v-for="genre in getGenreNames()"
                    >{{ genre }}</span
                  >
                </div>
                <p class="md:text-base text-sm mb-6">
                  {{ movie.overview }}
                </p>
                <button
                  class="bg-white text-red-600 p-2 px-10 shadow-2xl rounded-full mt-3 text-base font-semibold !cursor-pointer hover:bg-red-600 hover:text-white my-10"
                >
                  Add Collection
                </button>
                <h1 class="sm:text-xl md:text-3xl font-extrabold">Casts</h1>
                <div class="w-full h-54 flex flex-row gap-10 overflow-y-auto">
                  <CastCards
                    v-for="credit in credits"
                    :key="credit"
                    :credit="credit"
                  />
                </div>
              </div>
              <div class="w-1/2 hidden lg:flex items-center justify-center">
                <img
                  :src="posterPath"
                  class="w-96 object-cover rounded-xl mr-10 shadow-2xl shadow-gray-900"
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
          <h1 class="sm:text-xl md:text-6xl font-extrabold pb-10 text-white">
            OFFICAL TRAILER
          </h1>
          <iframe
            class="w-3/4 h-3/4 shadow-2xl shadow-gray-900"
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
    <div>
      <LoadingBar v-if="isLoading" />
    </div>
  </div>
</template>
<script>
import CastCards from "@/components/Cards/CastCards.vue";
import MovieCard from "@/components/Cards/MovieCard.vue";
import { movieService } from "@/services/movie-service";
import { IMG_PATH } from "@/services/baseURL";
import LoadingBar from "@/components/Navbar/LoadingBar.vue";

export default {
  components: {
    CastCards,
    MovieCard,
    LoadingBar,
  },
  data() {
    return {
      movie: "",
      link: "",
      similar: "",
      credits: "",
      routerId: null,
      isLoading: false,
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
    async getAllMovieData() {
      this.isLoading = true;
      const data = await movieService.fetchMovieDetail(this.$route.params.id);
      this.movie = data;
      this.isLoading = false;

      const { results } = await movieService.fetchMovieTrailerInfo(
        this.$route.params.id
      );
      const key = results[0].key;
      this.link = `https://www.youtube.com/embed/${key}`;

      const similar = await movieService.fetchSmilarMovies(
        this.$route.params.id
      );
      this.similar = similar.results;

      const credits = await movieService.fetchMovieCredits(
        this.$route.params.id
      );
      this.credits = credits.cast;
    },
  },
  async mounted() {
    this.getAllMovieData();
  },
  watch: {
    $route: {
      async handler() {
        this.getAllMovieData();
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>
<style></style>
