<template>
  <div class="h-full overflow-auto">
    <div
      class="leftSide pb-10 flex flex-col justify-between bg-gray-700 w-72 h-full pl-8 pt-14"
    >
      <div class="flex flex-row gap-4 pb-16">
        <v-icon color="grey x-large">mdi-movie-roll</v-icon>
        <div class="text-4xl text-gray-400 cursor-pointer hover:text-gray-400">
          MovieApp
        </div>
      </div>
      <div class="text-gray-500 text-base pb-3">New Feed</div>

      <div class="flex flex-row gap-4">
        <v-icon color="grey">mdi-heart</v-icon>
        <div class="text-2xl text-gray-200 cursor-pointer hover:text-gray-400">
          WatchList
        </div>
      </div>
      <div class="flex flex-row gap-4 pb-6">
        <v-icon color="grey">mdi-bell</v-icon>
        <div class="text-2xl text-gray-200 cursor-pointer hover:text-gray-400">
          Remind
        </div>
      </div>

      <div class="text-gray-500 text-base pb-3">Categories</div>
      <CategoriesApp class="pb-10" />
      <div class="flex flex-row gap-4">
        <v-icon color="grey">mdi-logout</v-icon>
        <div class="text-2xl text-gray-200 cursor-pointer hover:text-gray-400">
          Log Out
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CategoriesApp from "../Cards/CategoriesApp.vue";
export default {
  components: {
    CategoriesApp,
  },
  data: () => ({}),
};
</script>
