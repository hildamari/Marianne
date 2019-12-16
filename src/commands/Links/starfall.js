const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['forge'],
            description: 'Replies with a link to the Starfall Forge GitHub page' 
        });
    }

    run(msg) {
        const starfallEmbed = new MessageEmbed()
            .setColor(msg.member.displayHexColor)
            .setTitle("Starfall (Forge) by the Three Houses Research Team")
            .addField("URL", "https://github.com/three-houses-research-team/Starfall/tree/master/forge")
            .setDescription("Forge is a file redirection layer for Fire Emblem Three Houses. When looking for any file, the game will look in Forge's files first. If it is missing, then the original game file will be used.");

        msg.channel.send(starfallEmbed);
    }

};