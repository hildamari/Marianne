const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Replies with information about specific units from Fire Emblem Three Houses',
            extendedHelp: 'This command contains spoilers for Fire Emblem Three Houses!',
            usage: '<unit:string>'
        });

        let customResponse = this.customizeResponse('unit',
            'You must enter a valid unit!');

        // this.createCustomResolver('unit', (unit, possible, msg) =>
		// 	arg ? this.client.arguments.get('unit').run(unit, possible, msg) : customResponse);
    }

    verifyUnit(unit) {
        const unitBioEmbed = new MessageEmbed()

        let name = '', aliases = '', gender = '', race = '', birthday = '', fodlanBirth = '', relatives = '',
        crest = '', nationality = '', hometown = '', residence = '', faction = '', occupation = '', startingClass = '', hexColor = '', thumbnail = '', crestImage = '';

        switch(unit) {
            // case 'BylethM':
            // case 'BylethF':
            // case 'Edelgard':
            // case 'Hubert':
            // case 'Ferdinand':
            // case 'Linhardt':
            // case 'Caspar':
            // case 'Bernadetta':
            // case 'Dorothea':
            // case 'Petra':
            // case 'Dimitri':
            // case 'Dedue':
            // case 'Felix':
            // case 'Ashe':
            // case 'Sylvain':
            // case 'Mercedes':
            // case 'Annette':
            // case 'Ingrid':
            // case 'Claude':
            case 'Hilda':
            case 'hilda':
                name = 'Hilda Valentine Goneril', aliases = 'N/A', gender = 'Female', race = 'Human', birthday = 'February 3rd', fodlanBirth = '3rd of the Pegasus Moon, Year 1162', relatives = 'Father, Holst Goneril, Goneril', crest = 'Minor Crest of Goneril', nationality = 'Leicester', hometown = 'Duchy of Goneril', residence = 'Garreg Mach Monastery', faction = 'Golden Deer', occupation = 'Student at the Officers Academy', startingClass = 'Noble', thumbnail = 'https://i.imgur.com/zoScHRC.png', crestImage = 'https://i.imgur.com/mKK2nws.png'
              break;
            // case 'Lorenz':
            // case 'Raphael':
            // case 'Ignatz':
            // case 'Lysithea':
            // case 'Marianne':
            // case 'Leonie':
            // case 'Flayn':
            case 'Seteth':
            case 'seteth':
                name = 'Seteth', aliases = '||Cichol||', gender = 'Male', race = 'Earth Dragon', birthday = 'December 27', fodlanBirth = '27th of the Ethereal Moon, Year ????', relatives = 'Flayn ||(Cethleann), Macuil, Indech, Rhea (Seiros), Sothis||', crest = 'Major Crest of Cichol', nationality = '||Nabatean||', hometown = '||Zanado||', residence = 'Garreg Mach Monastery', faction = 'Church of Seiros, ||Four Saints||', occupation = 'Aid to Archbishop Rhea, Instructor', startingClass = 'Wyvern Rider', hexColor = '#71bea4', thumbnail = 'https://i.imgur.com/s35oLUZ.png', crestImage = 'https://i.imgur.com/mJsn0KU.png'
              break;
            // case 'Cyril':
            // case 'Anna':
            // case 'Jeritza':
            // case 'Hanneman':
            // case 'Manuela':
            // case 'Gilbert':
            // case 'Alois':
            // case 'Catherine':
            // case 'Shamir':
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
               .addField('Starting Class', startingClass)

          return unitBioEmbed
    }
        
    async run(msg, [unit]) {
        let result = this.verifyUnit(unit);
        msg.send(result);
    }
};