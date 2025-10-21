import Category from '../models/categoryModel.js'

export const controllerGetCategorybyId =  async (req, res) =>{
    user = await Category.getCategoryById(req.param.id);
    res.status(200).json(user);
    
};
export const controllerGetCategoryAll = async (req, res) => {
    user = await Category.getCategoryAll();
    res.status(200).json(user);
};

export const controllerCreateCategory = async (req, res) => {
    const {name, authorId} = req.body;
    const newcategory = new Category(name, authorId);
     await newcategory.saveCategory()
    res.status(201).json(newTask);
};
//export const controllerUpdateTask = async(req, res) => {
   // user = await Task.updateTask(req.body.id, req.body)
    //res.status(200).json(user)
//};
//export const controllerDeleteTask =  async (req, res)=> {
    //user = await Task.deleteTask(req.body.id)
    //res.status(200).json(user)
//};

