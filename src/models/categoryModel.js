import { PrismaClient } from '../../generated/prisma/index.js';
const prisma = new PrismaClient();
 
export class Category {
    constructor(name, authorId) {
        this.id = null
        this.name = name;
        this.authorId = authorId;
     };
     async getCategoryAll() {
        const categories = await prisma.category.findMany({
            where:{
                authorId: this.authorId
            }
        }) 

     };
    
    async saveCategory(){
        const category = prisma.category.create({
            data:{
                name: this.name,
                authorId: this.authorId,
            }
        });
        return category;
    };
}export default Category;