import {Router} from "express"
import { Login } from "../controllers/auth.js"

const authRoutes:Router=Router()


authRoutes.get('/login',Login)

export default authRoutes