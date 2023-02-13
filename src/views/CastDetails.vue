<template>
  <div class="flex flex-col w-full bg-stone-800 px-14">
    <div
      class="CONTAINER flex 2xl:item-start xl:flex-row lg:flex-row md-flex-col sm-flex-col flex-col xl:items-start lg:items-start md:items-center sm:items-center items-center w-full h-full my-36"
    >
      <div
        class="POSTER w-1/2 2xl:h-full xl:h-full lg:h-full md:h-auto sm:h-auto flex items-center justify-center"
      >
        <img
          :src="posterPath"
          class="2xl:w-96 xl:w-96 lg:w-96 md:w-72 sm:w-60 w-60 object-cover rounded-xl mx-10 shadow-2xl shadow-gray-900 mb-10"
        />
      </div>
      <div
        class="DETAILS w-1/2 2xl:h-full xl:h-full lg:h-full md:h-auto sm:h-auto flex flex-col items-start justify-center text-white 2xl:mr-10 2xl:ml-5 xl:mr-10 xl:ml-5 lg:mr-10 lg:ml-5 md:mr-0 md:ml-0 sm:ml-0 sm:mr-0"
      >
        <h1
          class="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-3xl lg:text-left font-extrabold pb-5 sm:text-center md:text-center w-full"
        >
          {{ person.name }}
        </h1>
        <span><strong>Birthday:</strong> {{ person.birthday }}</span>
        <span
          ><strong>Place of Birth:</strong> {{ person.place_of_birth }}</span
        >
        <p class="text-sm mt-5 w-full">{{ person.biography }}</p>
      </div>
    </div>
    <div class="MOVIES flex flex-col w-full">
      <h1
        class="sm:text-xl md:text-3xl font-extrabold pb-2 text-white w-full text-center"
      >
        Known For
      </h1>
      <div class="flex w-full m-4 overflow-y-scroll gap-2">
        <MovieCard
          v-for="movie in personCredits"
          :key="movie.id"
          :movie="movie"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { IMG_PATH } from "@/services/baseURL";
import { movieService } from "@/services/movie-service";
import MovieCard from "@/components/Cards/MovieCard.vue";
export default {
  components: {
    MovieCard,
  },
  data() {
    return {
      person: "",
      personCredits: [],
    };
  },
  computed: {
    posterPath() {
      const posterPath = this.person.profile_path;
      if (!posterPath) {
        return "https://via.placeholder.com/185x278";
      }
      return IMG_PATH + posterPath;
    },
  },
  methods: {
    async fetchPersonDetail() {
      const data = await movieService.fetchCastDetail(this.$route.params.id);
      this.person = data;

      const datas = await movieService.fetchCastCredits(this.$route.params.id);
      this.personCredits = datas.cast;
      console.log(this.personCredits);
    },
  },
  mounted() {
    this.fetchPersonDetail();
  },
};
</script>
<style></style>
