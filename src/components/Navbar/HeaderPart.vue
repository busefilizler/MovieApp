<template>
  <div class="flex flex-wrap justify-center place-items-start shadow-2xl">
    <section class="relative mx-auto">
      <!-- navbar -->
      <nav
        class="flex justify-between bg-black bg-opacity-20 text-white w-screen"
      >
        <div class="px-5 xl:px-12 py-6 flex w-full items-center">
          <router-link tag="a" to="/" exact>
            <a class="md:text-5xl sm:text-4xl font-black font-heading" href="#">
              MovieApp
            </a>
          </router-link>
          <!-- Nav Links START -->
          <ul
            class="sm:text-sm md:text-2xl sm:flex ml-20 px-4 mx-auto font-semibold font-heading gap-10"
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
          <!-- Header Icons START -->
          <div class="sm:hidden flex items-center space-x-5">
            <a class="hover:text-red-500" href="#">
              <svg
                class="sm:hidden flex text-white"
                viewBox="0 0 100 80"
                width="40"
                height="40"
              >
                <rect class="text-white" width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
              </svg>
            </a>
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
