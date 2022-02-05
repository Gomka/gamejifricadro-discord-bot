const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in...`); // wea on bot ready
});

client.on('message', msg => {
  msg.reply('pong');
});

client.login(process.env.TOKEN);