const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Andamo ruleta`); // wea on bot ready
});

client.on('message', message => {

    if (message.author.bot) return;

    // mirar si los mensajes estan en un canal concreto

    // si lo estan, guardarlos en un excel

    // hacer replies morongas

    var messageLower = message.content.toLowerCase();

    if (message.channel.id == process.env.TARGET_CHANNEL) {

        // we add the message to a spreadsheet
        message.channel.send("spotted");
    };

    if (messageLower.includes("gameja")) {
        message.author.reply("De aquí a gameja.");
    }
});

client.login(process.env.TOKEN);