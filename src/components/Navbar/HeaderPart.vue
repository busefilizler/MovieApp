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
            class="hidden sm:text-sm md:text-2xl sm:flex ml-20 px-4 mx-auto font-semibold font-heading gap-10"
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
          </ul>
          <!-- Nav Links END -->
          <!-- Header Icons START -->
          <div class="hidden sm:flex items-center space-x-5">
            <a class="hover:text-red-500" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </a>
            <!-- Sign In / Register      -->
            <a class="flex items-center hover:text-red-500" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 hover:text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
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
