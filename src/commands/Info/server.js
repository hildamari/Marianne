const { Command } = require('klasa');
const { MessageEmbed, Role } = require('discord.js');
const moment = require('moment');
require('moment-duration-format');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['guildInfo', 'serverInfo', 'guild'],
            description: 'Replies with information about the server',
        });
    }

    async run (msg) {
        let tChannels = 0;
		let vChannels = 0;
        let cChannels = 0;
        let afk = '';

        if(msg.guild.afkChannelID == null) {
            afk = 'None'
        } else {
            afk = msg.guild.afkChannelID
        }

		for (const channel of msg.guild.channels.values()) {
			if (channel.type === 'text') {
                tChannels++;
            } else if (channel.type === 'voice') {
                vChannels++;
            } else {
                cChannels++;
            }
        }

        const roles = [...msg.guild.roles.values()].sort();
		roles.pop();
        const owner = await this.client.users.fetch(msg.guild.ownerID);

        const serverEmbed = new MessageEmbed()
            .setColor(msg.member.displayHexColor)
            .setTitle(`${msg.guild.name} [${msg.guild.id}]`)
            .setDescription(`Roles: ${roles}`)
            .addField('Channels', `• **${tChannels}** Text Channel(s), **${vChannels}** Voice Channel(s), and **${cChannels}** Categories\n• AFK Channel: ${afk}`, true)
            .addField('Members', `• **${msg.guild.memberCount}** members\n • Owner: **${owner.username}#${owner.discriminator}** (ID: **${owner.id}**)`, true)
            .addField('Others', `Roles: **${msg.guild.roles.size}**\nRegion: **${msg.guild.region}**\nCreated at: **${moment(msg.guild.createdTimestamp).format('MMMM Do YYYY [at] HH:mm:ss [UTC]Z')}**`, true);
        
        return msg.channel.send(serverEmbed);
   }
}