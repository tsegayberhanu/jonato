import { Bot } from "grammy";
const bot = new Bot(""); // <-- put your bot token between the ""
bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
bot.on("message", (ctx) => ctx.reply("Got another message!"));
bot.start();