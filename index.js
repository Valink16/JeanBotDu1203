const Public = require('public'); 
const Fs = require('fs');
const Bot = require('bot');
const Discord = require('discord.js');

Public.botClient = new Discord.Client();

//Events
Public.botClient.on('message', Bot.reponseCmd);

console.log(Bot.choisirInsulte("GENERAL"));

var promise = Public.botClient.login('NDM1NTA2ODAzMjA4NjE4MDA1.DbaBzA.c-0jLAuHkMmZAnoEKVYs5m33QVs');

