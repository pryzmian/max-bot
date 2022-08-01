import {Message} from "discord.js";
import {CommandType} from "../types/command.type";

export default abstract class BaseCommand {

  public static command: string;
  public static args: string[];

  public static async run(message: Message, commandRequest: CommandType) {
    await message.reply("On working");
  }

}