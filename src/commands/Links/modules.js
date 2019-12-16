const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            alias: ['module'],
            description: 'Replies with a link to Moonling\'s FEFNightmare Modules' 
        });
    }

    run(msg) {
        const modulesEmbed = new MessageEmbed()
            .setColor(msg.member.displayHexColor)
            .setTitle("FEFNightmare Modules by Moonling")
            .addField("URL", "https://github.com/VelouriasMoon/FEFNightmare-Modules")
            .setDescription("Modules for use in FEFNightmare.");

        msg.channel.send(modulesEmbed);
    }

};