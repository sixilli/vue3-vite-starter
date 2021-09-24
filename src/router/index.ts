import {
  createRouter,
  createWebHashHistory,
  Router,
  RouteRecordRaw,
} from "vue-router";
import { routes } from "./routes";

export const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: routes as RouteRecordRaw[],
});
