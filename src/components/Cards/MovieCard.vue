<template>
  <div>
    <div class="flex flex-col justify-center items-center hover:opacity-30 m-3">
      <img :src="posterPath" class="w-52 rounded-lg object-cover" />
      <span class="w-52 text-white text-xl pt-1">{{ movie.title }}</span>
    </div>
  </div>
</template>
<script>
import { IMG_PATH } from "../../services/baseURL";
export default {
  props: {
    movie: {
      required: true,
    },
  },
  computed: {
    posterPath() {
      return IMG_PATH + this.movie.poster_path;
    },
  },
};
</script>
<style></style>
