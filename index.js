const Http = require('http');
const Fs = require('fs');
const Discord = require('discord.js');
const Bot = require('bot');
const Public = require('public');

Public.botClient = new Discord.Client();

//Events
Public.botClient.on('message', Bot.replyCmd);

var promise = Public.botClient.login('NDM1NTA2ODAzMjA4NjE4MDA1.DbaBzA.c-0jLAuHkMmZAnoEKVYs5m33QVs');

