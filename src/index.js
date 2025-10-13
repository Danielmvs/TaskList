// seed.ts
import { json } from 'express';
import { PrismaClient } from '../generated/prisma/index.js';

// Se o seu 'output' no schema for diferente, ajuste o caminho do import.
// Ex: import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

 const UserALL = await prisma.user.findMany({
  include: {
    tasks:{
      include: {
        category: true,
      },
    },
  },
});

console.log(JSON.stringify(UserALL, null, 2))

await prisma.task.updateMany({
  where:{
    id: '68e7c3fe67396929d3f630f2',
    authorId:'68e7c3fd67396929d3f630ef'
  },
  data:{
    done: true,
  },
})

 const updateAlice = await prisma.user.findMany({
  include: {
    tasks:{
      include: {
        category: true,
      },
    },
  },
});
console.log(JSON.stringify(updateAlice, null, 2))


main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });