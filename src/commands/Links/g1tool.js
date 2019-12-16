const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Replies with a link to the G1Tool GitHub page' 
        });
    }

    run(msg) {
        const g1toolEmbed = new MessageEmbed()
            .setColor(msg.member.displayHexColor)
            .setTitle("G1Tool by Raytwo")
            .addField("URL", "https://github.com/Raytwo/G1Tool/releases/latest")
            .setDescription("Create and edit Koei Tecmo G1T files using a GUI");

        msg.channel.send(g1toolEmbed);
    }

};