import CategoryModel from "../models/category.model.js";


export const AddCategoryController = async (req, res) => {
    try {
        const { name, image } = req.body

        if (!name || !image) {
            return res.status(400).json({
                message: "Enter required fields",
                error: true,
                success: false
            })
        }

        const addCategory = new CategoryModel({
            name,
            image
        })

        const saveCategory = await addCategory.save()

        if (!saveCategory) {
            return res.status(500).json({
                message: "Not Created",
                error: true,
                success: false
            })
        }

        return res.json({
            message: "Add Category",
            data: saveCategory,
            success: true,
            error: false
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export const getCategory = async(req,res)=>{
    try {
        
        const data = await CategoryModel.find().sort({ createdAt : -1 })


        if (!data) {
            return res.status(500).json({
                message: "Not category found",
                error: true,
                success: false
            })
        }

        return res.json({
            data : data,
            error : false,
            success : true
        })
    } catch (error) {
        return res.status(500).json({
            message : error.messsage || error,
            error : true,
            success : false
        })
    }
}

export const updateCategory = async(req,res)=>{
    try {
        const { _id ,name, image } = req.body 

        const update = await CategoryModel.updateOne({
            _id : _id
        },{
           name, 
           image 
        })

        return res.json({
            message : "Updated Category",
            success : true,
            error : false,
            data : update
        })
    } catch (error) {
        return res.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}