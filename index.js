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

    var messageLower = msg.content.toLowerCase();
    var messageStringsLower = messageLower.trim().split(/ +/g);

    switch (messageStringsLower[0]) {
        case "cum":
            msg.reply("Aweno");

            break;

        default:
            break;
    }

    msg.reply('pong');
});

client.login(process.env.TOKEN);