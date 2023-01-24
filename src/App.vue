<template>
  <div class="w-screen h-screen bg-stone-800">
    <HeaderPart class="absolute h-full w-full z-30" />
    <router-view />
  </div>
</template>

<script>
import HeaderPart from "./components/Navbar/HeaderPart.vue";
export default {
  components: {
    HeaderPart,
  },
  data: () => ({
    //
  }),
};
</script>
<style>
body {
  height: 100%;
}
#app {
  height: 100%;
}
</style>
