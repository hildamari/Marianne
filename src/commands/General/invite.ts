import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command } from '@sapphire/framework';
// import { isMessageInstance } from '@sapphire/discord.js-utilities';

@ApplyOptions<Command.Options>({
    name: 'Invite',
	description: 'Displays the invite link of the bot',
	fullCategory: ['General']
})
export class InviteCommand extends Command {
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
			idHints: ['1014618953542275124'],
		  }
		);
	}
	// slash command
	public async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
		const msg = await interaction.reply({ content: `To add me to your Discord guild: <https://discordapp.com/oauth2/authorize?client_id=650566385881317376&scope=bot&permissions=322630>\nDon't be afraid to uncheck some permissions, I will let you know if you're trying to run a command without permissions.`, fetchReply: true });

		return msg;
	}
}
