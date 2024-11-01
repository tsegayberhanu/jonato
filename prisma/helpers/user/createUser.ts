import prisma from "../../prisma";
async function createUser(data: any) {
    return prisma.user.create({
        data
    });
}

export default createUser