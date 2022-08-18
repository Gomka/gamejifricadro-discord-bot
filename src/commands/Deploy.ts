import { REST, Routes, SlashCommandBuilder } from "discord.js";
import { GetAllGamejaCommands, GetAllGlobalCommands } from "./CommandsIndex";
export default function DeployCommands() {

    const gamejaCommands = GetAllGamejaCommands.map(x => x.build().toJSON())
    const globalCommands = GetAllGlobalCommands.map(x => x.build().toJSON())

    const rest = new REST().setToken(process.env.TOKEN)
    rest.put(
        Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GAMEJA_GUILD_ID),
        { body: gamejaCommands })
        .then(() => console.log("succesfully registered commmands for Gameja"))
        .catch(console.error)

    rest.put(
        Routes.applicationCommands(process.env.CLIENT_ID), { body: globalCommands })
        .then(() => console.log("succesfully registered global commmands"))
        .catch(console.error)
}