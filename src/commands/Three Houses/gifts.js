const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Replies with information about specific units\' lost items from Fire Emblem Three Houses',
            extendedHelp: 'This command contains spoilers for Fire Emblem Three Houses!',
            usage: '<unit:string>'
        });

        this.customizeResponse('unit',
            'You must enter a valid unit!');
    }

    verifyUnit(unit) {
        const unitGiftsEmbed = new MessageEmbed()

        let name = '', likedGifts = [], dislikedGifts = [], hexColor = "", thumbnail = "";

        switch(unit) {
            case 'Edelgard':
            case 'edelgard':
                name = 'Edelgard'
                thumbnail = 'https://i.imgur.com/HQ3yEk4.png'
                hexColor = '#fefff4'
                break;
            // case 'Hubert':
            // case 'hubert':
            // case 'Ferdinand':
            // case 'ferdinand':
            // case 'Linhardt':
            // case 'linhardt':
            // case 'Caspar':
            // case 'caspar':
            // case 'Bernadetta':
            // case 'bernadetta':
            // case 'Dorothea':
            // case 'dorothea':
            // case 'Petra':
            // case 'petra':
            // case 'Dimitri':
            // case 'dimitri':
            // case 'Dedue':
            // case 'dedue':
            // case 'Felix':
            // case 'felix':
            // case 'Ashe':
            // case 'ashe':
            // case 'Sylvain':
            // case 'sylvain':
            // case 'Mercedes':
            // case 'mercedes':
            // case 'Annette':
            // case 'annette':
            // case 'Ingrid':
            // case 'ingrid':
            // case 'Claude':
            // case 'claude':
            // case 'Hilda':
            // case 'hilda':
            // case 'Lorenz':
            // case 'lorenz':
            // case 'Raphael':
            // case 'raphael':
            // case 'Ignatz':
            // case 'ignatz':
            // case 'Lysithea':
            // case 'lysithea':
            // case 'Marianne':
            // case 'marianne':
            // case 'Leonie':
            // case 'leonie':
            // case 'Flayn':
            // case 'flayn':
            // case 'Seteth':
            // case 'seteth':
            // case 'Cyril':
            // case 'cyril':
            // case 'Anna':
            // case 'anna':
            // case 'Jeritza':
            // case 'jeritza':
            // case 'Hanneman':
            // case 'hanneman':
            // case 'Manuela':
            // case 'manuela':
            // case 'Gilbert':
            // case 'gilbert':
            // case 'Alois':
            // case 'alois':
            // case 'Catherine':
            // case 'catherine':
            // case 'Shamir':
            // case 'shamir':
            default:
                name = "N/A"
        }
    
              if(name == "N/A") {
                  return "Not a playable unit"
              } else {
                    unitGiftsEmbed
                        .setColor(hexColor)
                        .setAuthor(name)
                        .setDescription("Character Recruitment")
                        .setThumbnail(thumbnail)
                        .addField("Liked Gifts", likedGifts.join(", "))
                        .addField("Disliked Gifts", dislikedGifts.join(", "))
                    return unitGiftsEmbed
                }
    }

    run(msg) {
        
    }

};