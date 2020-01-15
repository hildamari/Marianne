const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Replies with information about specific units from Fire Emblem Three Houses',
            extendedHelp: 'This command contains spoilers for Fire Emblem Three Houses!',
            usage: '<unit:string>'
        });

        this.customizeResponse('unit',
            'You must enter a valid unit!');
    }

    verifyUnit(unit) {
        const unitBioEmbed = new MessageEmbed()

        let name = '', aliases = '', gender = '', race = '', birthday = '', fodlanBirth = '', relatives = '', crest = '', nationality = '', hometown = '', residence = '', faction = '', occupation = '', startingClass = '', hexColor = '', thumbnail = '', crestImage = '', vA = '';

        switch(unit) {
            // case 'BylethM':
            // case 'bylethm':
            // case 'bylethf':
            // case 'BylethF':
            // case 'byleth':
            // case 'Byleth':
            // case 'Edelgard':
            // case 'edelgard':
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
                name = 'Hilda Valentine Goneril', aliases = 'N/A', gender = 'Female', race = 'Human', birthday = 'February 3rd', fodlanBirth = '3rd of the Pegasus Moon, Year 1162', relatives = 'Father, Holst Goneril, Goneril', crest = 'Minor Crest of Goneril', nationality = 'Leicester', hometown = 'Duchy of Goneril', residence = 'Garreg Mach Monastery', faction = 'Golden Deer', occupation = 'Student at the Officers Academy', startingClass = 'Noble', thumbnail = 'https://i.imgur.com/zoScHRC.png', crestImage = 'https://i.imgur.com/mKK2nws.png', vA = 'Salli Saffioti (English)\n Yūki Kuwahara (Japanese)', hexColor = '#fcafb7'
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
            // case 'flayn':
            case 'Seteth':
            case 'seteth':
                name = 'Seteth', aliases = '||Cichol||', gender = 'Male', race = 'Earth Dragon', birthday = 'December 27', fodlanBirth = '27th of the Ethereal Moon, Year ????', relatives = 'Flayn ||(Cethleann), Macuil, Indech, Rhea (Seiros), Sothis||', crest = 'Major Crest of Cichol', nationality = '||Nabatean||', hometown = '||Zanado||', residence = 'Garreg Mach Monastery', faction = 'Church of Seiros, ||Four Saints||', occupation = 'Aid to Archbishop Rhea, Instructor', startingClass = 'Wyvern Rider', hexColor = '#71bea4', thumbnail = 'https://i.imgur.com/s35oLUZ.png', crestImage = 'https://i.imgur.com/mJsn0KU.png'
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
            // case 'jeralt':
            // case 'Jeralt':
            // case 'rhea':
            // case 'Rhea':
            // default
          }

          unitBioEmbed
               .setAuthor(name, crestImage)
               .setColor(hexColor)
               .setThumbnail(thumbnail)
               .addField('Aliases', aliases)
               .addField('Birthday', birthday, true)
               .addField('Fódlan Birthday', fodlanBirth, true)
               .addField('Relatives', relatives) 
               .addField('Crest', crest, true)
               .addField('Nationality', nationality, true)
               .addField('Hometown', hometown, true)
               .addField('Residence', residence, true)
               .addField('Faction', faction, true)
               .addField('Occupation', occupation, true)
               .addField('Starting Class', startingClass, true)
               .addField('VAs', vA, true)

          return unitBioEmbed
    }
        
    async run(msg, [unit]) {
        let result = this.verifyUnit(unit);
        msg.send(result);
    }
};