import User from '../models/userModel.js'
const user = [];

export const controllerGetUserbyId =  async (req, res) =>{
    user = await User.getUserById(req.param.id);
    res.status(200).json(user);
    
};
export const controllerGetUserAll = async (req, res) => {
    user = await User.getUserAll();
    res.status(200).json(user);
};

export const controllerCreateUser = async (req, res) => {
    console.log(req);
    const {name,  email, password} = req.body;
    const newUser = new User(name, email, password);
    await newUser.saveUser();
    res.status(200).json(newUser);
};
/* export const controllerUpdateUser = async(req, res) => {
    user = await User.updateUser(req.body.id, req.body)
    res.status(200).json(user)
};
export const controllerDeleteUser =  async (req, res)=> {
    user = await User.deleteUser(req.body.id)
    res.status(200).json(user)
};
 */



