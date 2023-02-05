<template>
  <div
    class="flex w-64 flex-col justify-center items-center hover:opacity-30 m-3"
  >
    <img
      :src="posterPath"
      class="lg:w-40 w-24 rounded-lg object-cover shadow-2xl shadow-gray-900"
    />
    <span class="lg:w-40 w-24 items-center text-white text-xl pt-1">{{
      credit.original_name
    }}</span>
  </div>
</template>
<script>
import { IMG_PATH } from "@/services/baseURL";
export default {
  props: {
    credit: {},
  },
  computed: {
    posterPath() {
      return IMG_PATH + this.credit.profile_path;
    },
  },
};
</script>
<style></style>
