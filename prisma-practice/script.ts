import { PrismaClient } from "@prisma/client";
const Prisma = new PrismaClient();

async function main(){
    const users = await Prisma.user.findMany()

    console.log(users)
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async() => {
        await Prisma.$disconnect();
    })