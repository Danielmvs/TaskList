import { PrismaClient } from '../../generated/prisma/index.js';
const prisma = new PrismaClient();

class User {
    constructor(name, email, password) {
        this.id;
        this.name = name;
        this.email = email;
        this.password = password;
    };
    
    async saveUser(){
        const user = await prisma.user.create({
            data:{
                name: this.name,
                email: this.email,
                password: this.password
            }
        })
    };

    /*static async updateUser(id , data) {
        const user = await prisma.user.update({
            where: { id },
        })
    };

     static async deleteUser(id){
        const user = await prisma.user.delete({
            where: {id}
        })
    
    };  */
    
   
}
export default User;