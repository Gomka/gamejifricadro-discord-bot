const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Andamo ruleta`); // wea on bot ready
});

client.on('message', async msg => {

    if (msg.author.bot) return;

    // mirar si los mensajes estan en un canal concreto

    // si lo estan, guardarlos en un excel

    // hacer replies morongas

    if (message.channelid == process.env.TARGET_CHANNEL) {
        message.channel.send("spotted");
    }
});

client.login(process.env.TOKEN);