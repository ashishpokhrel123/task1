import express from "express";
import authRoutes from "./auth.route";
import taskRoutes from "./task.route";
const router = express.Router();
const defaultRoutes = [
  {
    path: "/auth",
    route: authRoutes,
  },

  {
    path: "/task",
    route: taskRoutes,
  },
];

defaultRoutes.forEach((routes) => {
  router.use(routes.path, routes.route);
});

export default router;
