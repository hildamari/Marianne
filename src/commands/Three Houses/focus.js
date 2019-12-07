const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Replies with information about specific units\' learning focuses from Fire Emblem Three Houses',
            extendedHelp: 'This command contains spoilers for Fire Emblem Three Houses!',
            usage: '<unit:string>'
        });

        let customResponse = this.customizeResponse('unit',
            'You must enter a valid unit!');
    }

    verifyUnit(unit) {
        const unitEmbed = new MessageEmbed()

        let name = '', titles = [], descriptions = [], goals = [], hexColor = "#fefff4", image = "";

        switch(unit) {
            case 'Edelgard':
                name = "Edelgard"
                titles[0] = "__**Lead Like a Lord**__"
                titles[1] = "__**Strong in Heavy Armor**__"
                goals[0] = "Focus on sword and authority skills to excel as a Lord."
                goals[1] = "Focus on axe and heavy armor skills to excel as a heavy armor class."
                descriptions[0] = "A Lord must know how to command others. Authority is therefore a must. It is also traditional to study sword technique. Will you help me with these endeavors?"
                descriptions[1] = "Perhaps it is due to the power of Crests, but heavy armor has never slowed me down. Still, it wouldn't hurt to improve further in that regard. As it were, nothing complements heavy armor better than an axe."
                image = "https://i.imgur.com/HQ3yEk4.png"
        }

        unitEmbed
        .setColor(hexColor)
        .setAuthor(name)
        .setDescription("Areas of Focus")
        .setThumbnail(image)
        .addField(titles[0], goals[0])
        .addField("Description", descriptions[0])
        .addField(titles[1], goals[1])
        .addField("Description", descriptions[1])
        if(titles[2]) {
            unitEmbed.addField(titles[2], goals[2])
            unitEmbed.addField("Description", descriptions[2])
        }

        return unitEmbed
    }

    async run(msg, [unit]) {
        
    
        let result = this.verifyUnit(unit);
        msg.send(result);
            
            // msg.channel.send({ files: [`./assets/images/units/${unit}.png`] });
    }
};