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
              break;
            case 'BylethF':
            case 'bylethf':
              name = 'Byleth'
              thumbnail = 'https://i.imgur.com/ZCGC8Jk.png'
              hexColor = '#4a7588'
              hp = 45, str = 45, mag = 35, dex = 45, spd = 45, lck = 45, def = 35, res = 30, cha = 45
              break;
            case 'Byleth':
            case 'byleth':
              name = 'Byleth'
              thumbnail = 'https://i.imgur.com/57L1pPh.png'
              hexColor = '#4a7588'
              hp = 45, str = 45, mag = 35, dex = 45, spd = 45, lck = 45, def = 35, res = 30, cha = 45
              break;
            case 'edelgard':
            case 'Edelgard':
              name = 'Edelgard'
              thumbnail = 'https://i.imgur.com/HQ3yEk4.png'
              hexColor = '#fefff4'
              hp = 40, str = 55, mag = 45, dex = 45, spd = 40, lck = 30, def = 35, res = 35, cha = 60
              break;
            case 'Hubert':
            case 'hubert':
              name = 'Hubert'
              thumbnail = 'https://i.imgur.com/KCc36C6.png'
              hexColor = '#343d3e'
              hp = 35, str = 30, mag = 55, dex = 45, spd = 45, lck = 35, def = 25, res = 40, cha = 35
              break;
            case 'Ferdinand':
            case 'ferdinand':
              name = 'Ferdinand von Aegir'
              thumbnail = 'https://i.imgur.com/iKtyabp.png'
              hexColor = '#feb472'
              hp = 50, str = 45, mag = 20, dex = 40, spd = 50, lck = 40, def = 35, res = 20, cha = 40
              break;
            case 'Linhardt':
            case 'linhardt':
              name = 'Linhardt'
              thumbnail = 'https://i.imgur.com/X41XIXq.png'
              hexColor = '#476352'
              hp = 30, str = 30, mag = 45, dex = 40, spd = 40, lck = 45, def = 30, res = 45, cha = 20
              break;
            case 'Caspar':
            case 'caspar':
              name = 'Caspar'
              thumbnail = 'https://i.imgur.com/mo0C51Q.png'
              hexColor = '#a6e4e2'
              hp = 55, str = 45, mag = 25, dex = 45, spd = 45, lck = 40, def = 30, res = 20, cha = 25
              break;
            case 'Bernadetta':
            case 'bernadetta':
              name = 'Bernadetta'
              thumbnail = 'https://i.imgur.com/xowUlBr.png'
              hexColor = '#a080a8'
              hp = 35, str = 35, mag = 20, dex = 55, spd = 50, lck = 25, def = 20, res = 30, cha = 35
              break;
            case 'Dorothea':
            case 'dorothea':
              name = 'Dorothea'
              thumbnail = 'https://i.imgur.com/S3FNa04.png'
              hexColor = '#7b585b'
              hp = 40, str = 20, mag = 40, dex = 45, spd = 50, lck = 35, def = 15, res = 35, cha = 40
              break;
            case 'Petra':
            case 'petra':
              name = 'Petra'
              thumbnail = 'https://i.imgur.com/ZfvRIX6.png'
              hexColor = '#824364'
              hp = 45, str = 40, mag = 25, dex = 50, spd = 60, lck = 45, def = 30, res = 15, cha = 35
              break;
            case 'Dimitri':
            case 'dimitri':

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
                
              break;
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
                
              break;
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
            case 'shamir':

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