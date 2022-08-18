import { SlashCommandBuilder, Interaction, CacheType, InteractionResponse, InteractionWebhook, BaseInteraction, ChatInputCommandInteraction } from "discord.js";
import { ICommand } from "../ICommands";

export default class EchoCommand implements ICommand {
    name: string = "echo";
    guildId?: string = process.env.GAMEJA_GUILD_ID
    build(): Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup"> {
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription("returns the entry")
            .addStringOption(option =>
                option.setName('input')
                    .setDescription('The input to echo back')
                    .setRequired(true));
    }

    run(interaction: ChatInputCommandInteraction): void {
        interaction.reply(interaction.options.getString("input"));
    }
}