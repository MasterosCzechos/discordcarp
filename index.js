const Discord = require('discord.js');

const bot = new Discord.Client();

bot.once('ready', () => {
    console.log("Je ready");
});

bot.login(process.env.token);
