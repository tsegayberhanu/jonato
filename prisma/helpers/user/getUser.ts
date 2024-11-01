import prisma from "@db/prisma";
async function getUser(telegramId: number) {
  try {
    const user = await prisma.user.findUnique({
      where: { telegramId },
    });
    return user;
  } catch (error) {
    console.log(error)
    return
  }
}
export default getUser;
