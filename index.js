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


    if (msg.channelId == process.env.TARGET_CHANNEL) {
        console.log(`channel found`);
        msg.channel.reply("𝓮𝓷𝓳𝓸𝔂 𝔂𝓸𝓾𝓻 𝓶𝓮𝓪𝓵");
    }

    msg.channel.send(msg.channelId);
});

client.login(process.env.TOKEN);