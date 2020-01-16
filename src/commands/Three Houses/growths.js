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
              name = 'Dimitri'
              thumbnail = 'https://i.imgur.com/Ddl1C8a.png'
              hexColor = '#fcfba8'
              hp = 55, str = 60, mag = 20, dex = 50, spd = 50, lck = 25, def = 40, res = 20, cha = 55
              break;
            case 'Dedue':
            case 'dedue':
              name = 'Dedue'
              thumbnail = 'https://i.imgur.com/quIqslt.png'
              hexColor = '#e8e9e2'
              hp = 60, str = 50, mag = 15, dex = 30, spd = 20, lck = 25, def = 50, res = 10, cha = 30
              break;
            case 'Felix':
            case 'felix':
              name = 'Felix'
              thumbnail = 'https://i.imgur.com/YJcGEiK.png'
              hexColor = '#403f64'
              hp = 45, str = 55, mag = 30, dex = 45, spd = 55, lck = 40, def = 30, res = 20, cha = 30
              break;
            case 'Ashe':
            case 'ashe':
              name = 'Ashe'
              thumbnail = 'https://i.imgur.com/L4iJ8Ug.png'
              hexColor = '#b5bdc6'
              hp = 35, str = 35, mag = 25, dex = 55, spd = 50, lck = 40, def = 20, res = 35, cha = 25
              break;
            case 'Sylvain':
            case 'sylvain':
              name = 'Sylvain'
              thumbnail = 'https://i.imgur.com/77T2SRt.png'
              hexColor = '#e06c53'
              hp = 55, str = 45, mag = 30, dex = 35, spd = 50, lck = 35, def = 40, res = 25, cha = 40
              break;
            case 'Mercedes':
            case 'mercedes':
              name = 'Mercedes'
              thumbnail = 'https://i.imgur.com/y1BWI7T.png'
              hexColor = '#f4dcc4'
              hp = 30, str = 25, mag = 50, dex = 45, spd = 40, lck = 30, def = 25, res = 45, cha = 40
              break;
            case 'Annette':
            case 'annette':
              name = 'Annette'
              thumbnail = 'https://i.imgur.com/lnE7TRE.png'
              hexColor = '#f6a67d'
              hp = 25, str = 30, mag = 50, dex = 50, spd = 35, lck = 35, def = 20, res = 30, cha = 35
              break;
            case 'Ingrid':
            case 'ingrid':
              name = 'Ingrid'
              thumbnail = 'https://i.imgur.com/t8fCo54.png'
              hexColor = '#f8e5a0'
              hp = 40, str = 35, mag = 35, dex = 40, spd = 60, lck = 45, def = 30, res = 40, cha = 45
              break;
            case 'Claude':
            case 'claude':
              name = 'Claude'
              thumbnail = 'https://i.imgur.com/A4i8b9Z.png'
              hexColor = '#4a4240'
              hp = 35, str = 40, mag = 25, dex = 60, spd = 55, lck = 45, def = 30, res = 25, cha = 55
              break;
            case 'Hilda':
            case 'hilda':
              name = 'Hilda'
              thumbnail = 'https://i.imgur.com/zoScHRC.png'
              hexColor = '#fcafb7'
              hp = 50, str = 45, mag = 25, dex = 30, spd = 50, lck = 35, def = 35, res = 20, cha = 50
              break;
            case 'Lorenz':
            case 'lorenz':
              name = 'Lorenz'
              thumbnail = 'https://i.imgur.com/uYopDET.png'
              hexColor = '#7373ac'
              hp = 55, str = 40, mag = 40, dex = 45, spd = 40, lck = 25, def = 30, res = 40, cha = 35
              break;
            case 'Raphael':
            case 'raphael':
              name = 'Raphael'
              thumbnail = 'https://i.imgur.com/MB3wRvI.png'
              hexColor = '#f0d9a1'
              hp = 65, str = 50, mag = 15, dex = 35, spd = 15, lck = 35, def = 45, res = 10, cha = 25
              break;
            case 'Ignatz':
            case 'ignatz':
              name = 'Ignatz'
                thumbnail = 'https://i.imgur.com/TUREZkF.png'
                hexColor = '#c6c69d'
              hp = 35, str = 35, mag = 30, dex = 50, spd = 50, lck = 55, def = 25, res = 35, cha = 25
              break;
            case 'Lysithea':
            case 'lysithea':
              name = 'Lysithea'
              thumbnail = 'https://i.imgur.com/EIm3Zof.png'
              hexColor = '#fefcfd'
              hp = 20, str = 15, mag = 60, dex = 60, spd = 50, lck = 15, def = 10, res = 25, cha = 25
              break;
            case 'Marianne':
            case 'marianne':
              name = 'Marianne'
              thumbnail = 'https://i.imgur.com/OyUl9he.png'
              hexColor = '#aad0fa'
              hp = 35, str = 20, mag = 50, dex = 40, spd = 40, lck = 35, def = 15, res = 45, cha = 45
              break;
            case 'Leonie':
            case 'leonie':
              name = 'Leonie'
              thumbnail = 'https://i.imgur.com/yZxvJG4.png'
              hexColor = '#f17d5b'
              hp = 40, str = 40, mag = 20, dex = 55, spd = 60, lck = 40, def = 40, res = 15, cha = 40
              break;
            case 'Flayn':
            case 'flayn':
              name = 'Flayn'
              thumbnail = 'https://i.imgur.com/1PcDmnL.png'
              hexColor = '#9ae5b9'
              hp = 25, str = 25, mag = 55, dex = 45, spd = 35, lck = 15, def = 25, res = 50, cha = 45
              break;
            case 'Seteth':
            case 'seteth':
              name = 'Seteth'
              thumbnail = 'https://i.imgur.com/s35oLUZ.png'
              hexColor = '#71bea4'
              hp = 50, str = 45, mag = 35, dex = 50, spd = 50, lck = 25, def = 30, res = 25, cha = 45
              break;
            case 'Cyril':
            case 'cyril':
              name = 'Cyril'
              thumbnail = 'https://i.imgur.com/Oss58fD.png'
              hexColor = '#453d3b'
              hp = 35, str = 20, mag = 15, dex = 40, spd = 40, lck = 30, def = 10, res = 10, cha = 15
              break;
            case 'Anna':
            case 'anna':

            case 'Jeritza':
            case 'jeritza':

            case 'Hanneman':
            case 'hanneman':
              name = 'Hanneman'
              thumbnail = 'https://i.imgur.com/fCG6C12.png'
              hexColor = '#969794'
              hp = 40, str = 30, mag = 55, dex = 45, spd = 20, lck = 35, def = 25, res = 40, cha = 35
              break;
            case 'Manuela':
            case 'manuela':
              name = 'Manuela'
              thumbnail = 'https://i.imgur.com/af5exR9.png'
              hexColor = '#b09b80'
              hp = 50, str = 35, mag = 35, dex = 40, spd = 60, lck = 35, def = 30, res = 25, cha = 50
              break;
            case 'Gilbert':
            case 'gilbert':
              name = 'Gilbert'
              thumbnail = 'https://i.imgur.com/wyHkiIQ.png'
              hexColor = '#f7a77e'
              hp = 55, str = 45, mag = 20, dex = 45, spd = 30, lck = 15, def = 45, res = 10, cha = 35
              break;
            case 'Alois':
            case 'alois':
              name = 'Alois'
              thumbnail = 'https://i.imgur.com/Mz2eAuu.png'
              hexColor = '#857a67'
              hp = 45, str = 45, mag = 20, dex = 35, spd = 40, lck = 30, def = 40, res = 20, cha = 40
              break;
            case 'Catherine':
            case 'catherine':
              name = 'Catherine'
              thumbnail = 'https://i.imgur.com/7mK0y1K.png'
              hexColor = '#f8ebc9'
              hp = 50, str = 50, mag = 25, dex = 40, spd = 55, lck = 30, def = 30, res = 20, cha = 25
              break;
            case 'Shamir':
            case 'shamir':
              name = 'Shamir'
              thumbnail = 'https://i.imgur.com/gK1Iz5F.png'
              hexColor = '#57587e'
              hp = 35, str = 40, mag = 20, dex = 55, spd = 40, lck = 55, def = 20, res = 15, cha = 30
              break;
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