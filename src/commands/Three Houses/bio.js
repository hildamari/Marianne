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
            case 'BylethM':
            case 'bylethm':
            case 'bylad':
            case 'Bylad':
                name = 'Byleth Eisner'
                thumbnail = 'https://i.imgur.com/6WmePDH.png'
                hexColor = '#4a7588'
                aliases = 'The Ashen Demon, Professor, Teach'
                gender = 'Male'
                race = 'Human'
                birthday = 'September 20th'
                fodlanBirth = '20th of the Horsebow Moon, Year 1159'
                crest = 'Crest of Flames'
                relatives = 'Jeralt, unnamed mother'
                nationality = 'N/A'
                hometown = 'N/A'
                residence = 'Garreg Mach Monastery'
                faction = 'Church of Seiros'
                occupation = 'Teacher at the Officers Academy; Mercenary (Formerly)'
                startingClass = 'Commoner'
                vA = 'Chris Niosi (Former), Zach Aguilar (Current)\n Yūsuke Kobayashi (Japanese)'
                crestImage = 'https://i.imgur.com/nBEWjAw.png'
                break;
            case 'bylethf':
            case 'BylethF':
            case 'Bylass':
            case 'bylass':
                name = 'Byleth Eisner'
                thumbnail = 'https://i.imgur.com/ZCGC8Jk.png'
                hexColor = '#4a7588'
                aliases = 'The Ashen Demon, Professor, Teach'
                gender = 'Female'
                race = 'Human'
                birthday = 'September 20th'
                fodlanBirth = '20th of the Horsebow Moon, Year 1159'
                crest = 'Crest of Flames'
                relatives = 'Jeralt, unnamed mother'
                nationality = 'N/A'
                hometown = 'N/A'
                residence = 'Garreg Mach Monastery'
                faction = 'Church of Seiros'
                occupation = 'Teacher at the Officers Academy; Mercenary (Formerly)'
                startingClass = 'Commoner'
                vA = 'Jeannie Tirado (English)\n Shizuka Ito (Japanese)'
                crestImage = 'https://i.imgur.com/nBEWjAw.png'
                break;
            case 'Edelgard':
            case 'edelgard':
                name = 'Edelgard von Hresvelg'
                aliases = '||Flame Emperor||'
                thumbnail = 'https://i.imgur.com/HQ3yEk4.png'
                hexColor = '#fefff4'
                gender = 'Female'
                race = 'Human'
                birthday = 'June 22nd'
                fodlanBirth = '22nd of the Garland Moon; Imperial Year 1162'
                crest = 'Minor Crest of Seiros, ||Major Crest of Flames||'
                relatives = 'Patricia (mother), Ionius IX (father), Lord Arundel (uncle), Lambert (stepfather), Dimitri (stepbrother), five older brothers (all deceased), three older sisters (all deceased), two younger siblings (both deceased)'
                nationality = 'Adrestian'
                startingClass = 'Noble'
                hometown = 'Enbarr'
                faction = 'Black Eagles'
                occupation = 'Heir apparent of the Adrestian Empire, Student at the Officers Academy, House leader of the Black Eagles, Emperor of the Adrestian Empire (Going from Chapter 12)'
                vA = 'Cristina Vee (E3 2018 Trailer), Tara Platt (English), Ai Kakuma (Japanese)'
                residence = 'Garreg Mach Monastery, Fhirdiad (Formerly)'
                break;
            case 'Hubert':
            case 'hubert':
                name = 'Hubert von Vestra'
                thumbnail = 'https://i.imgur.com/KCc36C6.png'
                hexColor = '#343d3e'
                aliases = 'N/A'
                gender = 'Male'
                race = 'Human'
                birthday = 'April 17th'
                fodlanBirth = '17th of the Great Tree Moon, Imperial Year 1160'
                crest = 'N/A'
                relatives = 'Marquis Vestra (Father)'
                nationality = 'Adrestian Empire'
                hometown = 'Enbarr'
                residence = 'Garreg Mach Monestary'
                faction = 'Black Eagles'
                occupation = 'Student at the Officers Academy, Minister of the Imperial Household'
                startingClass = 'Noble'
                vA = 'Katsuyuki Konishi (Japanese)\nRobbie Daymond (English)'
                crestImage = 'N/A'
                break;
            case 'Ferdinand':
            case 'ferdinand':
                name = 'Ferdinand von Aegir'
                thumbnail = 'https://i.imgur.com/iKtyabp.png'
                hexColor = '#feb472'
                aliases = 'N/A'
                gender = 'Male'
                race = 'Human'
                birthday = 'April 30th'
                fodlanBirth = '30th of the Great Tree Moon, Imperial Year 1162'
                crest = 'Minor Crest of Cichol'
                relatives = 'Derick (Ancestor), Duke Aegir (Father)'
                nationality = 'Adrestian Empire'
                hometown = 'Dukedom of Aegir'
                residence = 'Garreg Mach Monastery'
                faction = 'Black Eagles'
                occupation = 'Student at the Officers Academy, Heir of House Aegir'
                startingClass = 'Noble'
                vA = 'Taito Ban (Japanese)\nBilly Kametz (English)'
                crestImage = 'https://i.imgur.com/IFS5RGj.png'
                break;
            case 'Linhardt':
            case 'linhardt':
                name = 'Linhardt von Hevring'
                thumbnail = 'https://i.imgur.com/X41XIXq.png'
                hexColor = '#476352'
                gender = 'Male'
                aliases = 'N/A'
                crest = 'Minor Crest of Cethleann'
                race = 'Human'
                birthday = 'November 7th'
                fodlanBirth = '7th of the Red Wolf Moon, Imperial Year 1163'
                relatives = 'Count Hevring (Father)'
                nationality = 'Adrestian Empire'
                hometown = 'County of Hevring'
                residence = 'Garreg Mach Monastery'
                faction = 'Black Eagles'
                occupation = 'Student at the Officers Academy, Heir of House Hevring'
                startingClass = 'Noble'
                vA = 'Shun Horie (Japanese)\nChris Patton (English)'
                crestImage = 'https://i.imgur.com/0NAUtkv.png'
                break;
            case 'Caspar':
            case 'caspar':
                name = 'Caspar von Bergliez'
                thumbnail = 'https://i.imgur.com/mo0C51Q.png'
                hexColor = '#a6e4e2'
                gender = 'Male'
                aliases = 'N/A'
                crest = 'N/A'
                crestImage = 'N/A'
                race = 'Human'
                birthday = 'July 1st'
                fodlanBirth = '1st of the Blue Sea Moon, Imperial Year 1163'
                relatives = 'Unnamed grandfather, Unnamed father, Unnamed older brother, Randolph (Step-Uncle), Fleche (Step-Aunt)'
                nationality = 'Adrestian Empire'
                hometown = 'County of Bergliez'
                residence = 'Garreg Mach Monastery'
                faction = 'Black Eagles'
                occupation = 'Student at the Officers Academy'
                startingClass = 'Noble'
                vA = 'Satoru Murakami (Japanese)\nBen Diskin (English)'
                break;
            case 'Bernadetta':
            case 'bernadetta':
                name = 'Bernadetta von Varley'
                thumbnail = 'https://i.imgur.com/xowUlBr.png'
                hexColor = '#a080a8'
                aliases = 'Bernie, Bern'
                gender = 'Female'
                race = 'Human'
                crest = 'Minor Crest of Indech'
                crestImage = 'https://i.imgur.com/ZzLhoeL.png'
                birthday = 'December 12th'
                fodlanBirth = '12th of the Ethereal Moon, Imperial Year 1162'
                relatives = 'Count Varley (Father), Unnamed Mother, Unnamed Grandfather, Unnamed Uncle'
                nationality = 'Adrestian Empire'
                hometown = 'County of Varley'
                residence = 'Garreg Mach Monastery'
                faction = 'Black Eagles'
                occupation = 'Student at the Officers Academy, Heir of House Varley'
                startingClass = 'Noble'
                vA = 'Ayumi Tsuji (Japanese)\nErica Mendez (English)'
                break;
            case 'Dorothea':
            case 'dorothea':
                name = 'Dorothea Arnault'
                thumbnail = 'https://i.imgur.com/S3FNa04.png'
                hexColor = '#7b585b'
                aliases = 'Mystical Songstress'
                gender = 'Female'
                race = 'Human'
                crest = 'N/A'
                crestImage = 'N/A'
                birthday = 'September 29th'
                fodlanBirth = '29th of the Horsebow Moon, Imperial Year 1161'
                relatives = 'Unnamed mother, unnamed father'
                nationality = 'Adrestian Empire'
                hometown = 'Embarr'
                residence = 'Garreg Mach Monastery'
                faction = 'Black Eagles, Mittelfrank Opera Company'
                occupation = 'Songstress, Student at the Officers Academy'
                startingClass = 'Commoner'
                vA = 'Juri Nagatsuma (Japanese)\nAllegra Clark (English)'
                break;
            case 'Petra':
            case 'petra':
                name = 'Petra Macneary'
                thumbnail = 'https://i.imgur.com/ZfvRIX6.png'
                hexColor = '#824364'
                gender = 'Female'
                race = 'Human'
                aliases = 'N/A'
                crest = 'N/A'
                crestImage = 'N/A'
                birthday = 'September 7th'
                fodlanBirth = '7th of the Horsebow Moon, Imperial Year 1164'
                relatives = 'King of Brigid (Grandfather), Unnamed Father'
                nationality = 'Brigid'
                hometown = 'Brigid'
                residence = 'Garreg Mach Monastery, Adrestian Empire (Formerly)'
                faction = 'Black Eagles'
                occupation = 'Crown Princess of Brigid, Student at the Officers Academy'
                startingClass = 'Commoner'
                vA = 'Shizuka Ishigami\nFaye Mata'
                break;
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
                name = 'Hilda Valentine Goneril'
                aliases = 'N/A'
                gender = 'Female'
                race = 'Human'
                birthday = 'February 3rd'
                fodlanBirth = '3rd of the Pegasus Moon, Year 1162'
                relatives = 'Father, Holst Goneril, Goneril'
                crest = 'Minor Crest of Goneril'
                nationality = 'Leicester'
                hometown = 'Duchy of Goneril'
                residence = 'Garreg Mach Monastery'
                faction = 'Golden Deer'
                occupation = 'Student at the Officers Academy'
                startingClass = 'Noble'
                thumbnail = 'https://i.imgur.com/zoScHRC.png'
                crestImage = 'https://i.imgur.com/mKK2nws.png'
                vA = 'Salli Saffioti (English)\n Yūki Kuwahara (Japanese)'
                hexColor = '#fcafb7'
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
                name = 'Seteth'
                aliases = '||Cichol||'
                gender = 'Male'
                race = 'Earth Dragon'
                birthday = 'December 27'
                fodlanBirth = '27th of the Ethereal Moon, Year ????'
                relatives = 'Flayn ||(Cethleann), Macuil, Indech, Rhea (Seiros), Sothis||'
                crest = 'Major Crest of Cichol'
                nationality = '||Nabatean||'
                hometown = '||Zanado||'
                residence = 'Garreg Mach Monastery'
                faction = 'Church of Seiros, ||Four Saints||'
                occupation = 'Aid to Archbishop Rhea, Instructor'
                startingClass = 'Wyvern Rider'
                hexColor = '#71bea4'
                thumbnail = 'https://i.imgur.com/s35oLUZ.png'
                crestImage = 'https://i.imgur.com/mJsn0KU.png'
                vA = 'Takehito Koyasu (Japanese)\nMark Whitten (English)'
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
            default:
                name = "N/A"
          }

          if(name == "N/A") {
              return "Not a playable unit"
          } else {

            if(crestImage == 'N/A') {
                unitBioEmbed.setAuthor(name)
            } else {
                unitBioEmbed.setAuthor(name, crestImage)
            }

            unitBioEmbed
                .setColor(hexColor)
                .setThumbnail(thumbnail)
                .addField('Aliases', aliases)
                .addField('Birthday', birthday, true)
                .addField('Gender', gender, true)
                .addField('Race', race, true)
                .addField('Fódlan Birthday', fodlanBirth)
                .addField('Relatives', relatives) 
                .addField('Crest', crest, true)
                .addField('Nationality', nationality, true)
                .addField('Hometown', hometown, true)
                .addField('Residence', residence, true)
                .addField('Faction', faction, true)
                .addField('Occupation', occupation)
                .addField('Starting Class', startingClass, true)
                .addField('VAs', vA, true)

            return unitBioEmbed
        }
    }
        
    async run(msg, [unit]) {
        let result = this.verifyUnit(unit);
        msg.send(result);
    }
};