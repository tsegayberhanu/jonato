export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
import { Bot, webhookCallback } from "grammy";
import { InlineKeyboard } from "grammy";

const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token)
  throw new Error("TELEGRAM_BOT_TOKEN environment variable not found.");

const communityButton = InlineKeyboard.url(
  "Join Jonato Comminity",
  "https://t.me/LeleCryptos"
);

const webKeyButton = InlineKeyboard.url(
  "Start Earning Jonato 🔮!",
  "https://jonato.vercel.app"
);

const keyboard = new InlineKeyboard()
  .row(communityButton)
  .row(webKeyButton)

const bot = new Bot(token);

bot.command("start", (ctx) => {
  const first_name = ctx?.from?.first_name;
  return ctx.reply(`Hey, ${first_name} Welcome to Jonato 🔮! \nEmbark on a digital treasure quest with Jonato!\nDive into a world of hidden digital gems where each action reveals new riches.\nGather Jonato, uncover secrets, and turn your clicks into real rewards.\nThe hunt for the ultimate prize starts now!`, {
    reply_markup: keyboard,
  });
});

bot.on("message:text", async (ctx) => {
  await ctx.reply(ctx.message.text);
});

export const POST = webhookCallback(bot, "std/http");
