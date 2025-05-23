import { Router } from "express";
import { UserController } from "./controllers/user.controler";
import { AuthMiddleware } from "./middlewares/auth.middleware";

const routes = Router();

routes.post("/register", new UserController().create);
routes.post("/login", new UserController().login);

routes.use(AuthMiddleware);
routes.get("/profile", new UserController().getProfile);

export default routes;
