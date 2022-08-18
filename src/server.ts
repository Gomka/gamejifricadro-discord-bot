import { ActivityType, Client, Message } from "discord.js";
import { GetAllCommands } from "./commands/CommandsIndex";
export default function CreateDiscordClient(): Client<boolean> {
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

        if (message.channel.id == "1005606436333694986") {

            // we add the message to a spreadsheet
            message.channel.send("spotted");
        }

        if (messageLower.includes("gamej")) {
            message.reply("De aquí a gameja. 2");
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
    return client;
}