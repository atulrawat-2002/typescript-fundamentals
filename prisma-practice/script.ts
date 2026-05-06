import { PrismaClient } from "@prisma/client";
const Prisma = new PrismaClient();

async function main(){
    // await Prisma.user.deleteMany();
    const user = await Prisma.user.findFirst({
        where: {
            name: 'kyle'
        }
    })
    console.log("Users => ", user)
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async() => {
        await Prisma.$disconnect();
    })