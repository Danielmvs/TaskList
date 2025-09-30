import { PrismaClient } from '../../generated/prisma/index.js';
const prisma = new PrismaClient();

export const getUserById =  async (req, res) =>{
    console.log(req);
   let user = await prisma.user.findMany({
        where: {
            id: req.query.id
        }
    });
    res.status(200).json(user);
    
};

export const getUserAll = async (req, res) => {
    
    let users =  await prisma.user.findMany();
    res.status(200).json(users);
};

export const createUser = () => {

};
export const updateUser = () => {

};
export const deleteUser = ()=> {

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
