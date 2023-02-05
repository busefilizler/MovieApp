import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchResult from "../views/SearchResults.vue";
import MovieDetail from "../views/MovieDetails.vue";
import TopRate from "../views/TopRate.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/search",
    name: "search",
    component: SearchResult,
  },
  {
    path: "/moviedetail:id",
    name: "moviedetail",
    component: MovieDetail,
  },
  {
    path: "/topratedmovie",
    name: "topratedmovie",
    component: TopRate,
  },
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  base: process.env.BASE_URL,
  routes,
});

export default router;
