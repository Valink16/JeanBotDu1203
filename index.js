const Public = require('public'); 
const Fs = require('fs');
const Bot = require('bot');
const Discord = require('discord.js');
const token = '';
Public.botClient = new Discord.Client();

//Events
Public.botClient.on('message', Bot.reponseCmd);

var promise = Public.botClient.login(token);
