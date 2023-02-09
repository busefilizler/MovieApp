<template>
  <div class="w-screen h-screen bg-stone-800">
    <HeaderPart class="absolute w-full z-10" />
    <div v-if="false" class="h-full w-96 z-50 bg-black absolute"></div>
    <transition name="fade">
      <router-view />
    </transition>
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
  background: #292524;
  height: 100%;
}
#app {
  height: 100%;
  background: #292524;
}
</style>
