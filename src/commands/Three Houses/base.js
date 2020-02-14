const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['base-stats'],
            description: 'Replies with information about specific units\' base stats',
            extendedHelp: 'This command contains spoilers for Fire Emblem Three Houses!',
            usage: '<unit:string>'
        });

        this.customizeResponse('unit',
            'You must enter a valid unit!');
    }

    verifyUnit(unit) {
        const unitBaseStatsEmbed = new MessageEmbed()

        let thumbnail = '', name = '', hp, str, mag, dex, spd, lck, def, res, cha, hexColor = ''

        switch(unit) {
            case 'BylethM':
            case 'bylethm':
            case 'bylad':
            case 'Bylad':
                name = 'Byleth'
                thumbnail = 'https://i.imgur.com/6WmePDH.png'
                hexColor = '#4a7588'
                hp = 27, str = 13, mag = 6, dex = 9, spd = 8, lck = 8, def = 6, res = 6, cha = 7
                break;
            case 'BylethF':
            case 'bylethf':
            case 'bylass':
            case 'Bylass':
                name = 'Byleth'
                thumbnail = 'https://i.imgur.com/ZCGC8Jk.png'
                hexColor = '#4a7588'
                hp = 27, str = 13, mag = 6, dex = 9, spd = 8, lck = 8, def = 6, res = 6, cha = 7
                break;
            case 'Byleth':
            case 'byleth':
                name = 'Byleth'
                thumbnail = 'https://i.imgur.com/57L1pPh.png'
                hexColor = '#4a7588'
                hp = 27, str = 13, mag = 6, dex = 9, spd = 8, lck = 8, def = 6, res = 6, cha = 7
                break;
            case 'edelgard':
            case 'Edelgard':
                name = 'Edelgard'
                thumbnail = 'https://i.imgur.com/HQ3yEk4.png'
                hexColor = '#fefff4'
                hp = 29, str = 13, mag = 6, dex = 5, spd = 8, lck = 5, def = 6, res = 4, cha = 10
                break;
            case 'Hubert':
            case 'hubert':
                name = 'Hubert'
                thumbnail = 'https://i.imgur.com/KCc36C6.png'
                hexColor = '#343d3e'
                hp = 22, str = 6, mag = 12, dex = 6, spd = 7, lck = 6, def = 4, res = 7, cha = 6
                break;
            case 'Ferdinand':
            case 'ferdinand':
                name = 'Ferdinand von Aegir'
                thumbnail = 'https://i.imgur.com/iKtyabp.png'
                hexColor = '#feb472'
                hp = 28, str = 8, mag = 5, dex = 6, spd = 8, lck = 6, def = 6, res = 2, cha = 7
                break;
            case 'Linhardt':
            case 'linhardt':
                name = 'Linhardt'
                thumbnail = 'https://i.imgur.com/X41XIXq.png'
                hexColor = '#476352'
                hp = 24, str = 5, mag = 10, dex = 6, spd = 5, lck = 7, def = 5, res = 9, cha = 3
                break;
            case 'Caspar':
            case 'caspar':
                name = 'Caspar'
                thumbnail = 'https://i.imgur.com/mo0C51Q.png'
                hexColor = '#a6e4e2'
                hp = 26, str = 9, mag = 3, dex = 5, spd = 6, lck = 8, def = 6, res = 2, cha = 4
                break;
            case 'Bernadetta':
            case 'bernadetta':
                name = 'Bernadetta'
                thumbnail = 'https://i.imgur.com/xowUlBr.png'
                hexColor = '#a080a8'
                hp = 25, str = 8, mag = 5, dex = 7, spd = 7, lck = 8, def = 6, res = 2, cha = 6
                break;
            case 'Dorothea':
            case 'dorothea':
                name = 'Dorothea'
                thumbnail = 'https://i.imgur.com/S3FNa04.png'
                hexColor = '#7b585b'
                hp = 24, str = 5, mag = 11, dex = 6, spd = 7, lck = 6, def = 4, res = 7, cha = 8
                break;
            case 'Petra':
            case 'petra':
                name = 'Petra'
                thumbnail = 'https://i.imgur.com/ZfvRIX6.png'
                hexColor = '#824364'
                hp = 25, str = 9, mag = 3, dex = 7, spd = 10, lck = 7, def = 5, res = 2, cha = 6
                break;
            case 'Dimitri':
            case 'dimitri':
                name = 'Dimitri'
                thumbnail = 'https://i.imgur.com/Ddl1C8a.png'
                hexColor = '#fcfba8'
                hp = 28, str = 12, mag = 4, dex = 7, spd = 7, lck = 5, def = 7, res = 4, cha = 9
                break;
            case 'Dedue':
            case 'dedue':
                name = 'Dedue'
                thumbnail = 'https://i.imgur.com/quIqslt.png'
                hexColor = '#e8e9e2'
                hp = 30, str = 12, mag = 2, dex = 5, spd = 7, lck = 5, def = 8, res = 1, cha = 4
                break;
            case 'Felix':
            case 'felix':
                name = 'Felix'
                thumbnail = 'https://i.imgur.com/YJcGEiK.png'
                hexColor = '#403f64'
                hp = 26, str = 10, mag = 5, dex = 6, spd = 9, lck = 5, def = 5, res = 3, cha = 5
                break;
            case 'Ashe':
            case 'ashe':
                name = 'Ashe'
                thumbnail = 'https://i.imgur.com/L4iJ8Ug.png'
                hexColor = '#b5bdc6'
                hp = 23, str = 8, mag =	5, dex = 8, spd = 9, lck = 6, def = 5, res = 6, cha = 5
                break;
            case 'Sylvain':
            case 'sylvain':
                name = 'Sylvain'
                thumbnail = 'https://i.imgur.com/77T2SRt.png'
                hexColor = '#e06c53'
                hp = 27, str = 9, mag = 5, dex = 5, spd = 8, lck = 6, def = 6, res = 2, cha = 7
                break;
            case 'Mercedes':
            case 'mercedes':
                name = 'Mercedes'
                thumbnail = 'https://i.imgur.com/y1BWI7T.png'
                hexColor = '#f4dcc4'
                hp = 25, str = 6, mag = 10, dex = 6, spd = 8, lck = 5, def = 5, res = 9, cha = 8
                break;
            case 'Annette':
            case 'annette':
                name = 'Annette'
                thumbnail = 'https://i.imgur.com/lnE7TRE.png'
                hexColor = '#f6a67d'
                hp = 23, str = 6, mag = 11, dex = 7, spd = 7, lck = 6, def = 5, res = 4, cha = 6
                break;
            case 'Ingrid':
            case 'ingrid':
                name = 'Ingrid'
                thumbnail = 'https://i.imgur.com/t8fCo54.png'
                hexColor = '#f8e5a0'
                hp = 27, str = 8, mag = 6, dex = 6, spd = 8, lck = 6, def = 5, res = 8, cha = 8
                break;
            case 'Claude':
            case 'claude':
                name = 'Claude'
                thumbnail = 'https://i.imgur.com/A4i8b9Z.png'
                hexColor = '#4a4240'
                hp = 26, str = 11, mag = 5, dex = 8, spd = 8, lck = 7, def = 6, res = 4, cha = 8
                break;
            case 'Hilda':
            case 'hilda':
                name = 'Hilda'
                thumbnail = 'https://i.imgur.com/zoScHRC.png'
                hexColor = '#fcafb7'
                hp = 29, str = 10, mag = 5, dex = 5, spd = 8, lck = 6, def = 6, res = 3, cha = 7
                break;
            case 'Lorenz':
            case 'lorenz':
                name = 'Lorenz'
                thumbnail = 'https://i.imgur.com/uYopDET.png'
                hexColor = '#7373ac'
                hp = 28, str = 8, mag = 7, dex = 6, spd = 7, lck = 5, def = 6, res = 6, cha = 3
                break;
            case 'Raphael':
            case 'raphael':
                name = 'Raphael'
                thumbnail = 'https://i.imgur.com/MB3wRvI.png'
                hexColor = '#f0d9a1'
                hp = 30, str = 11, mag = 3, dex = 5, spd = 6, lck = 6, def = 7, res = 1, cha = 4
                break;
            case 'Ignatz':
            case 'ignatz':
                name = 'Ignatz'
                thumbnail = 'https://i.imgur.com/TUREZkF.png'
                hexColor = '#c6c69d'
                hp = 25, str = 8, mag = 5, dex = 7, spd = 8, lck = 8, def = 4, res = 6, cha = 4
                break;
            case 'Lysithea':
            case 'lysithea':
                name = 'Lysithea'
                thumbnail = 'https://i.imgur.com/EIm3Zof.png'
                hexColor = '#fefcfd'
                hp = 22, str = 4, mag = 11, dex = 7, spd = 7, lck = 4, def = 3, res = 4, cha = 5
                break;
            case 'Marianne':
            case 'marianne':
                name = 'Marianne'
                thumbnail = 'https://i.imgur.com/OyUl9he.png'
                hexColor = '#aad0fa'
                hp = 23, str = 5, mag = 11, dex = 6, spd = 7, lck = 6, def = 4, res = 8, cha = 7
                break;
            case 'Leonie':
            case 'leonie':
                name = 'Leonie'
                thumbnail = 'https://i.imgur.com/yZxvJG4.png'
                hexColor = '#f17d5b'
                hp = 26, str = 9, mag = 5, dex = 8, spd = 9, lck = 6, def = 7, res = 2, cha = 7
                break;
            case 'Flayn':
            case 'flayn':
            case 'cethleann':
            case 'Cethleann':
                name = 'Flayn'
                thumbnail = 'https://i.imgur.com/1PcDmnL.png'
                hexColor = '#9ae5b9'
                hp = 24, str = 6, mag = 9, dex = 6, spd = 5, lck = 4, def = 5, res = 10, cha = 9
                break;
            case 'Seteth':
            case 'seteth':
            case 'Cichol':
            case 'cichol':
                name = 'Seteth'
                thumbnail = 'https://i.imgur.com/s35oLUZ.png'
                hexColor = '#71bea4'
                hp = 27, str = 9, mag = 8, dex = 8, spd = 5, lck = 6, def = 6, res = 4, cha = 9
                break;
            case 'Cyril':
            case 'cyril':
                name = 'Cyril'
                thumbnail = 'https://i.imgur.com/Oss58fD.png'
                hexColor = '#71bea4'
                hp = 24, str = 7, mag = 4, dex = 6, spd = 6, lck = 6, def = 5, res = 2, cha = 4
                break;
            case 'Anna':
            case 'anna':
                name = 'Anna'
                thumbnail = 'https://i.imgur.com/d2dCJxN.png'
                hexColor = '#d85e77'
                hp = 26, str = 7, mag = 7, dex = 7, spd = 7, lck = 7, def = 5, res = 7, cha = 7
                break;
            case 'Jeritza':
            case 'jeritza':
            case 'Emile':
            case 'emile':
                name = 'Jeritza'
                thumbnail = 'https://i.imgur.com/SSXUCCn.png'
                hexColor = '#f4dcc4'
                hp = 30, str = 8, mag = 6, dex = 6, spd = 8, lck = 4, def = 7, res = 5, cha = 3
                break;
            case 'Hanneman':
            case 'hanneman':
                name = 'Hanneman'
                thumbnail = 'https://i.imgur.com/fCG6C12.png'
                hexColor = '#969794'
                hp = 25, str = 6, mag = 10, dex = 6, spd = 6, lck = 4, def = 5, res = 7, cha = 5
                break;
            case 'Manuela':
            case 'manuela':
                name = 'Manuela'
                thumbnail = 'https://i.imgur.com/af5exR9.png'
                hexColor = '#b09b80'
                hp = 26, str = 10, mag = 8, dex = 6, spd = 8, lck = 6, def = 5, res = 4, cha = 7
                break;
            case 'Gilbert':
            case 'gilbert':
            case 'Gustave':
            case 'gustave':
                name = 'Gilbert'
                thumbnail = 'https://i.imgur.com/wyHkiIQ.png'
                hexColor = '#f7a77e'
                hp = 30, str = 9, mag = 4, dex = 6, spd = 5, lck = 4, def = 5, res = 2, cha = 6
                break;
            case 'Alois':
            case 'alois':
                name = 'Alois'
                thumbnail = 'https://i.imgur.com/Mz2eAuu.png'
                hexColor = '#857a67'
                hp = 28, str = 9, mag = 4, dex = 5, spd = 6, lck = 5, def = 5, res = 2, cha = 7
                break;
            case 'Catherine':
            case 'catherine':
            case 'Cassandra':
            case 'cassandra':
                name = 'Catherine'
                thumbnail = 'https://i.imgur.com/7mK0y1K.png'
                hexColor = '#f8ebc9'
                hp = 27, str = 8, mag = 5, dex = 6, spd = 7, lck = 6, def = 5, res = 2, cha = 4
                break;
            case 'Shamir':
            case 'shamir':
                name = 'Shamir'
                thumbnail = 'https://i.imgur.com/gK1Iz5F.png'
                hexColor = '#57587e'
                hp = 26, str = 8, mag = 4, dex = 7, spd = 6, lck = 8, def = 5, res = 2, cha = 6
                break;
            case 'yuri':
            case 'Yuri':
                name = 'Yuri'
                thumbnail = 'https://i.imgur.com/Paxgdl2.png'
                hexColor = '#afacdb'
                hp = 24, str = 10, mag = 6, dex = 7, spd = 9, lck = 7, def = 5, res = 7, cha = 8
                break;
            case 'hapi':
            case 'Hapi':
                name = 'Hapi'
                thumbnail = 'https://i.imgur.com/r5qfcC9.png'
                hexColor = '#dc5f65'
                hp = 26, str = 6, mag = 11, dex = 8, spd = 6, lck = 4, 	def = 4, res = 7, cha = 4
                break;
            case 'Balthus':
            case 'balthus':
                name = 'Balthus'
                thumbnail = 'https://i.imgur.com/AUfVNC2.png'
                hexColor = '#5f5c6f'
                hp = 28, str = 11, mag = 5, dex = 4, spd = 7, lck = 3, def = 7, res = 4, cha = 4
                break;
            case 'constance':
            case 'Constance':
                name = 'Constance'
                thumbnail = 'https://i.imgur.com/n7XHQLu.png'
                hexColor = '#fffebb'
                hp = 23, str = 5, mag = 11, dex = 6, spd = 6, lck = 4, def = 3, res = 4, cha = 6
                break;
            default:
                name = "N/A"
          }

          if(name == "N/A") {
              return "Not a playable unit"
          } else {
              unitBaseStatsEmbed
               .setAuthor(name)
               .setColor(hexColor)
               .setThumbnail(thumbnail)
               .addField('HP', hp, true)
               .addField('Strength (Str)', str, true)
               .addField('Magic (Mag)', mag, true)
               .addField('Dexterity (Dex)', dex, true) 
               .addField('Speed (Spd)', spd, true)
               .addField('Luck (Lck)', lck, true)
               .addField('Defense (Def)', def, true)
               .addField('Resistence (Res)', res, true)
               .addField('Charm (Cha)', cha, true)

            return unitBaseStatsEmbed
          }
    }
        
    async run(msg, [unit]) {
        let result = this.verifyUnit(unit);
        msg.send(result);
    }
    
};