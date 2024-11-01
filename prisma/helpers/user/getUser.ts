import prisma from "../../prisma";
async function getUser(telegramId:number) {
    return prisma.user.findUnique({
        where: { telegramId}
    });
}

export default getUser;