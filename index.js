const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in...`); // wea on bot ready
});

client.on('message', async msg => {

    if (msg.author.bot) return;

    // mirar si los mensajes estan en un canal concreto

    // si lo estan, guardarlos en un excel

    // hacer replies morongas

    msg.reply('pong');
});

client.login(process.env.TOKEN);