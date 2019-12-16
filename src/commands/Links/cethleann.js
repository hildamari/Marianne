const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Replies with a link to the Cethleann GitHub page' 
        });
    }

    run(msg) {
        const cethleannEmbed = new MessageEmbed()
            .setColor(msg.member.displayHexColor)
            .setTitle("Cethleann by HealingBrew")
            .addField("URL", "https://github.com/healingbrew/Cethleann")
            .addField("Continuous Integration Builds", "https://dev.azure.com/yretenai/Cethleann/_build?definitionId=1")
            .setDescription("Soft Engine data exploration and research, specifically centered around FE: Three Houses");

        msg.channel.send(cethleannEmbed);
    }

};