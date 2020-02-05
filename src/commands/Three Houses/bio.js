const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Replies with information about specific units',
            extendedHelp: 'This command contains spoilers for Fire Emblem Three Houses!',
            usage: '<unit:string>'
        });

        this.customizeResponse('unit',
            'You must enter a valid unit!');
    }

    verifyUnit(unit) {
        const unitBioEmbed = new MessageEmbed()

        let name = '', aliases = '', gender = '', race = '', birthday = '', fodlanBirth = '', relatives = '', crest = '', nationality = '', hometown = '', residence = '', faction = '', occupation = '', startingClass = '', hexColor = '', thumbnail = '', crestImage = '', vA = '';

        const lysitheaCrests = ['https://i.imgur.com/2oGFZnj.png', 'https://i.imgur.com/xPdFnyE.png']
        let max = 1
        let min = 0
        let lysitheaCrest = lysitheaCrests[Math.floor(Math.random() * (max - min + 1) + min)]

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
                nationality = 'Fódlan'
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
            case 'Dimitri':
            case 'dimitri':
                name = 'Dimitri Alexandre Blaiddyd'
                thumbnail = 'https://i.imgur.com/Ddl1C8a.png'
                hexColor = '#fcfba8'
                aliases = 'The Boar Prince, Prince/King of Delusion, The Tempest King, The Savior King'
                vA = 'Kaito Ishikawa (Japanese), Mai Nishikawa (Japanese, young)\nChris Hackney (English)'
                gender = 'Male'
                race = 'Human'
                birthday = 'December 20th'
                fodlanBirth = '20th of the Ethereal Moon, Imperial Year 1162'
                relatives = 'Blaiddyd (ancestor), Loog (ancestor), Klaus I (ancestor), Lambert (father), Unnamed mother, Patricia (stepmother), Rufus (paternal uncle), Volkhard (step-uncle), Edelgard (stepsister), Duke Riegan (distant relative), Godfrey (distant relative), Claude (distant relative)'
                nationality = 'Holy Kingdom of Faerghus'
                hometown = 'Fhirdiad'
                residence = 'Garreg Mach Monastery'
                faction = 'Blue Lions'
                occupation = 'Crown Prince of the Holy Kingdom of Faerghus, Squire of the Holy Kingdom Army (formerly), Student at the Officers Academy, House leader of the Blue Lions, King of the Holy Kingdom of Faerghus'
                startingClass = 'Noble'
                crest = 'Minor Crest of Blaiddyd'
                crestImage = 'https://i.imgur.com/sS6zBAe.png'
                break;
            case 'Dedue':
            case 'dedue':
                name = 'Dedue Molinaro'
                thumbnail = 'https://i.imgur.com/quIqslt.png'
                hexColor = '#e8e9e2'
                aliases = 'N/A'
                gender = 'Male'
                race = 'Human'
                crest = 'N/A'
                crestImage = 'N/A'
                birthday = 'August 31st'
                fodlanBirth = '31st of the Verdant Rain Moon, Imperial Year 1161'
                nationality = 'Duscur'
                hometown = 'Holy Kingdom of Faerghus'
                residence = 'Garreg Mach Monastery, Holy Kingdom of Faerghus'
                faction = 'Blue Lions'
                occupation = 'Student at the Officers Academy, Vassal of Dimitri'
                relatives = 'Unnamed father (deceased)'
                startingClass = 'Commoner'
                vA = 'Takahashi Hidenori (Japanese)\nBen Lepley (English)'
                break;
            case 'Felix':
            case 'felix':
                name = 'Felix Hugo Fraldarius'
                thumbnail = 'https://i.imgur.com/YJcGEiK.png'
                hexColor = '#403f64'
                aliases = 'N/A'
                crest = 'Major Crest of Fraldarius'
                crestImage = 'https://i.imgur.com/2yiRHM4.png'
                gender = 'Male'
                race = 'Human'
                birthday = 'February 20th'
                fodlanBirth = '20th of the Pegasus Moon, Imperial Year 1163'
                relatives = 'Fraldarius (Ancestor), Kyphon (Presumed Ancestor), Rodrigue (Father), Unnamed Uncle, Glenn (Older Brother)'
                nationality = 'Holy Kingdom of Faerghus'
                hometown = 'Dukedom of Fraldarius'
                residence = 'Garreg Mach Monastery'
                faction = 'Blue Lions'
                occupation = 'Student at the Officers Academy, Heir of House Fraldarius, Squire of the Holy Kingdom Army (Formerly)'
                startingClass = 'Noble'
                vA = 'Yuichi Jose (Japanese)\nLucien Dodge (English)'
                break;
            case 'Ashe':
            case 'ashe':
                name = 'Ashe Ubert'
                thumbnail = 'https://i.imgur.com/L4iJ8Ug.png'
                hexColor = '#b5bdc6'
                aliases = 'N/A'
                crest = 'N/A'
                crestImage = 'N/A'
                gender = 'Male'
                race = 'Human'
                birthday = 'October 17th'
                fodlanBirth = '17th of the Wyvern Moon, Imperial Year 1163'
                relatives = 'Unnamed father, Unnamed mother, Lonato (adoptive father), Unnamed brother, Unnamed sister, Christophe (adoptive brother)'
                nationality = 'Holy Kingdom of Faerghus'
                hometown = 'Gaspard'
                residence = 'Garreg Mach Monastery'
                faction = 'Blue Lions'
                occupation = 'Student at the Officers Academy, Heir of House Gaspard'
                startingClass = 'Commoner'
                vA = 'Yūki Inoue (Japanese)\nShannon Mckain (English)'
                break;
            case 'Sylvain':
            case 'sylvain':
                name = 'Sylvain Jose Gautier'
                thumbnail = 'https://i.imgur.com/77T2SRt.png'
                hexColor = '#e06c53'
                gender = 'Male'
                aliases = 'N/A'
                crest = 'Minor Crest of Gautier'
                crestImage = 'https://i.imgur.com/3bhkFyP.png'
                race = 'Human'
                birthday = 'June 5th'
                fodlanBirth = '5th of the Garland Moon, Imperial Year 1160'
                relatives = 'Gautier (Ancestor), Margrave Gautier (Father), Miklan (Elder brother)'
                nationality = 'Holy Kingdom of Faerghus'
                hometown = 'Margravate of Gautier'
                residence = 'Garreg Mach Monastery'
                faction = 'Blue Lions'
                occupation = 'Student at the Officers Academy, Heir of House Gautier'
                startingClass = 'Noble'
                vA = 'Makoto Furukawa (Japanese)\nJoe Brogie (English)'
                break;
            case 'Mercedes':
            case 'mercedes':
                name = 'Mercedes von Martritz'
                thumbnail = 'https://i.imgur.com/y1BWI7T.png'
                hexColor = '#f4dcc4'
                aliases = 'Mercie, Mercedes von Bartels'
                gender = 'Female'
                race = 'Human'
                crest = 'Minor Crest of Lamine'
                crestImage = 'https://i.imgur.com/I7c4voa.png'
                birthday = 'May 27th'
                fodlanBirth = '27th of the Harpstring Moon, Imperial Year 1157'
                relatives = 'Lamine (Ancestor), Baron Matritz (Father), Unnamed Mother, Baron Bartels (Step-father), Unnamed Adoptive Father, Emile (Younger Half-Brother), Unnamed Half-Siblings'
                nationality = 'Holy Kingdom of Faerghus, Adrestian Empire (Formerly)'
                hometown = 'Barony of Martritz, Fhirdiad'
                residence = 'Garreg Mach Monastery, Barony of Bartels (Formerly)'
                faction = 'Blue Lions'
                occupation = 'Student at the Officers Academy, Student at Fhirdiad School of Sorcery (Formerly)'
                startingClass = 'Commoner'
                vA = 'Yumiri Hanamori (Japanese)\nDorothy Elias-Fahn (English)'
                break;
            case 'Annette':
            case 'annette':
                name = 'Annette Fantine Dominic'
                thumbnail = 'https://i.imgur.com/lnE7TRE.png'
                hexColor = '#f6a67d'
                gender = 'Female'
                aliases = 'Annie'
                race = 'Human'
                crest = 'Minor Crest of Dominic'
                crestImage = 'https://i.imgur.com/TZwUtSr.png'
                birthday = 'May 9th'
                fodlanBirth = '9th of the Harpstring Moon, Imperial Year 1163'
                relatives = 'Dominic (Ancestor), Gilbert (Father), Unnamed Mother, Baron Dominic (Uncle)'
                nationality = 'Holy Kingdom of Faerghus'
                hometown = 'Fhirdiad'
                residence = 'Garreg Mach Monastery, Barony of Dominic'
                faction = 'Blue Lions'
                occupation = 'Student at the Officers Academy, Student at Fhirdiad School of Sorcery (Formerly)'
                startingClass = 'Noble'
                vA = 'Takako Tanaka (Japanese)\nAbby Trott (English)'
                break;
            case 'Ingrid':
            case 'ingrid':
                name = 'Ingrid Brandl Galatea'
                thumbnail = 'https://i.imgur.com/t8fCo54.png'
                hexColor = '#f8e5a0'
                gender = 'Female'
                race = 'Human'
                aliases = 'N/A'
                crest = 'Minor Crest of Daphnel'
                crestImage = 'https://i.imgur.com/WVtYgs8.png'
                birthday = 'January 4th'
                fodlanBirth = '4th of the Guardian Moon, Imperial Year 1163'
                relatives = 'Daphnel (Ancestor), Unnamed Grandmother, Count Galatea (Father), Unnamed Siblings, Judith (Distant Relative), Glenn (Fiance)'
                nationality = 'Holy Kingdom of Faerghus'
                hometown = 'County of Galatea'
                residence = 'Garreg Mach Monastery'
                faction = 'Blue Lions'
                occupation = 'Student at the Officers Academy'
                startingClass = 'Noble'
                vA = 'Manaka Iwami (Japanese)\nBrittany Cox (English)'
                break;
            case 'Claude':
            case 'claude':
                name = 'Claude von Riegan'
                thumbnail = 'https://i.imgur.com/A4i8b9Z.png'
                hexColor = '#4a4240'
                aliases = 'The Master Tactician, King of Unification'
                gender = 'Male'
                race = 'Human'
                crest = 'Minor Crest of Riegan'
                crestImage = 'https://i.imgur.com/Hitf9Kg.png'
                birthday = 'July 24th'
                fodlanBirth = '24th of the Blue Sea Moon, Imperial Year 1162'
                relatives = 'Riegan (Ancestor), Blaiddyd (Ancestor), Loog (Ancestor), Klaus I (Ancestor), Duke Riegan (Maternal grandfather), King of Almyra (Father), Unnamed Mother, Godfrey (Maternal uncle), Unnamed Cousin, Lambert (Distant relative), Rufus (Distant relative), Dimitri (Distant relative)'
                nationality = 'Almyra, Leicester Alliance'
                hometown = 'Almyra, Derdriu'
                residence = 'Garreg Mach Monastery'
                faction = 'Golden Deer'
                occupation = 'Heir of House Riegan, Leader of the Leicester Alliance (Post-timeskip), Prince of Almyra, Student at the Officers Academy, House leader of the Golden Deer'
                startingClass = 'Noble'
                vA = 'Toshiyuki Toyonaga (Japanese)\nJoe Zieja (English)'
                break;
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
            case 'Lorenz':
            case 'lorenz':
                name = 'Lorenz Hellman Gloucester'
                thumbnail = 'https://i.imgur.com/uYopDET.png'
                hexColor = '#7373ac'
                aliases = 'N/A'
                startingClass = 'Noble'
                gender = 'Male'
                race = 'Human'
                birthday = 'June 13th'
                fodlanBirth = '13th of the Garland Moon, Imperial Year 1161'
                relatives = 'Gloucester (Ancestor), Count Gloucester (Father)'
                nationality = 'Leicester Alliance'
                hometown = 'County of Gloucester'
                residence = 'Garreg Mach Monastery'
                faction = 'Golden Deer'
                occupation = 'Student at the Officers Academy, Heir of House Gloucester, Student at Fhirdiad School of Sorcery (Formerly)'
                vA = 'Hiroshi Watanabe (Japanese)\nBen Diskin (English)'
                crest = 'Minor Crest of Gloucester'
                crestImage = 'https://i.imgur.com/xPdFnyE.png'
                break;
            case 'Raphael':
            case 'raphael':
                name = 'Raphael Kirsten'
                thumbnail = 'https://i.imgur.com/MB3wRvI.png'
                hexColor = '#f0d9a1'
                aliases = 'Beast of Leicester'
                gender = 'Male'
                race = 'Human'
                birthday = 'May 18th'
                fodlanBirth = '18th of the Harpstring Moon, Imperial Year 1162'
                relatives = 'Unnamed grandfather, Unnamed parents (deceased), Maya (younger sister)'
                nationality = 'Leicester Alliance'
                hometown = 'Leicester Alliance'
                occupation = 'Student at the Officers Academy'
                residence = 'Garreg Mach Monastery'
                faction = 'Golden Deer'
                vA = 'Takaki Otomari (Japanese)\nZachary Rice (English)'
                startingClass = 'Commoner'
                crestImage = 'N/A'
                crest = 'N/A'
                break;
            case 'Ignatz':
            case 'ignatz':
                name = 'Ignatz Victor'
                thumbnail = 'https://i.imgur.com/TUREZkF.png'
                hexColor = '#c6c69d'
                aliases = 'N/A'
                gender = 'Male'
                race = 'Human'
                birthday = 'March 14th'
                fodlanBirth = '14th of the Lone Moon, Imperial Year 1163'
                relatives = 'Unnamed parents, Unnamed elder brother'
                nationality = 'Leicester Alliance'
                hometown = 'Leicester Alliance'
                residence = 'Garreg Mach Monastery'
                faction = 'Golden Deer'
                occupation = 'Student at the Officers Academy'
                crest = 'N/A'
                crestImage = 'N/A'
                startingClass = 'Commoner'
                vA = 'Shougo Yano (Japanese)\nChristian Le Monte (English)'
                break;
            case 'Lysithea':
            case 'lysithea':
                name = 'Lysithea von Ordelia'
                thumbnail = 'https://i.imgur.com/EIm3Zof.png'
                hexColor = '#fefcfd'
                aliases = 'N/A'
                gender = 'Female'
                race = 'Human'
                birthday = 'February 28th'
                fodlanBirth = '28th of the Pegasus Moon, Imperial Year 1165'
                relatives = 'Count Ordelia (Father)'
                nationality = 'Leicester Alliance'
                hometown = 'County of Ordelia'
                residence = 'Garreg Mach Monastery'
                faction = 'Golden Deer'
                occupation = 'Student at the Officers Academy, Heir of House Ordelia'
                crest = 'Minor Crest of Charon, Major Crest of Gloucester'
                startingClass = 'Noble, Mage'
                crestImage = lysitheaCrest
                vA = 'Aoi Yuki (Japanese)\nJanice Roman Roku (English)'
                break;
            case 'Marianne':
            case 'marianne':
                name = 'Marianne von Edmund'
                thumbnail = 'https://i.imgur.com/OyUl9he.png'
                hexColor = '#aad0fa'
                aliases = 'N/A'
                gender = 'Female'
                race = 'Human'
                birthday = 'November 23rd'
                fodlanBirth = '23rd of the Red Wolf Moon, Imperial Year 1162'
                relatives = 'Maurice (Ancestor), Margrave Edmund (Distant Relative/Adoptive father)'
                nationality = 'Leicester Alliance'
                hometown = 'Margravate of Edmund'
                faction = 'Golden Deer'
                residence = 'Garreg Mach Monastery'
                occupation = 'Student at the Officers Academy, Heir of House Edmund'
                crest = 'Crest of the Beast'
                startingClass = 'Noble'
                crestImage = 'https://i.imgur.com/qPQz1gu.png'
                vA = 'Sawako Hata (Japanese)\nXanthe Huynh (English)'
                break;
            case 'Leonie':
            case 'leonie':
                name = 'Leonie Pinelli'
                thumbnail = 'https://i.imgur.com/yZxvJG4.png'
                hexColor = '#f17d5b'
                aliases = 'Blade Breaker II'
                gender = 'Female'
                race = 'Human'
                birthday = 'August 21st'
                fodlanBirth = '21st of the Verdant Rain Moon, Imperial Year 1160'
                relatives = 'Unnamed Father'
                nationality = 'Leicester Alliance'
                hometown = 'Sauin Village, County of Gloucester'
                faction = 'Golden Deer'
                residence = 'Garreg Mach Monastery'
                occupation = 'Student at the Officers Academy, Hunter'
                crest = 'N/A'
                crestImage = 'N/A'
                startingClass = 'Commoner'
                vA = 'Sakura Nogawa (Japanese)\nRatana (English)'
                break;
            case 'Flayn':
            case 'flayn':
            case 'cethleann':
            case 'Cethleann':
                name = 'Flayn'
                thumbnail = 'https://i.imgur.com/1PcDmnL.png'
                hexColor = '#9ae5b9'
                aliases = '||Cethleann||'
                gender = 'Female'
                race = '||Light Dragon||'
                birthday = 'July 12th'
                fodlanBirth = '12th of the Blue Sea Moon, Year ????'
                relatives = '||Sothis (Ancestor), Cichol (Seteth, Father), Indech (Uncle), Macuil (Uncle), Rhea (Aunt)||'
                crest = 'Major Crest of Cethleann'
                crestImage = 'https://i.imgur.com/0NAUtkv.png'
                nationality = '||Nabatean||'
                hometown = 'Enbarr'
                residence = 'Garreg Mach Monastery'
                faction = 'Church of Seiros, ||Four Saints||'
                occupation = 'Unofficial student at the Officers Academy'
                startingClass = 'Priest'
                vA = 'Yuko Ono (Japanese)\nDeva Marie Gregory (English)'
                break;
            case 'Seteth':
            case 'seteth':
            case 'Cichol':
            case 'cichol':
                name = 'Seteth'
                aliases = '||Cichol||'
                gender = 'Male'
                race = '||Earth Dragon||'
                birthday = 'December 27'
                fodlanBirth = '27th of the Ethereal Moon, Year ????'
                relatives = 'Flayn ||(Cethleann, Daughter), Macuil (Brother), Indech (Brother), Rhea (Seiros, Sister), Sothis (Mother)||'
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
            case 'Cyril':
            case 'cyril':
                name = 'Cyril'
                thumbnail = 'https://i.imgur.com/Oss58fD.png'
                hexColor = '#453d3b'
                aliases = 'N/A'
                gender = 'Male'
                race = 'Human'
                birthday = 'October 25th'
                fodlanBirth = '25th of the Wyvern Moon, Imperial Year ????'
                residence = 'Garreg Mach Monastery'
                relatives = 'Unnamed parents'
                crest = 'N/A'
                crestImage = 'N/A'
                nationality = 'Almyra'
                hometown = 'N/A'
                faction = 'Church of Seiros'
                occupation = 'Aid to Archbishop Rhea'
                startingClass = 'Commoner'
                vA = 'Kengo Kawanishi (Japanese)\nGriffin Burns (English)'
                break;
            case 'Anna':
            case 'anna':
                name = 'Anna'
                thumbnail = 'https://i.imgur.com/d2dCJxN.png'
                hexColor = '#d85e77'
                aliases = 'N/A'
                gender = 'Female'
                race = 'Human'
                birthday = 'June 9th'
                fodlanBirth = '9th of the Garland Moon, Imperial Year 1155'
                relatives = 'Ernest (ancestor), Anna (Various sisters, cousins, and extended family)'
                nationality = 'Fódlan'
                residence = 'Garreg Mach Monastery'
                occupation = 'Merchant'
                hometown = 'N/A'
                crest = 'Major Crest of Ernest'
                crestImage = 'https://i.imgur.com/BWk2BuO.png'
                faction = 'N/A'
                startingClass = 'Myrmidon (Academy Phase)/Thief (War Phase)'
                vA = 'Saori Seto (Japanese)\nKaren Strassman (English)'
                break;
            case 'Jeritza':
            case 'jeritza':
            case 'Emile':
            case 'emile':
                name = 'Jeritza von Hyrm'
                thumbnail = 'https://i.imgur.com/SSXUCCn.png'
                hexColor = '#f4dcc4'
                aliases = '||Death Knight, Emile von Bartels||'
                startingClass = '||Death Knight||'
                gender = 'Male'
                race = 'Human'
                birthday = 'March 4th'
                fodlanBirth = '4th of the Lone Moon, Imperial Year 1158'
                relatives = 'Lamine (Ancestor), ||Baron Bartels (Father)||, Unnamed Mother, ||Mercedes (Elder Half-Sister)||, Unnamed Half-Siblings'
                nationality = 'Adrestian Empire'
                hometown = 'Viscounty of Hrym'
                residence = 'Barony of Bartels (Formerly), Garreg Mach Monastery'
                faction = '||Flame Emperor Army||'
                occupation = 'Teacher at the Officers Academy, ||General of the Adrestian Empire||, Viscount of Hrym, ||Heir of House Bartels (Formerly)||'
                crest = 'Minor Crest of Lamine'
                crestImage = 'https://i.imgur.com/I7c4voa.png'
                vA = 'Atsushi Imaruoka (Japanese)\nPatrick Seitz (English)'
                break;
            case 'Hanneman':
            case 'hanneman':
                name = 'Hanneman von Essar'
                thumbnail = 'https://i.imgur.com/fCG6C12.png'
                hexColor = '#969794'
                aliases = 'Father of Crestology'
                startingClass = 'Mage'
                gender = 'Male'
                race = 'Human'
                crest = 'Minor Crest of Indech'
                birthday = 'February 8th'
                fodlanBirth = '8th of the Pegasus Moon, Imperial Year 1129'
                crestImage = 'https://i.imgur.com/ZzLhoeL.png'
                relatives = 'Unnamed Grandfather, Unnamed Father, Unnamed Younger Sister, Undefined Niece/Nephew(s), Unnamed Wife (deceased)'
                nationality = 'Adrestian Empire'
                hometown = 'Essar'
                residence = 'Garreg Mach Monastery'
                faction = 'Church of Seiros'
                occupation = 'Teacher at the Officers Academy'
                vA = 'Kenji Hamada (Japanese)\nW. T. Falke (English)'
                break;
            case 'Manuela':
            case 'manuela':
                name = 'Manuela Casagranda'
                thumbnail = 'https://i.imgur.com/af5exR9.png'
                hexColor = '#b09b80'
                aliases = 'Divine Songstress'
                birthday = 'August 3rd'
                fodlanBirth = '3rd of the Verdant Rain Moon, Imperial Year ????'
                nationality = 'Adrestian Empire'
                hometown = 'Enbarr'
                relatives = 'N/A'
                residence = 'Garreg Mach Monastery'
                faction = 'Mittelfrank Opera Company (Formerly), Church of Seiros'
                occupation = 'Teacher and Doctor at the Officers Academy, Songstress'
                gender = 'Female'
                race = 'Human'
                startingClass = 'Priest'
                vA = 'Sachiko Kojima (English)\nVeronica Taylor (English)'
                crest = 'N/A'
                crestImage = 'N/A'
                break;
            case 'Gilbert':
            case 'gilbert':
            case 'Gustave':
            case 'gustave':
                name = 'Gilbert Pronislav'
                thumbnail = 'https://i.imgur.com/wyHkiIQ.png'
                hexColor = '#f7a77e'
                aliases = 'Gustave Eddie Dominic'
                birthday = 'January 26th'
                gender = 'Male'
                race = 'Human'
                fodlanBirth = '26th of the Guardian Moon, Imperial Year 1124'
                relatives = 'Annette (daughter), unnamed wife, Dominic (Ancestor), Baron Dominic (Younger Brother)'
                residence = 'Garreg Mach Monastery'
                faction = 'Knights of Seiros'
                nationality = 'Holy Kingdom of Faerghus'
                hometown = 'Barony of Dominic, Fhirdiad'
                startingClass = 'Fortress Knight'
                occupation = 'Teacher at the Officers Academy, One of the Knights of Seiros, Royal Knight (Formerly), Baron Dominic (Formerly)'
                crest = 'N/A'
                crestImage = 'N/A'
                vA = 'Hiriomichi Kogami (Japanese)\nDoug Stone (English)'
                break;
            case 'Alois':
            case 'alois':
                name = 'Alois Rangeld'
                thumbnail = 'https://i.imgur.com/Mz2eAuu.png'
                hexColor = '#857a67'
                gender = 'Male'
                race = 'Human'
                aliases = 'N/A'
                birthday = 'December 1st'
                fodlanBirth = '1st of the Ethereal Moon, Imperial Year 1135'
                relatives = 'Unnamed parents, Unnamed wife, Unnamed daughter'
                nationality = 'N/A'
                hometown = 'N/A'
                residence = 'Garreg Mach Monastery'
                faction = 'Knights of Seiros'
                occupation = 'Teacher at the Officers Academy, One of the Knights of Seiros'
                startingClass = 'Warrior'
                vA = 'Manabu Sakamaki (Japanese)\nRaymond K. Essel (English)'
                crest = 'N/A'
                crestImage = 'N/A'
                break;
            case 'Catherine':
            case 'catherine':
            case 'Cassandra':
            case 'cassandra':
                name = 'Cassandra Rubens Charon'
                thumbnail = 'https://i.imgur.com/7mK0y1K.png'
                hexColor = '#f8ebc9'
                aliases = 'Thunder Catherine, Thunderstrike Cassandra'
                faction = 'Knights of Seiros'
                gender = 'Female'
                race = 'Human'
                crest = 'Major Crest of Charon'
                birthday = 'September 15th'
                fodlanBirth = '15th of the Horsebow Moon, Imperial Year 1152'
                relatives = 'Charon (Ancestor), Count Charon (Father), Unnamed Brothers and Sisters'
                startingClass = 'Swordmaster'
                nationality = 'Holy Kingdom of Faerghus'
                hometown = 'County of Charon'
                residence = 'Garreg Mach Monastery'
                faction = 'Knights of Seiros'
                occupation = 'Teacher at the Officers Academy, One of the Holy Knights of Seiros'
                vA = 'Chie Matsuura (Japanese)\nLaura Post (English)'
                crestImage = 'https://i.imgur.com/2oGFZnj.png'
                break;
            case 'Shamir':
            case 'shamir':
                name = 'Shamir Nevrand'
                thumbnail = 'https://i.imgur.com/gK1Iz5F.png'
                hexColor = '#57587e'
                gender = 'Female'
                race = 'Human'
                birthday = 'March 27th'
                fodlanBirth = '27th of the Lone Moon, Imperial Year 1155'
                relatives = 'Unnamed lover'
                nationality = 'Dagda'
                hometown = 'Dagda'
                residence = 'Garreg Mach Monastery'
                faction = 'Knights of Seiros'
                aliases = 'Distant Archer'
                occupation = 'Teacher at the Officers Academy, One of the Knights of Seiros, Mercenary (Formerly)'
                vA = 'Yurina Watanabe (Japanese)\nAllegra Clark (English)'
                crest = 'N/A'
                startingClass = 'Sniper'
                crestImage = 'N/A'
                break;
            case 'jeralt':
            case 'Jeralt':
                name = 'Jeralt Reus Eisner'
                thumbnail = 'https://i.imgur.com/d4f9iBI.png'
                hexColor = '#d2bc93'
                aliases = 'Blade Breaker'
                relatives = 'Unnamed Wife (deceased), Byleth (Child)'
                birthday = 'N/A'
                fodlanBirth = 'N/A'
                gender = 'Male'
                race = 'Human'
                nationality = 'N/A'
                residence = 'Garreg Mach Monastery'
                hometown = 'N/A'
                faction = 'Knights of Seiros'
                startingClass = 'Paladin'
                occupation = 'Leader of a Mercenary Company, One of the Knights of Seiros, Captain of the Knights of Seiros (Formerly), Soldier of the Holy Kingdom of Faerghus (Formerly)'
                crest = 'Major Crest of Seiros'
                crestImage = 'https://i.imgur.com/PeVchzu.png'
                vA = 'Akio Ōtsuka (Japanese)\nDavid Lodge (English)'
                break;
            case 'rhea':
            case 'Rhea':
            case 'seiros':
            case 'Seiros':
                name = 'Rhea'
                thumbnail = 'https://i.imgur.com/HdH739v.png'
                hexColor = '#bbf7d0'
                aliases = '||Seiros, Immaculate One||'
                gender = 'Female'
                race = '||Sky Dragon||'
                relatives = '||Sothis (Mother), Cichol (Seteth, Brother), Indech (Brother), Macuil (Brother), Cethleann (Flayn, Niece)||'
                birthday = 'January 11th'
                fodlanBirth = '11th of the Guardian Moon, Imperial Year ????'
                nationality = '||Nabatean||'
                hometown = '||Zanado||'
                residence = 'Garreg Mach Monastery'
                faction = 'Church of Seiros'
                startingClass = 'Archbishop'
                vA = 'Kikuko Inoue (Japanese)\nCherami Leigh (English)'
                occupation = 'Archbishop and supreme leader of the Church of Seiros'
                crest = 'Major Crest of Seiros'
                crestImage = 'https://i.imgur.com/PeVchzu.png'
                break;
            // case 'yuri':
            // case 'Yuri':
            // case 'hapi':
            // case 'Hapi':
            // case 'Balthus':
            // case 'balthus':
            // case 'constance':
            // case 'Constance':
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