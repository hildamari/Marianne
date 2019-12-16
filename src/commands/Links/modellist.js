const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['texturelist'],
            description: 'Replies with a link to a txt file containing the model and texture list' 
        });
    }

    run(msg) {
        const modelListEmbed = new MessageEmbed()
            .setColor(msg.member.displayHexColor)
            .setTitle("Model and Texture List")
            .addField("URL", "https://cdn.discordapp.com/attachments/604337130650730498/621866376704819201/Model_and_Texture_List.txt");

        msg.channel.send(modelListEmbed);
    }

};