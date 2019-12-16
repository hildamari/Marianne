const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['throne'],
            description: 'Replies with a link to Throne of Knowledge Wiki' 
        });
    }

    run(msg) {
        const wikiEmbed = new MessageEmbed()
            .setColor(msg.member.displayHexColor)
            .setTitle("Throne of Knowledge by the Three Houses Research Team")
            .addField("URL", "https://github.com/three-houses-research-team/Throne-of-Knowledge/wiki")
            .setDescription("A good place to start from if you're in need of explanations or documentation");

        msg.channel.send(wikiEmbed);
    }

};