import EchoCommand from "./gamejaCommands/EchoCommand";
import PingCommand from "./globalCommands/PingCommand";
import { ICommand } from "./ICommands";

export const GetAllCommands: Array<ICommand> = [new EchoCommand(), new PingCommand()];
export const GetAllGlobalCommands: Array<ICommand> = GetAllCommands.filter(c => !c.guildId);
export const GetAllGamejaCommands: Array<ICommand> = GetAllCommands.filter(c => c.guildId === process.env.GAMEJA_GUILD_ID);

