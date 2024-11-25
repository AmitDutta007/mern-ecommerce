import UserModel from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import verifyEmailTemplate from '../utils/verifyEmailTemplate.js'
import sendEmail from '../config/sendEmail.js'


export async function registerUser(req,res){
    try {
        const { name, email , password } = req.body

        if(!name || !email || !password){
            return res.status(400).json({
                message : "provide email, name, password",
                error : true,
                success : false
            })
        }

        const user = await UserModel.findOne({ email })

        if(user){
            return res.json({
                message : "Already register email",
                error : true,
                success : false
            })
        }

        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(password,salt)

        const payload = {
            name,
            email,
            password : hashPassword
        }

        const newUser = new UserModel(payload)
        const save = await newUser.save()

        const VerifyEmailUrl = `${process.env.FRONTEND_URL}/verify-email?code=${save?._id}`

        const verifyEmail = await sendEmail({
            sendTo : email,
            subject : "Verify email from grabvault",
            html : verifyEmailTemplate({
                name,
                url : VerifyEmailUrl
            })
        })

        return res.json({
            message : "User register successfully",
            error : false,
            success : true,
            data : save
        })

    } catch (error) {
        return res.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

export async function verifyEmail(req,res){
    try {
        const { code } = req.body

        const user = await UserModel.findOne({ _id : code})

        if(!user){
            return res.status(400).json({
                message : "Invalid code",
                error : true,
                success : false
            })
        }

        const updateUser = await UserModel.updateOne({ _id : code },{
            verify_email : true
        })

        return res.json({
            message : "Verify email done",
            success : true,
            error : false
        })
    } catch (error) {
        return res.status(500).json({
            message : error.message || error,
            error : true,
            success : true
        })
    }
}

// export async function loginController(request,response){
//     try {
//         const { email , password } = request.body


//         if(!email || !password){
//             return response.status(400).json({
//                 message : "provide email, password",
//                 error : true,
//                 success : false
//             })
//         }

//         const user = await UserModel.findOne({ email })

//         if(!user){
//             return response.status(400).json({
//                 message : "User not register",
//                 error : true,
//                 success : false
//             })
//         }

//         if(user.status !== "Active"){
//             return response.status(400).json({
//                 message : "Contact to Admin",
//                 error : true,
//                 success : false
//             })
//         }

//         const checkPassword = await bcryptjs.compare(password,user.password)

//         if(!checkPassword){
//             return response.status(400).json({
//                 message : "Check your password",
//                 error : true,
//                 success : false
//             })
//         }

//         const accesstoken = await generatedAccessToken(user._id)
//         const refreshToken = await genertedRefreshToken(user._id)

//         const updateUser = await UserModel.findByIdAndUpdate(user?._id,{
//             last_login_date : new Date()
//         })

//         const cookiesOption = {
//             httpOnly : true,
//             secure : true,
//             sameSite : "None"
//         }
//         response.cookie('accessToken',accesstoken,cookiesOption)
//         response.cookie('refreshToken',refreshToken,cookiesOption)

//         return response.json({
//             message : "Login successfully",
//             error : false,
//             success : true,
//             data : {
//                 accesstoken,
//                 refreshToken
//             }
//         })

//     } catch (error) {
//         return response.status(500).json({
//             message : error.message || error,
//             error : true,
//             success : false
//         })
//     }
// }

// //logout controller
// export async function logoutController(request,response){
//     try {
//         const userid = request.userId //middleware

//         const cookiesOption = {
//             httpOnly : true,
//             secure : true,
//             sameSite : "None"
//         }

//         response.clearCookie("accessToken",cookiesOption)
//         response.clearCookie("refreshToken",cookiesOption)

//         const removeRefreshToken = await UserModel.findByIdAndUpdate(userid,{
//             refresh_token : ""
//         })

//         return response.json({
//             message : "Logout successfully",
//             error : false,
//             success : true
//         })
//     } catch (error) {
//         return response.status(500).json({
//             message : error.message || error,
//             error : true,
//             success : false
//         })
//     }
// }