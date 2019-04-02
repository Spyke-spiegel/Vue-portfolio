import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import Project from "./views/project.vue";
import Contact from "./views/contact.vue";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/project",
      name: "project",
      component: Project
    },

    {
      path: "/contact",
      name: "contact",
      component: Contact
    }
  ]
});