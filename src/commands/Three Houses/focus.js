const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Replies with information about specific units\' learning focuses from Fire Emblem Three Houses',
            extendedHelp: 'This command contains spoilers for Fire Emblem Three Houses!',
            usage: '<unit:string>'
        });

        this.customizeResponse('unit',
            'You must enter a valid unit!');
    }

    verifyUnit(unit) {
        const unitFocusEmbed = new MessageEmbed()

        let name = '', titles = [], descriptions = [], goals = [], hexColor = "", image = "";

        switch(unit) {
            case 'Edelgard':
            case 'edelgard':
                name = "Edelgard"
                hexColor = "#fefff4"
                titles[0] = "__**Lead Like a Lord**__"
                titles[1] = "__**Strong in Heavy Armor**__"
                goals[0] = "Focus on sword and authority skills to excel as a Lord."
                goals[1] = "Focus on axe and heavy armor skills to excel as a heavy armor class."
                descriptions[0] = "A Lord must know how to command others. Authority is therefore a must. It is also traditional to study sword technique. Will you help me with these endeavors?"
                descriptions[1] = "Perhaps it is due to the power of Crests, but heavy armor has never slowed me down. Still, it wouldn't hurt to improve further in that regard. As it were, nothing complements heavy armor better than an axe."
                image = "https://i.imgur.com/HQ3yEk4.png"
                break;
            case 'Dimitri':
            case 'dimitri':
                name = "Dimitri"
                hexColor = "#fcfba8"
                titles[0] = "__**Lead Like a Lord**__"
                titles[1] = "__**His Father's Footsteps**__"
                goals[0] = "Focus on sword and authority skills to excel as a Lord."
                goals[1] = "Focus on lance and riding skills to excel as a cavalry class."
                descriptions[0] = "Lords must be leaders, so strong authority should be considered a requirement. They also fight from the front lines, and thus need to know how to handle a sword. Such are my goals... Are we aligned?"
                descriptions[1] = "My father was renowned for his horsemanship in battle, even from a young age. I, too, have a fondness for that pursuit, but to reach his heights, my lance and riding skills will need some polish."
                image = "https://i.imgur.com/Ddl1C8a.png"
                break;
            default:
                name = "N/A"
        }
    
              if(name == "N/A") {
                  return "Not a playable unit"
              } else {
                    unitFocusEmbed
                        .setColor(hexColor)
                        .setAuthor(name)
                        .setDescription("Areas of Focus")
                        .setThumbnail(image)
                        .addField(titles[0], goals[0])
                        .addField("Description", descriptions[0])
                        .addField(titles[1], goals[1])
                        .addField("Description", descriptions[1])
                        if(titles[2]) {
                            unitFocusEmbed.addField(titles[2], goals[2])
                            unitFocusEmbed.addField("Description", descriptions[2])
                        }
                    return unitFocusEmbed
                }
    }

    async run(msg, [unit]) {
        let result = this.verifyUnit(unit);
        msg.send(result);
    }
};