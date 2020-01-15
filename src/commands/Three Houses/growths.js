const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Replies with information about specific units\' growth rates from Fire Emblem Three Houses',
            extendedHelp: 'This command contains spoilers for Fire Emblem Three Houses!',
            usage: '<unit:string>'
        });

        this.customizeResponse('unit',
            'You must enter a valid unit!');
    }

    verifyUnit(unit) {
        const unitGrowthsEmbed = new MessageEmbed()

        let thumbnail = '', name = '', hp, str, mag, dex, spd, lck, def , res, cha, hexColor = ''

        switch(unit) {
            case 'BylethM':
            case 'bylethm':
              name = 'Byleth'
              thumbnail = 'https://i.imgur.com/6WmePDH.png'
              hexColor = '#4a7588'
              hp = 45, str = 45, mag = 35, dex = 45, spd = 45, lck = 45, def = 35, res = 30, cha = 45
            case 'BylethF':
            case 'bylethf':
              name = 'Byleth'
              thumbnail = 'https://i.imgur.com/ZCGC8Jk.png'
              hexColor = '#4a7588'
              hp = 45, str = 45, mag = 35, dex = 45, spd = 45, lck = 45, def = 35, res = 30, cha = 45
            case 'Byleth':
            case 'byleth':
              name = 'Byleth'
              thumbnail = 'https://i.imgur.com/57L1pPh.png'
              hexColor = '#4a7588'
              hp = 45, str = 45, mag = 35, dex = 45, spd = 45, lck = 45, def = 35, res = 30, cha = 45
            // case 'edelgard':
            // case 'Edelgard':
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
            case 'Hilda':
            case 'hilda':
                
              break;
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
            // case 'flayn'
            case 'Seteth':
            case 'seteth':
                
              break;
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

          unitGrowthsEmbed
               .setAuthor(name)
               .setColor(hexColor)
               .setThumbnail(thumbnail)
               .setDescription("These are the percentage chance of each stat increasing during a Level Up.")
               .addField('HP', hp, true)
               .addField('Strength (Str)', str, true)
               .addField('Magic (Mag)', mag, true)
               .addField('Dexterity (Dex)', dex, true) 
               .addField('Speed (Spd)', spd, true)
               .addField('Luck (Lck)', lck, true)
               .addField('Defense (Def)', def, true)
               .addField('Resistence (Res)', res, true)
               .addField('Charm (Cha)', cha, true)

          return unitGrowthsEmbed
        }
    }
        
    async run(msg, [unit]) {
        let result = this.verifyUnit(unit);
        msg.send(result);
    }
};