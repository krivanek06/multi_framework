import { createPinia } from "pinia";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import Login from "./components/views/LoginView.vue";
import Main from "./components/views/MainLayout.vue";
import { displayForTime } from "./directives/display-for-time";
import { sticky } from "./directives/sticky";
import { useAuthenticationStore } from "./store";
import "./style.scss";

const router = createRouter({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Main, // eager load
      meta: {
        title: ""
      },
      children: [
        // lazy load
        { path: "", redirect: "/anime" },
        {
          path: "anime",
          meta: {
            title: "Anime"
          },
          component: () => import("./components/views/AnimeView.vue")
        },
        {
          path: "anime/:id",
          meta: {
            title: "Anime Details"
          },
          component: () => import("./components/views/AnimeDetailsView.vue")
        }
      ]
    },
    { path: "/login", component: Login }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  }
});

router.beforeEach((to, from, next): void => {
  document.title = "App Name - " + (to.meta.title as string);
  return next();
});

router.beforeEach(async (to, from, next): Promise<void> => {
  const authenticationStore = useAuthenticationStore();

  if (!authenticationStore.user && to.path !== "/login") {
    return next("/login");
  }

  return next();
});

createApp(App)
  .use(router)
  .use(createPinia())
  .directive("sticky", sticky)
  .directive("displayForTime", displayForTime)
  .mount("#app");
