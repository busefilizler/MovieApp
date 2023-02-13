<template>
  <div>
    <div
      class="flex p-2 w-60 flex-col justify-center items-center hover:opacity-30"
    >
      <img
        @click="routeDirect(movie)"
        :src="posterPath"
        class="w-60 rounded-lg object-cover shadow-2xl shadow-gray-900"
      />
      <span class="w-60 text-center items-center text-white text-xl pt-1">
        {{ movie.title }}
      </span>
    </div>
  </div>
</template>
<script>
import router from "@/router";
import { IMG_PATH } from "../../services/baseURL";
export default {
  props: {
    movie: {},
  },
  computed: {
    posterPath() {
      const posterPath = this.movie?.poster_path;
      if (!posterPath) {
        return "https://via.placeholder.com/185x278";
      }
      return IMG_PATH + posterPath;
    },
  },
  methods: {
    routeDirect(movie) {
      router.push(`/moviedetail${movie.id}`);
    },
  },
};
</script>
<style></style>
