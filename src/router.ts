import { createRouter, createWebHistory } from "vue-router";
import FormView from "./views/FormView.vue";
import MoviesView from "./views/MoviesView.vue";
import MovieDetailsView from "./views/MovieDetailsView.vue";
import NotFoundView from "./views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: FormView,
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
