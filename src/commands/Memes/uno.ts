import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command } from '@sapphire/framework';
// import { isMessageInstance } from '@sapphire/discord.js-utilities';

@ApplyOptions<Command.Options>({
    name: 'Uno',
	description: 'I don\'t have uno'
})
export class UnoCommand extends Command {
	// Register slash and context menu command
	public override registerApplicationCommands(
		registry: ChatInputCommand.Registry
	  ) {
		registry.registerChatInputCommand(
		  (builder) =>
			builder
			  .setName(this.name)
			  .setDescription(this.description)
			  .setDMPermission(false),
	
		  {
			idHints: ['1011088862933688380'],
		  }
		);
	}

	public async chatInputRun(interaction: Command.ChatInputInteraction) {
        const marianne = this.container.client.emojis.cache.find(emoji => emoji.name === "Marianne2");
 
		const msg = await interaction.reply({ content: `${marianne} I don't have uno so go fuck off.`, fetchReply: true });

		return msg;
	}
}
