import { Router } from 'express'
import auth from '../middleware/auth.js'
import {
    AddCategoryController,
    deleteCategory,
    getCategory,
    updateCategory,
} from '../controllers/category.controllers.js'

const categoryRouter = Router()

categoryRouter.post("/add-category", auth, AddCategoryController)
categoryRouter.get("/get", auth, getCategory)
categoryRouter.put("/update", auth, updateCategory)
categoryRouter.delete("/delete", auth, deleteCategory)



export default categoryRouter