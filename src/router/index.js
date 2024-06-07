import { createRouter, createWebHistory } from "vue-router";
import home from "../pages/home.vue"
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component:  ()=>import('../pages/not-found.vue')
    },
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/pages/About.vue"),
    },
    {
      path: "/pricing",
      name: "pricing",
      component: () => import("@/pages/Pricing.vue"),
    },
    {
      path: "/work",
      name: "work",
      component: () => import("@/pages/Work.vue"),
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("@/pages/Blog.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/pages/Contact.vue"),
    },
  ],
});

export default router;
  