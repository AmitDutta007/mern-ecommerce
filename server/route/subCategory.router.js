import { Router } from "express";
import auth from "../middleware/auth.js";
import {
    AddSubCategory,
    // deleteSubCategoryController,
    getSubCategory,
    // updateSubCategoryController
} from "../controllers/subCategory.controllers.js";

const subCategoryRouter = Router()

subCategoryRouter.post('/create', auth, AddSubCategory)
subCategoryRouter.post('/get',getSubCategory)
// subCategoryRouter.put('/update',auth,updateSubCategoryController)
// subCategoryRouter.delete('/delete',auth,deleteSubCategoryController)

export default subCategoryRouter