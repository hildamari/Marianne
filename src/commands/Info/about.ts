// const nickname = msg.guild.members.get("147800635046232064").nickname;
//         let displayName = '';
    
//         const aboutEmbed = new MessageEmbed()
//             .setColor('#aad0fa')
//             .setDescription("Marianne displays information about Fire Emblem Three Houses, including character bios, combat arts, crests, DLC, focuses, personal skills, proficiencies, recruitment, and learned spells.")
//             .setAuthor(`${this.client.user.username} Stats`, this.client.user.displayAvatarURL({ format: 'png' }));

//         if(typeof nickname == 'undefined' || nickname == null) {
//             displayName = "No nickname";
//             aboutEmbed.addField('Owner', (this.client.users.get(this.client.options.owner).username + '#' + this.client.users.get(this.client.options.owner).discriminator) + ' (' + displayName + ')', true)
//         } else {
//             aboutEmbed.addField('Owner', (this.client.users.get(this.client.options.owner).username + '#' + this.client.users.get(this.client.options.owner).discriminator) + ' (' + nickname + ')', true)
//         }
            
//         aboutEmbed.addField('Uptime', moment.duration(process.uptime() * 1000).format('D [days], H [hours] [and] m [minutes]'), true)
//         aboutEmbed.addField('License', 'Apache 2.0', true)
//         aboutEmbed.addField('Source Code', 'https://github.com/hildamari/Marianne', true);
//         aboutEmbed.addField('Documentation', 'https://hilda.pw', true);

//         return msg.channel.send(aboutEmbed);

import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command } from '@sapphire/framework';
import { MessageEmbed } from 'discord.js';
// import { isMessageInstance } from '@sapphire/discord.js-utilities';

@ApplyOptions<Command.Options>({
    name: 'About',
	description: 'Replies with information about the bot'
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
			idHints: ['1011088870277914644'],
		  }
		);
	}

	public async chatInputRun(interaction: Command.ChatInputInteraction) {
		// const msg = await interaction.reply({ content: `To add me to your Discord guild: <https://discordapp.com/oauth2/authorize?client_id=650566385881317376&scope=bot&permissions=322630>\nDon't be afraid to uncheck some permissions, I will let you know if you're trying to run a command without permissions.`, fetchReply: true });
        // const nickname = message.guild?.members.fetch("147800635046232064").nick;

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
            .addFields({ name: 'Source Code', value: 'https://github.com/hildamari/Marianne', inline: true});
//         aboutEmbed.addField('Documentation', 'https://hilda.pw', true);

//         aboutEmbed.addField('Documentation', 'https://hilda.pw', true);

//         return msg.channel.send(aboutEmbed);
		return interaction.reply({ embeds: [ aboutEmbed ] });
	}
}
