const Http = require('http');
const Fs = require('fs');
const Discord = require('discord.js');
const bot = new Discord.Client();

const Bot = require('bot')


Bot.downloadAvatar('https://cdn.dribbble.com/users/10523/screenshots/2652921/bot_1x.png');

bot.on('message', Bot.replyCmd);

var promise = bot.login('NDM1NTA2ODAzMjA4NjE4MDA1.DbaBzA.c-0jLAuHkMmZAnoEKVYs5m33QVs');

