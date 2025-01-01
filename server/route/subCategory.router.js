import { Router } from "express";
import auth from "../middleware/auth.js";
import {
    AddSubCategory,
    // deleteSubCategoryController,
    getSubCategory,
    updateSubCategory
} from "../controllers/subCategory.controllers.js";

const subCategoryRouter = Router()

subCategoryRouter.post('/create', auth, AddSubCategory)
subCategoryRouter.post('/get',getSubCategory)
subCategoryRouter.put('/update',auth,updateSubCategory)
// subCategoryRouter.delete('/delete',auth,deleteSubCategoryController)

export default subCategoryRouter