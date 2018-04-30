const Public = require('public'); 
const Fs = require('fs');
const Bot = require('bot');
const Discord = require('discord.js');
const token = 'NDM1NTA2ODAzMjA4NjE4MDA1.DckIYw.jJhvar38mOdC1-ABWLRRa7cY8Wg';
Public.botClient = new Discord.Client();

//Events
Public.botClient.on('message', Bot.reponseCmd);

var promise = Public.botClient.login(token);
