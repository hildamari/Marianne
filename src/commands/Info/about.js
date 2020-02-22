const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');
require('moment-duration-format');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { description: 'Replies with information about the bot' });
    }

    run(msg) {
        const nickname = msg.guild.members.get("147800635046232064").nickname;
        let displayName = '';
    
        const aboutEmbed = new MessageEmbed()
            .setColor('#aad0fa')
            .setDescription("Marianne displays information about Fire Emblem Three Houses, including character bios, combat arts, crests, DLC, focuses, personal skills, proficiencies, recruitment, and learned spells.")
            .setAuthor(`${this.client.user.username} Stats`, this.client.user.displayAvatarURL({ format: 'png' }));

        if(typeof nickname == 'undefined' || nickname == null) {
            displayName = "No nickname";
            aboutEmbed.addField('Owner', (this.client.users.get(this.client.options.owner).username + '#' + this.client.users.get(this.client.options.owner).discriminator) + ' (' + displayName + ')', true)
        } else {
            aboutEmbed.addField('Owner', (this.client.users.get(this.client.options.owner).username + '#' + this.client.users.get(this.client.options.owner).discriminator) + ' (' + nickname + ')', true)
        }
            
        aboutEmbed.addField('Uptime', moment.duration(process.uptime() * 1000).format('D [days], H [hours] [and] m [minutes]'))
        aboutEmbed.addField('License', 'Apache 2.0')
        aboutEmbed.addField('Source Code', 'https://github.com/hildamari/Marianne');
        aboutEmbed.addField('Documentation', 'https://hilda.pw');

        return msg.channel.send(aboutEmbed);
    }

};