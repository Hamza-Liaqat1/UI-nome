import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Design from "./components/Design.vue";
import Art from "./components/Art.vue";
import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },

    {
      path: "/design",
      component: Design,
    },
    {
      path: "/art",
      component: Art,
    },
  ],
});

const app = createApp(App);

app.use(router);

app.mount("#app");
