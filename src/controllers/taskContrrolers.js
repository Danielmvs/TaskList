import Task from '../models/taskModel.js'

export const controllerGetTaskbyId =  async (req, res) =>{
    user = await Task.getTaskById(req.param.id);
    res.status(200).json(user);
    
};
export const controllerGetTaskAll = async (req, res) => {
    user = await Task.getTaskAll();
    res.status(200).json(user);
};

export const controllerCreateTask = async (req, res) => {
    const {title, description, authorId, categoryId} = req.body;
    const newTask = new Task(title, description, authorId, categoryId);
    await newTask.saveTask();
    res.status(200).json(newTask);
};
/* export const controllerUpdateTask = async(req, res) => {
    user = await Task.updateTask(req.body.id, req.body)
    res.status(200).json(user)
};
export const controllerDeleteTask =  async (req, res)=> {
    user = await Task.deleteTask(req.body.id)
    res.status(200).json(user)
}; */


