import {Router} from "express"
import { Login, SignUp } from "../controllers/auth.js"

const authRoutes:Router=Router()


authRoutes.post('/login',Login)

authRoutes.post("/signup",SignUp)



export default authRoutes