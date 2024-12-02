import { Router } from "express";
import { signUp } from "../controllers/user.controller";

const route = Router();

route.post("/signup", signUp);

export default route;