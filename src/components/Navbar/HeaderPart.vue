<template>
  <div class="flex flex-wrap justify-center place-items-start shadow-2xl">
    <section class="relative mx-auto">
      <!-- navbar -->
      <nav
        class="flex justify-between bg-black bg-opacity-20 text-white w-screen"
      >
        <div
          class="px-5 xl:px-12 py-6 flex w-full items-center justify-between"
        >
          <router-link tag="a" to="/" exact>
            <a
              class="2xl:texy-5xl lg:text-5xl md:text-4xl text-3xl font-black font-heading"
              href="#"
            >
              MovieApp
            </a>
          </router-link>
          <!-- Nav Links START -->
          <ul
            class="sm:text-sm md:text-xl lg:text-2xl sm:flex hidden gap-5 ml-20 px-4 mx-auto font-semibold font-heading lg:gap-10 md:gap-8 sm:gap-5"
          >
            <router-link tag="li" to="/" exact active-class="active">
              <li>
                <a class="hover:text-red-500 cursor-pointer" href="#">Home</a>
              </li>
            </router-link>
            <router-link tag="li" exact to="/search" active-class="active">
              <li>
                <a class="hover:text-red-500 cursor-pointer" href="#">Search</a>
              </li>
            </router-link>
            <router-link
              tag="li"
              exact
              to="/topratedmovie"
              active-class="active"
            >
              <li>
                <a class="hover:text-red-500 cursor-pointer" href="#"
                  >Top Rated Movies</a
                >
              </li>
            </router-link>
          </ul>
          <!-- Nav Links END -->
          <!-- Small Nav Links START -->

          <!-- Header Icons START -->
          <div class="sm:hidden flex items-center space-x-5 cursor-pointer">
            <svg
              style="color: white"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="40"
              zoomAndPan="magnify"
              viewBox="0 0 30 30.000001"
              height="40"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="id1">
                  <path
                    d="M 3.386719 7.164062 L 26.613281 7.164062 L 26.613281 22.40625 L 3.386719 22.40625 Z M 3.386719 7.164062 "
                    clip-rule="nonzero"
                    fill="white"
                  ></path>
                </clipPath>
              </defs>
              <g clip-path="url(#id1)">
                <path
                  fill="white"
                  d="M 3.398438 22.40625 L 26.601562 22.40625 L 26.601562 19.867188 L 3.398438 19.867188 Z M 3.398438 16.054688 L 26.601562 16.054688 L 26.601562 13.515625 L 3.398438 13.515625 Z M 3.398438 7.164062 L 3.398438 9.703125 L 26.601562 9.703125 L 26.601562 7.164062 Z M 3.398438 7.164062 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                ></path>
              </g>
            </svg>
          </div>
          <!-- Header Icons END -->
        </div>
      </nav>
    </section>
  </div>
</template>
<script>
export default {
  components: {},
  data: () => ({}),
};
</script>
<style>
.active {
  color: #dc2625;
}
</style>
