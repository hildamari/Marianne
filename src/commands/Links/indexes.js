const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Replies with a link to the Files and Indexes Google Spreadsheets' 
        });
    }

    run(msg) {
        const indexesEmbed = new MessageEmbed()
            .setColor(msg.member.displayHexColor)
            .setTitle("FETH Files and Indexes")
            .addField("URL 1", "https://docs.google.com/spreadsheets/d/18bCCrsHwyAU-JSlpvaulVos3j8dtPBr0mDB-vLWib54/edit#gid=1616992074")
            .addField("URL 2", "https://docs.google.com/spreadsheets/d/14HT0w3qaRPknzxeHysswVMUfry8J2G_RHY8k48Nmy5w/edit#gid=0")
            .setDescription("Create and edit Koei Tecmo G1T files using a GUI");

        msg.channel.send(indexesEmbed);
    }

};