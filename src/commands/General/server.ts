import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command } from '@sapphire/framework';
import { MessageEmbed } from 'discord.js';
// import { isMessageInstance } from '@sapphire/discord.js-utilities';

@ApplyOptions<Command.Options>({
    name: 'Server',
	aliases: ['guildInfo', 'serverInfo', 'guild'],
    description: 'Replies with information about the server',
	fullCategory: ['General']
})
export class ServerCommand extends Command {
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
			idHints: ['1011101489416130570'],
		  }
		);
	}

	public async chatInputRun(interaction: Command.ChatInputInteraction) {
        // const owner = await this.container.client.users.fetch(interaction.guild?.ownerId as string);
        let rolemap = interaction.guild?.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(r => r)
            .join(",") as String;
            if (rolemap.length > 1024) rolemap = "To many roles to display";
            if (!rolemap) rolemap = "No roles";
        
        const owner = await interaction.guild?.fetchOwner()
        const createdAt = interaction.guild?.createdAt as Date

        const serverEmbed = new MessageEmbed()
            .setTitle(`${interaction.guild?.name} [${interaction.guild?.id}]`)
            .setDescription(`Roles: ${rolemap}`)
            .addFields({ name: 'Members', value: `• **${interaction.guild?.memberCount}** members\n • Owner: **${owner?.displayName}** (ID: **${owner?.id}**)`, inline: true})
            .addFields({ name: 'Others', value: `• Roles: **${interaction.guild?.roles.cache.size}**\n• Region: **${interaction.guild?.preferredLocale}**\n• Created at: ${createdAt.toDateString()}`, inline: true});
        
        await interaction.reply({ embeds: [ serverEmbed ] });
	}
}
