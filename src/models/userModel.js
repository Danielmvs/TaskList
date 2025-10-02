import Email from './email';
import { PrismaClient } from '../../generated/prisma';
const prisma = new PrismaClient();

class User {
    constructor(nome, email) {
        this.id
        this.nome = nome;
        this.email = Email;
    };
    
    static async getUserById(userId) {
       const user = await prisma.user.findUnique({
            where: { id: userId }
        });
        return user;
        
    };
    
    static async getUserAll() {
        const user = await prisma.user.findMany();
    };
    
    static async createUser(data){
        const user = await prisma.user.create({
            data
        })
    };
    static async updateUser(id , data) {
        const user = await prisma.user.update({
            where: { id },
            data
        })
    };
     static async deleteUser(id){
        const user = await prisma.user.delete({
            where: {id}
        })
    
    };
    
    
   
}