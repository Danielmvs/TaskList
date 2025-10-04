import User from '../models/userModel'
const user = [];

export const controllerGetUserbyId =  async (req, res) =>{
    user = await User.getUserById(req.param)
    res.status(200).json(user)
    
};
export const controllerGetUserAll = async (req, res) => {
    user = await User.getUserAll()
    res.status(200).json(user)
};

export const controllerCreateUser = async (req, res) => {
     user = await User.createUser(req.body)
     res.status(200).json(user)
};
export const controllerUpdateUser = async(req, res) => {
    user = await User.updateUser(req.body.id, req.body)
    res.status(200).json(user)
};
export const controllerDeleteUser =  async (req, res)=> {
    user = await User.deleteUser(req.body.id)
    res.status(200).json(user)
};





// app.post('/users', async (req, res) => {
//     await prisma.user.create({
//         data: {
//             name: req.body.name,
//             email: req.body.email,
//             age: req.body.age
//         }
//     })
//     res.status(201).json(req.body);
// });

//  app.put('/users/:id', async (req, res) => {
    
//     await prisma.user.update({
//         where: {
//             id: req.params.id
//         },
//         data: {
//             name: req.body.name,
//             email: req.body.email,
//             age: req.body.age
//         }
//     })
//     res.status(201).json(req.body);
// });

// app.delete('/users/:id', async (req, res) => {
    
//     await prisma.user.delete({
//         where: {
//             id: req.params.id
//         }
        
//     })
//     res.status(200).json({msg: 'usuario deletado'});
// });

// app.get('/users', async (req, res) => {

//     let users = [];
//     if(req.query){
//         users = await prisma.user.findMany({
//             where:{
//                 name: req.query.name,
//                 age: req.query.age,
//                 email: req.query.email
//             }
//         });
//     } else {
//          users = await prisma.user.findMany();
//     }

//     res.status(200).json(users);
// });
