import { Router } from "express";
import { Login } from "../controllers/auth.js";
const authRoutes = Router();
authRoutes.get('/login', Login);
export default authRoutes;
//# sourceMappingURL=auth.js.map