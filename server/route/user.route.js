import { Router } from 'express'
import {
    login,
    logout,
    registerUser,
    updateUserDetails,
    uploadAvatar,
    verifyEmail,
   
} from '../controllers/user.controllers.js'
import auth from '../middleware/auth.js'
import upload from '../middleware/multer.js'

const userRouter = Router()

userRouter.post('/register', registerUser)
userRouter.post('/verify-email', verifyEmail)
userRouter.post('/login', login)
userRouter.get('/logout', auth, logout)
userRouter.put('/upload-pic', auth, upload.single('avatar'), uploadAvatar)
userRouter.put('/update-user', auth, updateUserDetails)




export default userRouter