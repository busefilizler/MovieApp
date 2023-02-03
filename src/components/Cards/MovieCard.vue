<template>
  <div>
    <div
      class="flex w-64 flex-col justify-center items-center hover:opacity-30 m-3"
    >
      <router-link :to="`/moviedetail${movie.id}`">
        <img
          :src="posterPath"
          class="w-64 rounded-lg object-cover shadow-xl shadow-gray-700"
        />
      </router-link>
      <span class="w-64 items-center text-white text-xl pt-1">
        {{ movie.title }}
      </span>
    </div>
  </div>
</template>
<script>
import { IMG_PATH } from "../../services/baseURL";
export default {
  props: {
    movie: {},
    similar: {},
  },
  computed: {
    posterPath() {
      return IMG_PATH + this.movie.poster_path;
    },
  },
};
</script>
<style></style>
