import { Router } from 'express'
import {
    login,
    logout,
    registerUser,
    verifyEmail,
   
} from '../controllers/user.controllers.js'
import auth from '../middleware/auth.js'

const userRouter = Router()

userRouter.post('/register', registerUser)
userRouter.post('/verify-email', verifyEmail)
userRouter.post('/login', login)
userRouter.get('/logout', auth, logout)




export default userRouter