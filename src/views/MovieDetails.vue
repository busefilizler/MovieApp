<template>
  <div
    class="flex bg-stone-800 flex-wrap place-items-center justify-center absolute h-full w-full"
  >
    <div class="BACKGROUND w-full relative h-full">
      <img
        src="../assets/bg.jpg"
        class="w-full absolute object-cover h-full opacity-30 mask"
      />
      <div class="w-full h-full">
        <Transition name="bounce">
          <div
            v-if="showDiv"
            class="DETATILS flex flex-row-reverse absolute h-full pt-10"
          >
            <div
              class="w-1/2 flex flex-col items-start justify-center mr-24 text-white"
            >
              <h1 class="sm:text-xl md:text-6xl font-extrabold pb-4">JOKER</h1>
              <div class="flex gap-5 pb-6">
                <span
                  class="border-2 border-white px-2 py-1 rounded-full md:text-sm sm:text-xs"
                  >Comedy</span
                >
                <span
                  class="border-2 border-white px-2 py-1 rounded-full md:text-sm sm:text-xs"
                  >Comedy</span
                >
              </div>
              <p class="md:text-lg sm:text-xs">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
                voluptatum nobis numquam id rem placeat mollitia repellendus
                laudantium quos, amet, odit aperiam commodi accusantium labore
                consequuntur, praesentium enim. Voluptatibus, nostrum.
              </p>
              <h1 class="sm:text-xl md:text-3xl font-extrabold">Casts</h1>
              <div
                class="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6"
              >
                <CastCards />
                <CastCards />
                <CastCards />
                <CastCards />
              </div>
              <button
                class="bg-white text-black p-2 px-10 shadow-2xl rounded-full mt-3 text-base font-semibold !cursor-pointer hover:bg-red-600 hover:text-white z-50"
              >
                Add Collection
              </button>
            </div>
            <div class="w-1/2 hidden sm:flex items-center justify-center">
              <img
                src="../assets/joker.jpg"
                class="sm:w-2/4 w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </Transition>
      </div>
    </div>
    <div
      class="w-full h-full bg-stone-800 flex flex-col justify-start items-start"
    >
      <div class="w-full h-full flex flex-col justify-center items-center">
        <h1 class="sm:text-xl md:text-6xl font-extrabold pb-4 text-white">
          Trailer
        </h1>
        <iframe
          class="w-3/4 h-3/4"
          src="https://www.youtube.com/embed/zAGVQLHvwOY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div class="w-full flex flex-col justify-center items-center">
        <h1 class="sm:text-xl md:text-3xl font-extrabold pb-4 text-white">
          Similar Movie
        </h1>
        <div
          class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-6 bg-stone-800"
        >
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CastCards from "@/components/Cards/CastCards.vue";
import MovieCard from "@/components/Cards/MovieCard.vue";
export default {
  components: {
    CastCards,
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
  animation: bounce-in 2s;
}
.bounce-leave-active {
  animation: bounce-in 1s reverse;
}
@keyframes bounce-in {
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
