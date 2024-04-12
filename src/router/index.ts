import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // scrollBehavior(to, from, savedPosition) {
    // console.log( to )
    // if (to.hash && to.path === '/projects')  {
      // return {
        // el: to.hash,
        // behavior: 'smooth',
      // }
    // }
  // },
  routes: [
    {
      path: "/",
      name: "Welcome",
      component: HomeView,
      meta: { transition: 'fade' } 
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      meta: { transition: 'fade' }
    },    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/ProjectsView.vue"),
      // meta: { transition: 'fade' }
    },
  ],
});


export default router;
