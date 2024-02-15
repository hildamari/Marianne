import { ApplyOptions } from '@sapphire/decorators';
import { isMessageInstance } from '@sapphire/discord.js-utilities';
import { ChatInputCommand, Command } from '@sapphire/framework';

@ApplyOptions<Command.Options>({
	name: 'Ping',
	description: 'ping pong',
	fullCategory: ['General']
})
export class PingCommand extends Command {
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
			idHints: ['1014618958000828496'],
		  }
		);
	}

	public async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
		const msg = await interaction.reply({ content: `Ping?`, fetchReply: true });

        if (isMessageInstance(msg)) {
        const diff = msg.createdTimestamp - interaction.createdTimestamp;
        const ping = Math.round(this.container.client.ws.ping);
        return interaction.editReply(`Pong 🏓! (Round trip took: ${diff}ms. Heartbeat: ${ping}ms.)`);
        }

        return interaction.editReply('Failed to retrieve ping :(');
	}
}
