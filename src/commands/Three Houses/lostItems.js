const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['lost'],
            description: 'Replies with information about specific units\' lost items from Fire Emblem Three Houses',
            extendedHelp: 'This command contains spoilers for Fire Emblem Three Houses!',
            usage: '<unit:string>'
        });

        this.customizeResponse('unit',
            'You must enter a valid unit!');
    }

    verifyUnit(unit) {
        const unitLostItemsEmbed = new MessageEmbed()

        let name = '', lostItems = [], hexColor = "", thumbnail = "";

        switch(unit) {
            case 'Edelgard':
            case 'edelgard':
                name = 'Edelgard'
                thumbnail = 'https://i.imgur.com/HQ3yEk4.png'
                hexColor = '#fefff4'
                lostItems = ["White Glove", "Time-worn Quill Pen", "Eastern Porcelain"]
                break;
            case 'Hubert':
            case 'hubert':
                name = 'Hubert'
                thumbnail = 'https://i.imgur.com/KCc36C6.png'
                hexColor = '#343d3e'
                lostItems = ["Hresvelg Treatise", "Noxious Handkerchief", "Folding Razor"]
                break;
            case 'Ferdinand':
            case 'ferdinand':
                name = 'Ferdinand von Aegir'
                thumbnail = 'https://i.imgur.com/iKtyabp.png'
                hexColor = '#feb472'
                lostItems = ["Maintenance Oil", "Agricultural Survey", "Bag of Tea Leaves"]
                break;
            case 'Linhardt':
            case 'linhardt':
                name = 'Linhardt'
                thumbnail = 'https://i.imgur.com/X41XIXq.png'
                hexColor = '#476352'
                lostItems = ["The Saints Revealed", "Feather Pillow", "Animated Bait"]
                break;
            case 'Caspar':
            case 'caspar':
                name = 'Caspar'
                thumbnail = 'https://i.imgur.com/mo0C51Q.png'
                hexColor = '#a6e4e2'
                lostItems = ["Thunderbrand Replica", "Tattered Overcoat", "Grounding Charm"]
                break;
            case 'Bernadetta':
            case 'bernadetta':
                name = 'Bernadetta'
                thumbnail = 'https://i.imgur.com/xowUlBr.png'
                hexColor = '#a080a8'
                lostItems = ["Needle and Thread", "Still-Life Picture",  "Hedgehog Case"]
                break;
            case 'Dorothea':
            case 'dorothea':
                name = 'Dorothea'
                thumbnail = 'https://i.imgur.com/S3FNa04.png'
                hexColor = '#7b585b'
                lostItems = ["Silver Brooch", "Songstress Poster", "Lovely Comb"]
                break;
            case 'Petra':
            case 'petra':
                name = 'Petra'
                thumbnail = 'https://i.imgur.com/ZfvRIX6.png'
                hexColor = '#824364'
                lostItems = ["Exotic Feather", "Small Tanned Hide", "Annotated Dictionary"]
                break;
            case 'Dimitri':
            case 'dimitri':
                // lostItems = ["Dulled Longsword", "Black Leather Gloves", "Training Logbook"]
                // break;
            case 'Dedue':
            case 'dedue':
            case 'Felix':
            case 'felix':
            case 'Ashe':
            case 'ashe':
            case 'Sylvain':
            case 'sylvain':
            case 'Mercedes':
            case 'mercedes':
            case 'Annette':
            case 'annette':
            case 'Ingrid':
            case 'ingrid':
            case 'Claude':
            case 'claude':
            case 'Hilda':
            case 'hilda':
            case 'Lorenz':
            case 'lorenz':
            case 'Raphael':
            case 'raphael':
            case 'Ignatz':
            case 'ignatz':
            case 'Lysithea':
            case 'lysithea':
            case 'Marianne':
            case 'marianne':
            case 'Leonie':
            case 'leonie':
            case 'Flayn':
            case 'flayn':
            case 'Seteth':
            case 'seteth':
            case 'Cyril':
            case 'cyril':
            case 'Anna':
            case 'anna':
            case 'Jeritza':
            case 'jeritza':
            case 'Hanneman':
            case 'hanneman':
            case 'Manuela':
            case 'manuela':
            case 'Gilbert':
            case 'gilbert':
            case 'Alois':
            case 'alois':
            case 'Catherine':
            case 'catherine':
            case 'Shamir':
            // case 'shamir':
            default:
                name = "N/A"
        }
    
              if(name == "N/A") {
                  return "Not a playable unit"
              } else {
                    unitLostItemsEmbed
                        .setColor(hexColor)
                        .setAuthor(name)
                        .setDescription("Character Recruitment")
                        .setThumbnail(thumbnail)
                        .addField("Lost Items", lostItems.join(", "))
                    return unitLostItemsEmbed
                }
    }

    async run(msg, [unit]) {
        let result = this.verifyUnit(unit);
        msg.send(result);
    }

};