import { Router } from "express";
import auth from "../middleware/auth.js";
import {
    AddSubCategory,
    // deleteSubCategoryController,
    // getSubCategoryController,
    // updateSubCategoryController
} from "../controllers/subCategory.controllers.js";

const subCategoryRouter = Router()

subCategoryRouter.post('/create', auth, AddSubCategory)
// subCategoryRouter.post('/get',getSubCategoryController)
// subCategoryRouter.put('/update',auth,updateSubCategoryController)
// subCategoryRouter.delete('/delete',auth,deleteSubCategoryController)

export default subCategoryRouter