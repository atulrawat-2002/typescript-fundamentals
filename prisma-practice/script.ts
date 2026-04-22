import { PrismaClient } from "@prisma/client";
const Prisma = new PrismaClient();

async function main(){
    await Prisma.user.deleteMany();
    const user = await Prisma.user.createMany({
        data: [
            {
            name: 'Sally',
            email: 'sally@test.com',
            age: 23,
            userPreference: {
                create: {
                    emailUpdate: true
                }
            }
        }
    ]
    })
    console.log(user)
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async() => {
        await Prisma.$disconnect();
    })