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

    if (message.channel.id == process.env.TARGET_CHANNEL) {

        // we add the message to a spreadsheet
        message.channel.send("spotted");
    };

    switch (message.value) {
        case "cum":
            message.author.reply("Ya antojó");
            break;

        default:
            break;
    };
});

client.login(process.env.TOKEN);