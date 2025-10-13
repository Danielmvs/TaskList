import { PrismaClient } from '../../generated/prisma';
const prisma = new PrismaClient();

export class Task{
    constructor(title, description = '', authorId, categoryId){
        this.id = null;
        this.title = title;
        this.description = description;
        this.done = false;
        this.authorId = authorId;
        this.categoryId = categoryId;
    }
    async getTaskById() {
        const task = await prisma.task.findMany({
            where:{
                id: this.id
            },
            include:{
                category: true
            }
        });
        return task;
    };
    async getTasksAll() {
        const tasks = await prisma.task.findMany({
            where:{
                authorId: this.authorId
            }
        });
        return tasks;
    };
    async saveTask(){
        const task = await prisma.task.create({
            data:{
                title: this.title,
                description: this.description,
                done: this.done,
                authorId: this.authorId,
                categoryId: this.categoryId
            }
        });
        return task;
    };
  
}