const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Replies with a link to the FETH File Manager GitHub page' 
        });
    }

    run(msg) {
        const fileManagerEmbed = new MessageEmbed()
            .setColor(msg.member.displayHexColor)
            .setTitle("FETH File Manager by bqio")
            .addField("URL", "https://github.com/bqio/fe3hfilemanager")
            .setDescription("Creates a named database file structure.");

        msg.channel.send(fileManagerEmbed);
    }

};