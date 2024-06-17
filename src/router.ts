import { createRouter, createWebHistory } from "vue-router";
import MoviesView from "./views/MoviesView.vue";
import MovieDetailsView from "./views/MovieDetailsView.vue";
import NotFoundView from "./views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.VUE_APP_BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/movies",
    },
    {
      path: "/movies",
      component: MoviesView,
    },
    {
      path: "/movies/:id",
      name: "movieDetails",
      component: MovieDetailsView,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFoundView,
    }
  ],
});

export default router;
