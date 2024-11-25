import { Router } from 'express'
import {
    registerUser,
    verifyEmail,
   
} from '../controllers/user.controllers.js'

const userRouter = Router()

userRouter.post('/register', registerUser)
userRouter.post('/verify-email', verifyEmail)




export default userRouter