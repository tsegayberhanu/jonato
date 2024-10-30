// File: app/api/bot/route.ts
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
import { Bot, webhookCallback } from "grammy";
import { InlineKeyboard } from "grammy";

const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token)
  throw new Error("TELEGRAM_BOT_TOKEN environment variable not found.");

const communityButton = InlineKeyboard.url(
  "Join Our Comminity",
  "https://t.me/lelehamkeyBot"
);

const webKeyButton = InlineKeyboard.url(
  "Get Redeem Codes",
  "https://t.me/lelehamkeyBot"
);

const keyboard = new InlineKeyboard()
  .row(communityButton)
  .row(webKeyButton)

const bot = new Bot(token);

bot.command("start", (ctx) => {
  const first_name = ctx?.from?.first_name;
  return ctx.reply(`Hey, ${first_name} Welcome to my bot!`, {
    reply_markup: keyboard,
  });
});

bot.on("message:text", async (ctx) => {
  await ctx.reply(ctx.message.text);
});

export const POST = webhookCallback(bot, "std/http");
