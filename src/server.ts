import { ActivityType, Client, Message } from "discord.js";
import { GetAllCommands } from "./commands/CommandsIndex";

const client = new Client({
    intents: 1,
    presence: {
        activities: [
            {
                name: "gameja",
                type: ActivityType.Competing
            }
        ]
    }
});
client.on("ready", () => {
    console.log("Andamo ruleta"); // wea on bot ready
});

client.on("message", (message: Message) => {

    if (message.author.bot) return;


    const messageLower = message.content.toLowerCase();

    if (message.channel.id == process.env.TARGET_CHANNEL) {

        // we add the message to a spreadsheet
        message.channel.send("spotted");
    }

    if (messageLower.includes("gamej")) {
        message.reply("De aquí a gameja.");
    }

});
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;
    const command = GetAllCommands.find(command => command.name === commandName);
    if (command)
        command.run(interaction);
    else
        interaction.reply("command not found");
});
client.login();