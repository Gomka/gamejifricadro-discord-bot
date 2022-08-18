import { REST, Routes, SlashCommandBuilder } from "discord.js";
import { GetAllGamejaCommands, GetAllGlobalCommands } from "./CommandsIndex";
export default function DeployCommands() {

    const gamejaCommands = GetAllGamejaCommands.map(x => x.build().toJSON())
    const globalCommands = GetAllGlobalCommands.map(x => x.build().toJSON())

    const rest = new REST().setToken(process.env.TOKEN!)
    rest.put(
        Routes.applicationGuildCommands("939584432107552789"!, "856900050722750474"!),
        { body: gamejaCommands })
        .then(() => console.log("succesfully registered commmands for Gameja"))
        .catch(console.error)

    rest.put(
        Routes.applicationCommands("939584432107552789"!), { body: globalCommands })
        .then(() => console.log("succesfully registered global commmands"))
        .catch(console.error)
}