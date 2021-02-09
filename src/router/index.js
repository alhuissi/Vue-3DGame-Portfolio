import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Home
  },
  {
    path: "/home",
    name: "Home",

    component: () =>
      import(/* webpackChunkName: "home" */ "../views/home.vue")
  },
  {
    path: "/lab",
    name: "Lab",

    component: () =>
      import(/* webpackChunkName: "lab" */ "../views/lab.vue")
  },
  {
    path: "/contact",
    name: "Contact",

    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/contact.vue")
  },
  {
    path: "/blog",
    name: "Blog",

    component: () =>
      import(/* webpackChunkName: "blog" */ "../views/blog.vue")
  },
  {
    path: "/3DModelViewer",
    name: "3D Model Viewer",

    component: () =>
      import(/* webpackChunkName: "3DLoaderViewer" */ "../views/3DModelViewer.vue")
  },
  {
    path: "/portafolios",
    name: "Portafolios",

    component: () =>
      import(/* webpackChunkName: "portafolios" */ "../views/portafolios.vue")
  },
    {
    path: "/proyecto",
    name: "Proyecto",

    component: () =>
      import(/* webpackChunkName: "portafolios" */ "../views/proyecto.vue")
  },
  {
    path: "/skills",
    name: "Skills",

    component: () =>
      import(/* webpackChunkName: "skills" */ "../views/skills.vue")
  },
  {
    path: "/sala3",
    name: "Galería Secreta",

    component: () =>
      import(/* webpackChunkName: "skills" */ "../views/sala3.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
