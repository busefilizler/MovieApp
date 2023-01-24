<template>
  <div
    class="flex bg-stone-800 flex-wrap place-items-start absolute h-full w-full"
  >
    <div class="BACKGROUND w-full relative h-full">
      <img
        src="../assets/bg.jpg"
        class="w-full absolute object-cover h-full opacity-30 mask"
      />
      <Transition name="bounce">
        <div
          v-if="showDiv"
          class="DETATILS flex flex-row pl-10 absolute h-full"
        >
          <div
            class="w-1/2 flex flex-col items-start justify-center ml-24 text-white"
          >
            <h1 class="text-6xl font-extrabold pb-4">JOKER</h1>
            <p class="md:text-lg sm:text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              voluptatum nobis numquam id rem placeat mollitia repellendus
              laudantium quos, amet, odit aperiam commodi accusantium labore
              consequuntur, praesentium enim. Voluptatibus, nostrum.
            </p>
            <button
              class="bg-white text-black p-2 px-10 shadow-2xl rounded-full mt-11 text-base font-semibold !cursor-pointer hover:bg-red-600 hover:text-white z-50"
            >
              Watch Trailer
            </button>
          </div>
          <div class="w-1/2 hidden lg:flex items-center justify-center mx-24">
            <img
              src="../assets/joker.jpg"
              class="w-2/4 rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </Transition>
    </div>
    <div
      class="w-full h-full bg-stone-800 flex flex-col justify-center items-center"
    >
      <h1
        class="sm:text-xl md:text-6xl lg:text:xl font-extrabold pb-10 text-white"
      >
        Popular Movies
      </h1>
      <div
        class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-6 bg-stone-800"
      >
        <MovieCard class="z-40 cursor-pointer" />
        <MovieCard class="z-40 cursor-pointer" />
        <MovieCard class="z-40 cursor-pointer" />
        <MovieCard class="z-40 cursor-pointer" />
        <MovieCard class="z-40 cursor-pointer" />
        <MovieCard class="z-40 cursor-pointer" />
        <MovieCard class="z-40 cursor-pointer" />
        <MovieCard class="z-40 cursor-pointer" />
        <MovieCard class="z-40 cursor-pointer" />
        <MovieCard class="z-40 cursor-pointer" />
        <MovieCard class="z-40 cursor-pointer" />
        <MovieCard class="z-40 cursor-pointer" />
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from "@/components/Cards/MovieCard.vue";
export default {
  components: {
    MovieCard,
  },
  data() {
    return {
      showDiv: false,
    };
  },
  mounted() {
    this.showDiv = true;
  },
};
</script>
<style>
.bounce-enter-active {
  animation: ease-in 0.5s;
}
.bounce-leave-active {
  animation: ease-in 0.5s reverse;
}
@keyframes ease-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
.mask {
  -webkit-mask-image: linear-gradient(black, transparent);
  mask-image: linear-gradient(black, transparent);
}
</style>
