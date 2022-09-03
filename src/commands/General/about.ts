import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command } from '@sapphire/framework';
import { MessageEmbed } from 'discord.js';

@ApplyOptions<Command.Options>({
    name: 'About',
	description: 'Replies with information about the bot',
	fullCategory: ['General']
})
export class AboutCommand extends Command {
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
			idHints: ['1014618954943176854'],
		  }
		);
	}

	public async chatInputRun(interaction: Command.ChatInputInteraction) {

        let totalSeconds = (this.container.client.uptime as number / 1000);
		let days = Math.floor(totalSeconds / 86400);
		totalSeconds %= 86400;
		let hours = Math.floor(totalSeconds / 3600);
		totalSeconds %= 3600;
		let minutes = Math.floor(totalSeconds / 60);
		let seconds = Math.floor(totalSeconds % 60);
		let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

        const aboutEmbed = new MessageEmbed()
             .setColor('#aad0fa')
             .setDescription("Marianne displays information about Fire Emblem Three Houses, including character bios, combat arts, crests, DLC, focuses, personal skills, proficiencies, recruitment, and learned spells.")
             .setAuthor({ name: `${this.container.client.user?.username} Stats`, iconURL: this.container.client.user?.displayAvatarURL({ format: 'png' })})
            //  addField('Uptime', moment.duration(process.uptime() * 1000).format('D [days], H [hours] [and] m [minutes]'), true)
            .addFields({ name: 'Uptime', value: `${uptime}`, inline: true})
            .addFields({ name: 'License', value: 'Apache 2.0', inline: true})
            .addFields({ name: 'Source Code', value: 'https://github.com/hildamari/Marianne', inline: true})
			.addFields({ name: 'Support Server', value: 'https://discord.gg/WAVdN4E', inline: false});
//         aboutEmbed.addField('Documentation', 'https://hilda.pw', true);

		return interaction.reply({ embeds: [ aboutEmbed ] });
	}
}
