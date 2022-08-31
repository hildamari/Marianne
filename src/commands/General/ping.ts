import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command } from '@sapphire/framework';
import { Message } from 'discord.js';

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
			idHints: ['1011043765655449790'],
		  }
		);
	}

	// Message command
	// public async messageRun(message: Message) {
	// 	const msg = await send(message, 'Ping?');

	// 	const content = `Pong! Bot Latency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${
	// 		(msg.editedTimestamp || msg.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp)
	// 	}ms.`;

	// 	return send(message, content);
	// }
	// slash command
	public async chatInputRun(interaction: Command.ChatInputInteraction) {
		const msg = await interaction.reply({ content: 'Ping?', fetchReply: true });
		const createdTime = msg instanceof Message ? msg.createdTimestamp : Date.parse(msg.timestamp);

		const content = `Pong! Bot Latency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${
			createdTime - interaction.createdTimestamp
		}ms.`;

		return await interaction.editReply({
			content: content
		});
	}
}
