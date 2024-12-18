import { Router } from 'express'
import auth from '../middleware/auth.js'
import {
    AddCategoryController,
    getCategory,
} from '../controllers/category.controllers.js'

const categoryRouter = Router()

categoryRouter.post("/add-category", auth, AddCategoryController)
categoryRouter.get("/get", auth, getCategory)


export default categoryRouter