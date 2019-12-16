const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Replies with a link to the FETH Archive Manager GitHub page' 
        });
    }

    run(msg) {
        const archiveManagerEmbed = new MessageEmbed()
            .setColor(msg.member.displayHexColor)
            .setTitle("FETH Archive Manager by Raytwo")
            .addField("URL", "https://github.com/Raytwo/feth-archive-manager/releases/latest")
            .setDescription("Make patching Fire Emblem Three Houses great again");

        msg.channel.send(archiveManagerEmbed);
    }

};