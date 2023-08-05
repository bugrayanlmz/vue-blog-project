import { createRouter, createWebHistory } from "vue-router";
import anasayfa from "../views/anasayfa.vue";
import kategoriler from "../views/kategoriler.vue";
import yazarlar from "../views/yazarlar.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "anasayfa",
      component: anasayfa,
    },
    {
      path: "/kategoriler",
      name: "kategoriler",
      component: kategoriler,
    },
    {
      path: "/yazarlar",
      name: "yazarlar",
      component: yazarlar,
    },
  ],
});

export default router;
