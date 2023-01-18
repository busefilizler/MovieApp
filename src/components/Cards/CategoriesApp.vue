<template>
  <div>
    <div :key="index" v-for="(item, index) in items">
      <div
        class="text-gray-200 text-base capitalize cursor-pointer hover:text-gray-400"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        "aktion",
        "comedy",
        "horror",
        "adventure",
        "drama",
        "fantasy",
        "musicals",
        "mystery",
        "romance",
        "science",
        "fiction",
        "sports",
        "thriller",
        "Western",
      ],
    };
  },
};
</script>
<style></style>
