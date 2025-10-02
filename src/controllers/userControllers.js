import User from '../models/userModel'
export const getUser =  async (req, res) =>{
    let user = await User.getUserById(req.body.id)
    res.status(200).json(user)
    
};

export const getUsers = async (req, res) => {
    
};

export const createUser = (req, res) => {

};
export const updateUser = (req, res) => {

};
export const deleteUser = (req, res)=> {

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
