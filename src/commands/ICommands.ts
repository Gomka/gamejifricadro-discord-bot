import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export interface ICommand  {
    name: string;
    guildId ?: string;
    build: () => Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">;
    run: (interaction: ChatInputCommandInteraction) => void;
}