<template>
  <div
    class="flex w-24 flex-col justify-start items-center hover:opacity-60 m-3"
  >
    <img
      @click="routeDirect(credit)"
      :src="posterPath"
      class="w-24 cursor-pointer rounded-lg object-cover shadow-2xl shadow-gray-900"
    />
    <span class="w-24 items-center text-white text-sm pt-1">{{
      credit.original_name
    }}</span>
  </div>
</template>
<script>
import router from "@/router";
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
  methods: {
    routeDirect(credit) {
      router.push(`/castdetail${credit.id}`);
    },
  },
};
</script>
<style></style>
