// router.js

import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Design from "./components/Design.vue";
import Art from "./components/Art.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    {
      path: "/design",
      name: "design",
      component: Design,
    },
    {
      path: "/art",
      name: "art",
      component: Art,
    },
  ],
});
