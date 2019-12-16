const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Replies with a link to the KTSS converter' 
        });
    }

    run(msg) {
        const ktssEmbed = new MessageEmbed()
            .setColor(msg.member.displayHexColor)
            .setTitle("KTSS Converter by Raytwo")
            .addField("URL", "https://cdn.discordapp.com/attachments/345670285040680982/642485616365273089/KTSS_converter.7z")
            .setDescription('Use in a command prompt with the following command \n`VGAudioCli.exe input.wav output.ktss --bitrate "150000" --CBR --opusheader ktss`');

        msg.channel.send(ktssEmbed);
    }

};