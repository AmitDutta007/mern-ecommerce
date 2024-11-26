import { Router } from 'express'
import {
    login,
    registerUser,
    verifyEmail,
   
} from '../controllers/user.controllers.js'

const userRouter = Router()

userRouter.post('/register', registerUser)
userRouter.post('/verify-email', verifyEmail)
userRouter.post('/login', login)




export default userRouter