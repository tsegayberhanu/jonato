export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
import { Bot, webhookCallback } from "grammy";
import { InlineKeyboard } from "grammy";

import getUser from "@db/helpers/user/getUser";
import createUser from "@db/helpers/user/createUser";

const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token)
  throw new Error("TELEGRAM_BOT_TOKEN environment variable not found.");

const communityButton = InlineKeyboard.url(
  "Join Jonato Comminity",
  "https://t.me/LeleCryptos"
);
const webKeyButton = InlineKeyboard.webApp(
  "Start Earning Jonato 🔮!",
  "https://jonato.vercel.app"
);

const keyboard = new InlineKeyboard().row(webKeyButton).row(communityButton);
const bot = new Bot(token);

bot.command("start", async (ctx) => {
  const first_name = ctx?.from?.first_name;
  const startAppData = ctx?.match;

  console.log(startAppData, "start app data")

  const userData = {
    telegramId: ctx?.from?.id,
    firstName: ctx?.from?.first_name,
    lastName: ctx?.from?.last_name,
    username: ctx?.from?.username,
    languageCode: ctx?.from?.language_code,
    isBot: ctx?.from?.is_bot,
    isPremium: ctx?.from?.is_premium ?? false,
  };

  console.log(userData, "user data")

  try {
    const user = userData.telegramId && await getUser(BigInt(userData.telegramId));
    let message;
    if (user) {
      message = `Hey, ${first_name}`;
    } else {
      await createUser(userData);
      message = `Hey, ${first_name} Welcome to Jonato 🔮!`;
    }

    return ctx.reply(
      `${message}\nEmbark on a digital treasure quest with Jonato!\nDive into a world of hidden digital gems where each action reveals new riches.\nGather Jonato, uncover secrets, and turn your clicks into real rewards.\nThe hunt for the ultimate prize starts now!`,
      {
        reply_markup: keyboard,
      }
    );
  } catch (error) {
    console.error("Error handling user data:", error);
    return ctx.reply("Sorry, there was an error processing your request.");
  }
});

bot.on("message:text", async (ctx) => {
  const first_name = ctx?.from?.first_name;
  return ctx.reply(
    `Hey, ${first_name} Welcome to Jonato 🔮! \nEmbark on a digital treasure quest with Jonato!\nDive into a world of hidden digital gems where each action reveals new riches.\nGather Jonato, uncover secrets, and turn your clicks into real rewards.\nThe hunt for the ultimate prize starts now!`,
    {
      reply_markup: keyboard,
    }
  );
});

export const POST = webhookCallback(bot, "std/http");
