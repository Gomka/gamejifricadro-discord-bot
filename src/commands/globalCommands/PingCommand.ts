import { SlashCommandBuilder, Interaction, CacheType, InteractionResponse, InteractionWebhook, BaseInteraction, ChatInputCommandInteraction } from "discord.js";
import { ICommand } from "../ICommands";

export default class PingCommand implements ICommand {
    name: string = "ping";
    build(): Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup"> {
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription("returns a pong!");
    }
    run(interaction: ChatInputCommandInteraction): void {
        interaction.reply("pong!");
    }
}