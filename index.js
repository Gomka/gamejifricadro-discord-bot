const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Andamo ruleta`); // wea on bot ready
});

client.on('message', msg => {

    if (msg.author.bot) return;

    // mirar si los mensajes estan en un canal concreto

    // si lo estan, guardarlos en un excel

    // hacer replies morongas

    if (msg.channel.id == process.env.TARGET_CHANNEL) {
        msg.channel.send("heroku id");
    }

    if (msg.channel.id == 939601214709063750) {
        msg.channel.send("hardcoded id");
    }

    msg.channel.send(msg);
});

client.login(process.env.TOKEN);