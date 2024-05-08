import {Router} from "express"
import { Login, SignUp } from "../controllers/auth.js"
import { errorHandler } from "../error-handler.js"

const authRoutes:Router=Router()


authRoutes.post('/login',errorHandler(Login))

authRoutes.post("/signup",errorHandler(SignUp))



export default authRoutes