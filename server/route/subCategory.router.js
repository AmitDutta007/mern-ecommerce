import { Router } from "express";
import auth from "../middleware/auth.js";
import {
    AddSubCategory,
    deleteSubCategory,
    getSubCategory,
    updateSubCategory
} from "../controllers/subCategory.controllers.js";

const subCategoryRouter = Router()

subCategoryRouter.post('/create', auth, AddSubCategory)
subCategoryRouter.post('/get', getSubCategory)
subCategoryRouter.put('/update', auth, updateSubCategory)
subCategoryRouter.delete('/delete', auth, deleteSubCategory)

export default subCategoryRouter