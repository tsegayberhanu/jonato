import prisma from "@db/prisma";
async function createUser(data: any) {
    return prisma.user.create({
        data
    });
}

export default createUser