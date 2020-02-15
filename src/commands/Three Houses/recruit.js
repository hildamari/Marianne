const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Replies with information about specific units\' recruitments',
            extendedHelp: 'This command contains spoilers for Fire Emblem Three Houses!',
            usage: '<unit:string>'
        });

        this.customizeResponse('unit',
            'You must enter a valid unit!');
    }

    verifyUnit(unit) {
        const unitRecruitEmbed = new MessageEmbed()

        let name = '', startingClass = '', fromChapter, recruitment = '', hexColor = "", thumbnail = "";

        switch(unit) {
            case 'Edelgard':
            case 'edelgard':
                name = 'Edelgard'
                thumbnail = 'https://i.imgur.com/HQ3yEk4.png'
                hexColor = '#fefff4'
                startingClass = "Noble"
                fromChapter = "-"
                recruitment = "Cannot be recruited \n(Leaves your party if you choose to ||ally with the church|| during Chapter 11)"
                break;
            case 'Hubert':
            case 'hubert':
                name = 'Hubert'
                thumbnail = 'https://i.imgur.com/KCc36C6.png'
                hexColor = '#343d3e'
                startingClass = "Noble"
                fromChapter = "-"
                recruitment = "Cannot be recruited \n(Leaves your party if you choose to ||ally with the church|| during Chapter 11)"
                break;
            case 'Ferdinand':
            case 'ferdinand':
                name = 'Ferdinand von Aegir'
                thumbnail = 'https://i.imgur.com/iKtyabp.png'
                hexColor = '#feb472'
                startingClass = "Noble"
                fromChapter = 2
                recruitment = "Need 10 Dexterity and C in Riding"
                break;
            case 'Linhardt':
            case 'linhardt':
                name = 'Linhardt'
                thumbnail = 'https://i.imgur.com/X41XIXq.png'
                hexColor = '#476352'
                startingClass = "Noble"
                fromChapter = 2
                recruitment = "Need 10 Magic and C in Reason"
                break;
            case 'Caspar':
            case 'caspar':
                name = 'Caspar'
                thumbnail = 'https://i.imgur.com/mo0C51Q.png'
                hexColor = '#a6e4e2'
                startingClass = "Noble"
                fromChapter = 2
                recruitment = "Need 10 Strength and C in Brawling"
                break;
            case 'Bernadetta':
            case 'bernadetta':
                name = 'Bernadetta'
                thumbnail = 'https://i.imgur.com/xowUlBr.png'
                hexColor = '#a080a8'
                startingClass = "Noble"
                fromChapter = 2
                recruitment = "Need 20 Strength and C in Bow"
                break;
            case 'Dorothea':
            case 'dorothea':
                name = 'Dorothea'
                thumbnail = 'https://i.imgur.com/S3FNa04.png'
                hexColor = '#7b585b'
                startingClass = "Commoner"
                fromChapter = 2
                recruitment = "Need 25 Charm and B in Authority"
                break;
            case 'Petra':
            case 'petra':
                name = 'Petra'
                thumbnail = 'https://i.imgur.com/ZfvRIX6.png'
                hexColor = '#824364'
                startingClass = "Commoner"
                fromChapter = 2
                recruitment = "Need 10 Dexterity and C in Riding"
                break;
            case 'Dimitri':
            case 'dimitri':
                name = 'Dimitri'
                thumbnail = 'https://i.imgur.com/Ddl1C8a.png'
                hexColor = '#fcfba8'
                startingClass = "Noble"
                fromChapter = "-"
                recruitment = "Cannot be recruited"
                break;
            case 'Dedue':
            case 'dedue':
                name = 'Dedue'
                thumbnail = 'https://i.imgur.com/quIqslt.png'
                hexColor = '#e8e9e2'
                startingClass = "Commoner"
                fromChapter = "-"
                recruitment = "Cannot be recruited"
                break;
            case 'Felix':
            case 'felix':
                name = 'Felix'
                thumbnail = 'https://i.imgur.com/YJcGEiK.png'
                hexColor = '#403f64'
                startingClass = "Noble"
                fromChapter = 2
                recruitment = "Need 15 Speed and B+ in Swords"
                break;
            case 'Ashe':
            case 'ashe':
                name = 'Ashe'
                thumbnail = 'https://i.imgur.com/L4iJ8Ug.png'
                hexColor = '#b5bdc6'
                startingClass = "Commoner"
                fromChapter = 2
                recruitment = "Need 15 Charm and C in Lance \n(Unless Edelgard or Dimitri are present, leaves your party once Part 2 begins. Can be recruited again by defeating him in Chapter 15.)"
                break;
            case 'Sylvain':
            case 'sylvain':
                name = 'Sylvain'
                thumbnail = 'https://i.imgur.com/77T2SRt.png'
                hexColor = '#e06c53'
                startingClass = "Noble"
                fromChapter = 2
                recruitment = "Need 25 Charm and C in Reason \n(If protagonist is female, automatically joins)"
                break;
            case 'Mercedes':
            case 'mercedes':
                name = 'Mercedes'
                thumbnail = 'https://i.imgur.com/y1BWI7T.png'
                hexColor = '#f4dcc4'
                startingClass = "Commoner"
                fromChapter = 2
                recruitment = "Need 15 Magic and C in Bow"
                break;
            case 'Annette':
            case 'annette':
                name = 'Annette'
                thumbnail = 'https://i.imgur.com/lnE7TRE.png'
                hexColor = '#f6a67d'
                startingClass = "Noble"
                fromChapter = 2
                recruitment = "Need 10 Magic and B in Faith"
                break;
            case 'Ingrid':
            case 'ingrid':
                name = 'Ingrid'
                thumbnail = 'https://i.imgur.com/t8fCo54.png'
                hexColor = '#f8e5a0'
                startingClass = "Noble"
                fromChapter = 2
                recruitment = "Need 15 Dexterity and D in Flying"
                break;
            case 'Claude':
            case 'claude':
                name = 'Claude'
                thumbnail = 'https://i.imgur.com/A4i8b9Z.png'
                hexColor = '#4a4240'
                startingClass = "Noble"
                fromChapter = "-"
                recruitment = "Cannot be recruited"
                break;
            case 'Hilda':
            case 'hilda':
                name = 'Hilda'
                thumbnail = 'https://i.imgur.com/zoScHRC.png'
                hexColor = '#fcafb7'
                startingClass = "Noble"
                fromChapter = 2
                recruitment = "Need 30 Charm and C in Axe \n(If leading the Black Eagles, cannot be recruited until Chapter 12, after ||allying with the church||)"
                break;
            case 'Lorenz':
            case 'lorenz':
                name = 'Lorenz'
                thumbnail = 'https://i.imgur.com/uYopDET.png'
                hexColor = '#7373ac'
                startingClass = "Noble"
                fromChapter = 2
                recruitment = "Need 20 Charm and C in Reason \n(Unless Edelgard or Claude are present, leaves your party once Part 2 begins. Can be recruited again by defeating him in Chapter 16.)"
                break;
            case 'Raphael':
            case 'raphael':
                name = 'Raphael'
                thumbnail = 'https://i.imgur.com/MB3wRvI.png'
                hexColor = '#f0d9a1'
                startingClass = "Commoner"
                fromChapter = 2
                recruitment = "Need 20 Strength and C in Heavy Armor"
                break;
            case 'Ignatz':
            case 'ignatz':
                name = 'Ignatz'
                thumbnail = 'https://i.imgur.com/TUREZkF.png'
                hexColor = '#c6c69d'
                startingClass = "Commoner"
                fromChapter = 2
                recruitment = "Need 10 Dexterity and B in Authority"
                break;
            case 'Lysithea':
            case 'lysithea':
                name = 'Lysithea'
                thumbnail = 'https://i.imgur.com/EIm3Zof.png'
                hexColor = '#fefcfd'
                startingClass = "Noble"
                fromChapter = 2
                recruitment = "Need 15 Magic and B in Faith \n(If Edelgard is present, can also be recruited by defeating her in Chapter 14.)"
                break;
            case 'Marianne':
            case 'marianne':
                name = 'Marianne'
                thumbnail = 'https://i.imgur.com/OyUl9he.png'
                hexColor = '#aad0fa'
                startingClass = "Noble"
                fromChapter = 2
                recruitment = "Need 10 Magic and C in Riding"
                break;
            case 'Leonie':
            case 'leonie':
                name = 'Leonie'
                thumbnail = 'https://i.imgur.com/yZxvJG4.png'
                hexColor = '#f17d5b'
                startingClass = "Commoner"
                fromChapter = 2
                recruitment = "Need 15 Strength and C in Lance"
                break;
            case 'Flayn':
            case 'flayn':
            case 'cethleann':
            case 'Cethleann':
                name = 'Flayn'
                thumbnail = 'https://i.imgur.com/1PcDmnL.png'
                hexColor = '#9ae5b9'
                startingClass = "Priest"
                fromChapter = 7
                recruitment = "Joins automatically \n(Leaves your party if you choose to ||oppose the church|| during Chapter 11)"
                break;
            case 'Seteth':
            case 'seteth':
            case 'Cichol':
            case 'cichol':
                name = 'Seteth'
                thumbnail = 'https://i.imgur.com/s35oLUZ.png'
                hexColor = '#71bea4'
                startingClass = "Wyvern Rider"
                fromChapter = 12
                recruitment = "Joins automatically \n(Leaves your party if you choose to ||oppose the church|| during Chapter 11)"
                break;
            case 'Cyril':
            case 'cyril':
                name = 'Cyril'
                thumbnail = 'https://i.imgur.com/Oss58fD.png'
                hexColor = '#71bea4'
                startingClass = "Commoner"
                fromChapter = 5
                recruitment = "Need to be Level 10 \n(If leading the Black Eagles, cannot be recruited until Chapter 12, after ||allying with the church–after that, he joins automatically||)"
                break;
            case 'Anna':
            case 'anna':
                name = 'Anna'
                thumbnail = 'https://i.imgur.com/d2dCJxN.png'
                hexColor = '#d85e77'
                startingClass = "Myrmidon"
                fromChapter = 3
                recruitment = "Talk to her at the monastery"
                break;
            case 'Jeritza':
            case 'jeritza':
            case 'Emile':
            case 'emile':
                name = 'Jeritza'
                thumbnail = 'https://i.imgur.com/SSXUCCn.png'
                hexColor = '#f4dcc4'
                startingClass = "||Death Knight||"
                fromChapter = 13
                recruitment = "Crimson Flower only. Joins automatically"
                break;
            case 'Hanneman':
            case 'hanneman':
                name = 'Hanneman'
                thumbnail = 'https://i.imgur.com/fCG6C12.png'
                hexColor = '#969794'
                startingClass = "Mage"
                fromChapter = 8
                recruitment = "Need to be Level 15"
                break;
            case 'Manuela':
            case 'manuela':
                name = 'Manuela'
                thumbnail = 'https://i.imgur.com/af5exR9.png'
                hexColor = '#b09b80'
                startingClass = "Priest"
                fromChapter = 8
                recruitment = "Need to be Level 15"
                break;
            case 'Gilbert':
            case 'gilbert':
            case 'Gustave':
            case 'gustave':
                name = 'Gilbert'
                thumbnail = 'https://i.imgur.com/wyHkiIQ.png'
                hexColor = '#f7a77e'
                startingClass = "Fortress Knight"
                fromChapter = 13
                recruitment = "Automatically from Turn 3 (Blue Lions only)"
                break;
            case 'Alois':
            case 'alois':
                name = 'Alois'
                thumbnail = 'https://i.imgur.com/Mz2eAuu.png'
                hexColor = '#857a67'
                startingClass = "Warrior"
                fromChapter = 11
                recruitment = "Need to be Level 15"
                break;
            case 'Catherine':
            case 'catherine':
            case 'Cassandra':
            case 'cassandra':
                name = 'Catherine'
                thumbnail = 'https://i.imgur.com/7mK0y1K.png'
                hexColor = '#f8ebc9'
                startingClass = "Swordmaster"
                fromChapter = 14
                recruitment = "Need to be Level 15 \n(If leading the Black Eagles, cannot be recruited until Chapter 12, after ||allying with the church–after that, she joins automatically||)"
                break;
            case 'Shamir':
            case 'shamir':
                name = 'Shamir'
                thumbnail = 'https://i.imgur.com/gK1Iz5F.png'
                hexColor = '#57587e'
                startingClass = "Sniper"
                fromChapter = 14
                recruitment = "Need to be Level 15 \n(If leading the Black Eagles, automatically joins during Chapter 12 if you ||ally with the church|| during Chapter 11)"
                break;
            case 'yuri':
            case 'Yuri':
                name = 'Yuri'
                thumbnail = 'https://i.imgur.com/Paxgdl2.png'
                hexColor = '#afacdb'
                startingClass = "Commoner"
                fromChapter = 2
                recruitment = "Clear Chapter 6 of Side Story"
                break;
            case 'hapi':
            case 'Hapi':
                name = 'Hapi'
                thumbnail = 'https://i.imgur.com/r5qfcC9.png'
                hexColor = '#dc5f65'
                startingClass = "Commoner"
                fromChapter = 2
                recruitment = "Clear Chapter 5 of Side Story"
                break;
            case 'Balthus':
            case 'balthus':
                name = 'Balthus'
                thumbnail = 'https://i.imgur.com/AUfVNC2.png'
                hexColor = '#5f5c6f'
                startingClass = "Noble"
                fromChapter = 2
                recruitment = "Clear Chapter 4 of Side Story"
                break;
            case 'constance':
            case 'Constance':
                name = 'Constance'
                thumbnail = 'https://i.imgur.com/n7XHQLu.png'
                hexColor = '#fffebb'
                startingClass = "Noble"
                fromChapter = 2
                recruitment = "Clear Chapter 2 of Side Story"
                break;
            default:
                name = "N/A"
        }
    
              if(name == "N/A") {
                  return "Not a playable unit"
              } else {
                    unitRecruitEmbed
                        .setColor(hexColor)
                        .setAuthor(name)
                        .setDescription("Character Recruitment")
                        .setThumbnail(thumbnail)
                        .addField("Starting Class", startingClass, true)
                        .addField("From Chapter", fromChapter, true)
                        .addField("Recruitment", recruitment)
                    return unitRecruitEmbed
                }
    }

    async run(msg, [unit]) {
        let result = this.verifyUnit(unit);
        msg.send(result);
    }

};