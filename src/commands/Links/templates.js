const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Replies with a link to the 010 binary templates GitHub Page' 
        });
    }

    run(msg) {
        const templateEmbed = new MessageEmbed()
            .setColor(msg.member.displayHexColor)
            .setTitle("010 Binary Templates by the Three Houses Research Team")
            .addField("URL", "https://github.com/three-houses-research-team/010-binary-templates")
            .setDescription("File format binary templates");

        msg.channel.send(templateEmbed);
    }

};