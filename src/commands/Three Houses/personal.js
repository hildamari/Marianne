const { Command } = require('klasa');
const { MessageEmbed, MessageAttachment } = require('discord.js');
const { registerFont, createCanvas, loadImage } = require('canvas');
// const { Canvas } = require("canvas-constructor");
const { resolve, join } = require("path");

// Canvas.registerFont(resolve(join(__dirname, "../../../assets/fonts/GaramondPremrPro.ttf")), "GaramondPremrPro");

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Replies with information about specific units\' personal skills',
            extendedHelp: 'This command contains spoilers for Fire Emblem Three Houses!',
            usage: '<unit:string>'
        });

        this.customizeResponse('unit',
            'You must enter a valid unit!');
    }

    verifyUnit(unit) {
        const unitPersonalEmbed = new MessageEmbed()

        let name = '', thumbnail = "", personalSkillName = '', personalSkillDesc = '', hexColor = '', personalSkillNameTS = '', personalSkillDescTS = ''

        switch(unit) {
            case 'BylethM':
            case 'bylethm':
            case 'Bylad':
            case 'bylad':
                name = 'Byleth'
                thumbnail = 'https://i.imgur.com/6WmePDH.png'
                hexColor = '#4a7588'
                personalSkillName = 'Professor\'s Guidance'
                personalSkillDesc = '+20% Experience Gained to user and adjacent ally'
                personalSkillNameTS = 'Professor\'s Guidance+'
                personalSkillDescTS = '+20% Experience Gained to user and adjacent ally, +2 Damage Dealt'
                break;
            case 'BylethF':
            case 'bylethf':
            case 'bylass':
            case 'Bylass':
                name = 'Byleth'
                thumbnail = 'https://i.imgur.com/ZCGC8Jk.png'
                hexColor = '#4a7588'
                personalSkillName = 'Professor\'s Guidance'
                personalSkillDesc = '+20% Experience Gained to user and adjacent ally'
                personalSkillNameTS = 'Professor\'s Guidance+'
                personalSkillDescTS = '+20% Experience Gained to user and adjacent ally, +2 Damage Dealt'
                break;
            case 'Byleth':
            case 'byleth':
                name = 'Byleth'
                thumbnail = 'https://i.imgur.com/57L1pPh.png'
                hexColor = '#4a7588'
                personalSkillName = 'Professor\'s Guidance'
                personalSkillDesc = '+20% Experience Gained to user and adjacent ally'
                personalSkillNameTS = 'Professor\'s Guidance+'
                personalSkillDescTS = '+20% Experience Gained to user and adjacent ally, +2 Damage Dealt'
                break;
            case 'Edelgard':
            case 'edelgard':
                name = 'Edelgard'
                thumbnail = 'https://i.imgur.com/HQ3yEk4.png'
                hexColor = '#fefff4'
                personalSkillName = 'Imperial Lineage'
                personalSkillDesc = '+20% Experience Gained'
                personalSkillNameTS = 'Imperial Lineage+'
                personalSkillDescTS = '+20% Experience Gained, If unit takes no action except Wait, grants Res +4 for 1 turn'
                break;
            case 'Hubert':
            case 'hubert':
                name = 'Hubert'
                thumbnail = 'https://i.imgur.com/KCc36C6.png'
                hexColor = '#343d3e'
                personalSkillName = 'Officer Duty'
                personalSkillDesc = 'Boosts Gambit Might by 5'
                break;
            case 'Ferdinand':
            case 'ferdinand':
                name = 'Ferdinand von Aegir'
                thumbnail = 'https://i.imgur.com/iKtyabp.png'
                hexColor = '#feb472'
                personalSkillName = 'Confidence'
                personalSkillDesc = 'When HP is full, unit gains +15 Hit and Avoid'
                break;
            case 'Linhardt':
            case 'linhardt':
                name = 'Linhardt'
                thumbnail = 'https://i.imgur.com/X41XIXq.png'
                hexColor = '#476352'
                personalSkillName = 'Catnap'
                personalSkillDesc = 'If unit waits without performing an action, restores 10% HP'
                break;
            case 'Caspar':
            case 'caspar':
                name = 'Caspar'
                thumbnail = 'https://i.imgur.com/mo0C51Q.png'
                hexColor = '#a6e4e2'
                personalSkillName = 'Born Fighter'
                personalSkillDesc = 'Adjacent foes receive Avoid -10 during combat'
                break;
            case 'Bernadetta':
            case 'bernadetta':
                name = 'Bernadetta'
                thumbnail = 'https://i.imgur.com/xowUlBr.png'
                hexColor = '#a080a8'
                personalSkillName = 'Persecution Complex'
                personalSkillDesc = 'When HP is not full, unit gains +5 Damage'
                break;
            case 'Dorothea':
            case 'dorothea':
                name = 'Dorothea'
                thumbnail = 'https://i.imgur.com/S3FNa04.png'
                hexColor = '#7b585b'
                personalSkillName = 'Songstress'
                personalSkillDesc = 'At the start of each turn, restores adjacent allies’ HP by 10%'
                break;
            case 'Petra':
            case 'petra':
                name = 'Petra'
                thumbnail = 'https://i.imgur.com/ZfvRIX6.png'
                hexColor = '#824364'
                personalSkillName = 'Hunter\'s Boon'
                personalSkillDesc = 'When foe has less than 50% HP, Critical rate +20'
                break;
            case 'Dimitri':
            case 'dimitri':
                name = 'Dimitri'
                thumbnail = 'https://i.imgur.com/Ddl1C8a.png'
                hexColor = '#fcfba8'
                personalSkillName = 'Royal Lineage'
                personalSkillDesc = '+20% Experience Gained'
                personalSkillNameTS = 'Royal Lineage+'
                personalSkillDescTS = '+20% Experience Gained, Grants Avo +20 while unit is at full HP'
                break;
            case 'Dedue':
            case 'dedue':
                name = 'Dedue'
                thumbnail = 'https://i.imgur.com/quIqslt.png'
                hexColor = '#e8e9e2'
                personalSkillName = 'Staunch Shield'
                personalSkillDesc = 'If user waits without acting, Defense +4 for one turn'
                break;
            case 'Felix':
            case 'felix':
                name = 'Felix'
                thumbnail = 'https://i.imgur.com/YJcGEiK.png'
                hexColor = '#403f64'
                personalSkillName = 'Lone Wolf'
                personalSkillDesc = 'When a Battalion is not deployed or when battalion health is zero, damage dealt +5'
                break;
            case 'Ashe':
            case 'ashe':
                name = 'Ashe'
                thumbnail = 'https://i.imgur.com/L4iJ8Ug.png'
                hexColor = '#b5bdc6'
                personalSkillName = 'Lockpick'
                personalSkillDesc = 'Unit can open locks and chests without keys'
                break;
            case 'Sylvain':
            case 'sylvain':
                name = 'Sylvain'
                thumbnail = 'https://i.imgur.com/77T2SRt.png'
                hexColor = '#e06c53'
                personalSkillName = 'Philanderer'
                personalSkillDesc = 'When adjacent to a female ally, damage dealt to foe +2, damage received from foe -2'
                break;
            case 'Mercedes':
            case 'mercedes':
                name = 'Mercedes'
                thumbnail = 'https://i.imgur.com/y1BWI7T.png'
                hexColor = '#f4dcc4'
                personalSkillName = 'Live to Serve'
                personalSkillDesc = 'When healing allies with White Magic, unit is healed by the same amount'
                break;
            case 'Annette':
            case 'annette':
                name = 'Annette'
                thumbnail = 'https://i.imgur.com/lnE7TRE.png'
                hexColor = '#f6a67d'
                personalSkillName = 'Perseverance'
                personalSkillDesc = 'When Rally command is used on ally, grants Strength +4'
                break;
            case 'Ingrid':
            case 'ingrid':
                name = 'Ingrid'
                thumbnail = 'https://i.imgur.com/t8fCo54.png'
                hexColor = '#f8e5a0'
                personalSkillName = 'Lady Knight'
                personalSkillDesc = 'When using a Gambit, Might +3 and Hit Rate +5'
                break;
            case 'Claude':
            case 'claude':
                name = 'Claude'
                thumbnail = 'https://i.imgur.com/A4i8b9Z.png'
                hexColor = '#4a4240'
                personalSkillName = 'Leicester Lineage'
                personalSkillDesc = '+20% Experience Gained'
                personalSkillNameTS = 'Leicester Lineage+'
                personalSkillDescTS = '+20% Experience Gained, grants unit effects of Pass'
                break;
            case 'Hilda':
            case 'hilda':
                name = 'Hilda'
                thumbnail = 'https://i.imgur.com/zoScHRC.png'
                hexColor = '#fcafb7'
                personalSkillName = 'Advocate'
                personalSkillDesc = 'When an adjacent male ally enters battle, ally’s damage dealt +3'
                break;
            case 'Lorenz':
            case 'lorenz':
                name = 'Lorenz'
                thumbnail = 'https://i.imgur.com/uYopDET.png'
                hexColor = '#7373ac'
                personalSkillName = 'Distinguished House'
                personalSkillDesc = 'When a battalion is deployed, damage dealt +2'
                break;
            case 'Raphael':
            case 'raphael':
                name = 'Raphael'
                thumbnail = 'https://i.imgur.com/MB3wRvI.png'
                hexColor = '#f0d9a1'
                personalSkillName = 'Goody Basket'
                personalSkillDesc = 'At the start of a turn, unit has Luck% chance of regaining 10% of HP'
                break;
            case 'Ignatz':
            case 'ignatz':
                name = 'Ignatz'
                thumbnail = 'https://i.imgur.com/TUREZkF.png'
                hexColor = '#c6c69d'
                personalSkillName = 'Watchful Eye'
                personalSkillDesc = 'Hit rate +20'
                break;
            case 'Lysithea':
            case 'lysithea':
                name = 'Lysithea'
                thumbnail = 'https://i.imgur.com/EIm3Zof.png'
                hexColor = '#fefcfd'
                personalSkillName = 'Mastermind'
                personalSkillDesc = 'Unit gains 2x skill EXP from combat'
                break;
            case 'Marianne':
            case 'marianne':
                name = 'Marianne'
                thumbnail = 'https://i.imgur.com/OyUl9he.png'
                hexColor = '#aad0fa'
                personalSkillName = 'Animal Friend'
                personalSkillDesc = 'When adjacent to a horseback or flying ally, restores 20% HP at the start of the turn'
                break;
            case 'Leonie':
            case 'leonie':
                name = 'Leonie'
                thumbnail = 'https://i.imgur.com/yZxvJG4.png'
                hexColor = '#f17d5b'
                personalSkillName = 'Rivalry'
                personalSkillDesc = 'When adjacent to a male ally, damage dealt to foe +2, damage received from foe -2'
                break;
            case 'Flayn':
            case 'flayn':
            case 'cethleann':
            case 'Cethleann':
                name = 'Flayn'
                thumbnail = 'https://i.imgur.com/1PcDmnL.png'
                hexColor = '#9ae5b9'
                personalSkillName = 'Lily\'s Poise'
                personalSkillDesc = 'Adjacent allies take 3 less damage during combat'
                break;
            case 'Seteth':
            case 'seteth':
            case 'Cichol':
            case 'cichol':
                name = 'Seteth'
                thumbnail = 'https://i.imgur.com/s35oLUZ.png'
                hexColor = '#71bea4'
                personalSkillName = 'Guardian'
                personalSkillDesc = 'Adjacent female allies deal 3 extra damage during combat'
                break;
            case 'Cyril':
            case 'cyril':
                name = 'Cyril'
                thumbnail = 'https://i.imgur.com/Oss58fD.png'
                hexColor = '#71bea4'
                personalSkillName = 'Aptitude'
                personalSkillDesc = 'Makes each stat 20% more likely to increase on level up'
                break;
            case 'Anna':
            case 'anna':
                name = 'Anna'
                thumbnail = 'https://i.imgur.com/d2dCJxN.png'
                hexColor = '#d85e77'
                personalSkillName = 'Business Prosperity'
                personalSkillDesc = 'Grants Lck +5'
                break;
            case 'Jeritza':
            case 'jeritza':
            case 'Emile':
            case 'emile':
                name = 'Jeritza'
                thumbnail = 'https://i.imgur.com/SSXUCCn.png'
                hexColor = '#f4dcc4'
                personalSkillName = 'Murderous Intent'
                personalSkillDesc = 'If unit initiates combat, grants Hit +20 during combat'
                break;
            case 'Hanneman':
            case 'hanneman':
                name = 'Hanneman'
                thumbnail = 'https://i.imgur.com/fCG6C12.png'
                hexColor = '#969794'
                personalSkillName = 'Crest Scholar'
                personalSkillDesc = 'Use Rally to grant Mag +4 to an ally'
                break;
            case 'Manuela':
            case 'manuela':
                name = 'Manuela'
                thumbnail = 'https://i.imgur.com/af5exR9.png'
                hexColor = '#b09b80'
                personalSkillName = 'Infirmary Master'
                personalSkillDesc = 'Adjacent allies gain Crit Avoid +10 during combat'
                break;
            case 'Gilbert':
            case 'gilbert':
            case 'Gustave':
            case 'gustave':
                name = 'Gilbert'
                thumbnail = 'https://i.imgur.com/wyHkiIQ.png'
                hexColor = '#f7a77e'
                personalSkillName = 'Veteran Knight'
                personalSkillDesc = 'Unit takes 2 less damage while in formation with a battalion'
                break;
            case 'Alois':
            case 'alois':
                name = 'Alois'
                thumbnail = 'https://i.imgur.com/Mz2eAuu.png'
                hexColor = '#857a67'
                personalSkillName = 'Compassion'
                personalSkillDesc = 'Use Rally to grant Lck +8 to an ally'
                break;
            case 'Catherine':
            case 'catherine':
            case 'Cassandra':
            case 'cassandra':
                name = 'Catherine'
                thumbnail = 'https://i.imgur.com/7mK0y1K.png'
                hexColor = '#f8ebc9'
                personalSkillName = 'Fighting Spirit'
                personalSkillDesc = 'Unit takes 5 less damage when no battalion is assigned or when battalion endurance is 0'
                break;
            case 'Shamir':
            case 'shamir':
                name = 'Shamir'
                thumbnail = 'https://i.imgur.com/gK1Iz5F.png'
                hexColor = '#57587e'
                personalSkillName = 'Survival Instinct'
                personalSkillDesc = '	If unit initiates combat and defeats foe, grants Str/Mag/Dex/Spd +4 for one turn'
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
              unitPersonalEmbed
                  .setColor(hexColor)
                  .setAuthor(name)
                  .setDescription("Personal Skills")
                  .setThumbnail(thumbnail)
                  .addField("Personal Skill", personalSkillName, true)
                  .addField("Skill Description", personalSkillDesc, true)
                  if(name == "Byleth") {
                      unitPersonalEmbed.addBlankField()
                      unitPersonalEmbed.addField("Personal Skill (Chapter 10)", personalSkillNameTS, true)
                      unitPersonalEmbed.addField("Skill Description", personalSkillDescTS, true)
                  }
                  if(name == "Edelgard" || name == "Dimitri" || name == "Claude") {
                    unitPersonalEmbed.addBlankField()
                    unitPersonalEmbed.addField("Personal Skill (post-timeskip)", personalSkillNameTS, true)
                    unitPersonalEmbed.addField("Skill Description", personalSkillDescTS, true)
                  }
              return unitPersonalEmbed
          }
    
    }

    async run(msg, [unit]) {
        let result = this.verifyUnit(unit);
        msg.send(result);
    }
};