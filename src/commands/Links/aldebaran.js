const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['forge', 'starfall'],
            description: 'Replies with a link to the Aldebaran GitHub page' 
        });
    }

    run(msg) {
        const starfallEmbed = new MessageEmbed()
            .setColor(msg.member.displayHexColor)
            .setTitle("Aldebaran by the Three Houses Research Team")
            .addField("URL", "https://github.com/three-houses-research-team/Aldebaran")
            .setDescription("An environment for linking, runtime hooking and code patching in Fire Emblem Three Houses. Fork of Skyline, a modding framework for Super Smash Bros Ultimate.");

        msg.channel.send(starfallEmbed);
    }

};