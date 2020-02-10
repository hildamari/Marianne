const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['skilllevel'],
            description: 'Replies with information about specific units\' proficiencies',
            extendedHelp: 'This command contains spoilers for Fire Emblem Three Houses!',
            usage: '<unit:string>'
        });

        this.customizeResponse('unit',
            'You must enter a valid unit!');
    }

    verifyUnit(unit) {
        const unitProfEmbed = new MessageEmbed()

        let name = '', thumbnail = '', hexColor = '', proficientIn = [], weakTo = [], buddingTalent, unlock = '', unlockDescription = '';
        const sword = this.client.emojis.find(emoji => emoji.name === "sword");
        const axe = this.client.emojis.find(emoji => emoji.name === "axe");
        const brawling = this.client.emojis.find(emoji => emoji.name === "brawling");
        const lance = this.client.emojis.find(emoji => emoji.name === "lance");
        const bow = this.client.emojis.find(emoji => emoji.name === "bow");
        const reason = this.client.emojis.find(emoji => emoji.name === "reason");
        const faith = this.client.emojis.find(emoji => emoji.name === "faith");
        const buddingTalentEmote = this.client.emojis.find(emoji => emoji.name === "buddingtalent");
        const authority = this.client.emojis.find(emoji => emoji.name === "authority");
        const heavyArmor = this.client.emojis.find(emoji => emoji.name === "heavyarmor");
        const riding = this.client.emojis.find(emoji => emoji.name === "riding");
        const flying = this.client.emojis.find(emoji => emoji.name === "flying");
        const profUp = this.client.emojis.find(emoji => emoji.name === "professorup");
        const profDown = this.client.emojis.find(emoji => emoji.name === "professordown");

        switch(unit) {
            case 'BylethM':
            case 'bylethm':
            case 'bylad':
            case 'Bylad':
                name = 'Byleth'
                thumbnail = 'https://i.imgur.com/6WmePDH.png'
                hexColor = '#4a7588'
                proficientIn = [sword, brawling, authority]
                weakTo = ["Nothing"]
                buddingTalent = faith
                unlock = 'White Magic Avoid +20'
                unlockDescription = 'Grants Avo +20 when using white magic.'
                break;
            case 'BylethF':
            case 'bylethf': 
            case 'bylass':
            case 'Bylass':
                name = 'Byleth'
                thumbnail = 'https://i.imgur.com/ZCGC8Jk.png'
                hexColor = '#4a7588'
                proficientIn = [sword, brawling, authority]
                weakTo = ["Nothing"]
                buddingTalent = faith
                unlock = 'White Magic Avoid +20'
                unlockDescription = 'Grants Avo +20 when using white magic.'
                break;
            case 'Byleth':
            case 'byleth':
                name = 'Byleth'
                thumbnail = 'https://i.imgur.com/57L1pPh.png'
                hexColor = '#4a7588'
                proficientIn = [sword, brawling, authority]
                weakTo = ["Nothing"]
                buddingTalent = faith
                unlock = 'White Magic Avoid +20'
                unlockDescription = 'Grants Avo +20 when using white magic.'
                break;
            case 'Edelgard':
            case 'edelgard': 
                name = 'Edelgard'
                thumbnail = 'https://i.imgur.com/HQ3yEk4.png'
                hexColor = '#fefff4'
                proficientIn = [sword, axe, authority, heavyArmor]
                weakTo = [bow, faith]
                buddingTalent = reason
                unlock = 'Black Magic Crit +10'
                unlockDescription = 'Grants Crit +10 when using black magic.'
                break;
            case 'Hubert':
            case 'hubert':
                name = 'Hubert'
                thumbnail = 'https://i.imgur.com/KCc36C6.png'
                hexColor = '#343d3e'
                proficientIn = [bow, reason, authority]
                weakTo = [axe, faith]
                buddingTalent = lance
                unlock = 'Frozen Lance'
                unlockDescription = 'A magic attack. Mt increases based on unit’s Dex.'
                break;
            case 'Ferdinand':
            case 'ferdinand':
                name = 'Ferdinand von Aegir'
                thumbnail = 'https://i.imgur.com/iKtyabp.png'
                hexColor = '#feb472'
                proficientIn = [sword, lance, axe, riding]
                weakTo = ["Nothing"]
                buddingTalent = heavyArmor
                unlock = 'Seal Speed'
                unlockDescription = 'If unit damages foe during combat, foe suffers Spd -6 for 1 turn after combat.'
                break;
            case 'Linhardt':
            case 'linhardt':
                name = 'Linhardt'
                thumbnail = 'https://i.imgur.com/X41XIXq.png'
                hexColor = '#476352'
                proficientIn = [reason, faith]
                weakTo = [axe, brawling]
                buddingTalent = 'N/A'
                unlock = 'N/A'
                unlockDescription = 'N/A'
                break;
            case 'Caspar':
            case 'caspar':
                name = 'Caspar'
                thumbnail = 'https://i.imgur.com/mo0C51Q.png'
                hexColor = '#a6e4e2'
                proficientIn = [axe, brawling]
                weakTo = [bow, reason, authority]
                buddingTalent = 'N/A'
                unlock = 'N/A'
                unlockDescription = 'N/A'
                break;
            case 'Bernadetta':
            case 'bernadetta':
                name = 'Bernadetta'
                thumbnail = 'https://i.imgur.com/xowUlBr.png'
                hexColor = '#a080a8'
                proficientIn = [lance, bow]
                weakTo = [sword, axe, brawling, heavyArmor]
                buddingTalent = riding
                unlock = 'Pass'
                unlockDescription = 'Allows unit to pass through spaces occupied by foes.'
                break;
            case 'Dorothea':
            case 'dorothea':
                name = 'Dorothea'
                thumbnail = 'https://i.imgur.com/S3FNa04.png'
                hexColor = '#7b585b'
                proficientIn = [sword, reason]
                weakTo = [faith, riding, flying]
                buddingTalent = faith
                unlock = 'White Magic Avoid +20'
                unlockDescription = 'Grants Avo +20 when using white magic.'
                break;
            case 'Petra':
            case 'petra':
                name = 'Petra'
                thumbnail = 'https://i.imgur.com/ZfvRIX6.png'
                hexColor = '#824364'
                proficientIn = [sword, axe, bow, flying]
                weakTo = [reason, faith]
                buddingTalent = 'N/A'
                unlock = 'N/A'
                unlockDescription = 'N/A'
                break;
            case 'Dimitri':
            case 'dimitri':
                name = 'Dimitri'
                thumbnail = 'https://i.imgur.com/Ddl1C8a.png'
                hexColor = '#fcfba8'
                proficientIn = [sword, lance, authority]
                weakTo = [axe, reason]
                buddingTalent = riding
                unlock = 'Seal Movement'
                unlockDescription = 'If unit damages foe during combat, foe suffers Mv -1 for 1 turn after combat.'
                break;
            case 'Dedue':
            case 'dedue':
                name = 'Dedue'
                thumbnail = 'https://i.imgur.com/quIqslt.png'
                hexColor = '#e8e9e2'
                proficientIn = [lance, axe, brawling, heavyArmor]
                weakTo = [faith, riding, flying]
                buddingTalent = 'N/A'
                unlock = 'N/A'
                unlockDescription = 'N/A'
                break;
            case 'Felix':
            case 'felix':
                name = 'Felix'
                thumbnail = 'https://i.imgur.com/YJcGEiK.png'
                hexColor = '#403f64'
                proficientIn = [sword, bow, brawling]
                weakTo = [reason, authority]
                buddingTalent = reason
                unlock = 'Black Magic Crit +10'
                unlockDescription = 'Grants Crit +10 when using black magic.'
                break;
            case 'Ashe':
            case 'ashe':
                name = 'Ashe'
                thumbnail = 'https://i.imgur.com/L4iJ8Ug.png'
                hexColor = '#b5bdc6'
                proficientIn = [axe, bow]
                weakTo = [reason]
                buddingTalent = lance
                unlock = 'Shatter Smash'
                unlockDescription = 'Enemies hit by this attack suffer -5 Def for 1 turn.'
                break;
            case 'Sylvain':
            case 'sylvain':
                name = 'Sylvain'
                thumbnail = 'https://i.imgur.com/77T2SRt.png'
                hexColor = '#e06c53'
                proficientIn = [lance, axe, riding]
                weakTo = [bow]
                buddingTalent = reason
                unlock = 'Black Magic Avo +20'
                unlockDescription = 'Grants Avo +20 when using black magic.'
                break;
            case 'Mercedes':
            case 'mercedes':
                name = 'Mercedes'
                thumbnail = 'https://i.imgur.com/y1BWI7T.png'
                hexColor = '#f4dcc4'
                proficientIn = [reason, faith]
                weakTo = [sword, lance, axe, heavyArmor]
                buddingTalent = bow
                unlock = 'Waning Shot'
                unlockDescription = 'Enemies hit by this attack suffer -5 Str for 1 turn.'
                break;
            case 'Annette':
            case 'annette':
                name = 'Annette'
                thumbnail = 'https://i.imgur.com/lnE7TRE.png'
                hexColor = '#f6a67d'
                proficientIn = [axe, reason, authority]
                weakTo = [bow, heavyArmor]
                buddingTalent = "N/A"
                unlock = 'N/A'
                unlockDescription = 'N/A'
                break;
            case 'Ingrid':
            case 'ingrid':
                name = 'Ingrid'
                thumbnail = 'https://i.imgur.com/t8fCo54.png'
                hexColor = '#f8e5a0'
                proficientIn = [sword, lance, riding, flying]
                weakTo = ["Nothing"]
                buddingTalent = "N/A"
                unlock = 'N/A'
                unlockDescription = 'N/A'
                break;
            case 'claude':
            case 'Claude':
                name = 'Claude'
                thumbnail = 'https://i.imgur.com/A4i8b9Z.png'
                hexColor = '#4a4240'
                proficientIn = [sword, bow, authority, flying]
                weakTo = [lance, faith]
                buddingTalent = axe
                unlock = 'Diamond Axe'
                unlockDescription = 'A powerful attack that greatly increases Mt.'
                break;
            case 'Hilda':
            case 'hilda':
                name = 'Hilda'
                thumbnail = 'https://i.imgur.com/zoScHRC.png'
                hexColor = '#fcafb7'
                proficientIn = [lance, axe]
                weakTo = [faith, authority]
                buddingTalent = heavyArmor
                unlock = 'Seal Speed'
                unlockDescription = 'If unit damages foe during combat, foe suffers Spd -6 for 1 turn after combat.'
                break;
            case 'Lorenz':
            case 'lorenz':
                name = 'Lorenz'
                thumbnail = 'https://i.imgur.com/uYopDET.png'
                hexColor = '#7373ac'
                proficientIn = [lance, reason, riding]
                weakTo = [brawling]
                buddingTalent = 'N/A'
                unlock = 'N/A'
                unlockDescription = 'N/A'
                break;
            case 'Raphael':
            case 'raphael':
                name = 'Raphael'
                thumbnail = 'https://i.imgur.com/MB3wRvI.png'
                hexColor = '#f0d9a1'
                proficientIn = [axe, brawling]
                weakTo = [bow, reason, riding]
                buddingTalent = 'N/A'
                unlock = 'N/A'
                unlockDescription = 'N/A'
                break;
            case 'Ignatz':
            case 'ignatz':
                name = 'Ignatz'
                thumbnail = 'https://i.imgur.com/TUREZkF.png'
                hexColor = '#c6c69d'
                proficientIn = [sword, bow, authority]
                weakTo = [flying]
                buddingTalent = reason
                unlock = 'Seal Strength'
                unlockDescription = 'If unit damages foe during combat, foe suffers Str -6 for 1 turn after combat.'
                break;
            case 'Lysithea':
            case 'lysithea':
                name = 'Lysithea'
                thumbnail = 'https://i.imgur.com/EIm3Zof.png'
                hexColor = '#fefcfd'
                proficientIn = [reason, faith, authority]
                weakTo = [sword, lance, axe, heavyArmor]
                buddingTalent = sword
                unlock = 'Soulblade'
                unlockDescription = 'A magic attack. Mt increases based on unit’s Res.'
                break;
            case 'Marianne':
            case 'marianne':
                name = 'Marianne'
                thumbnail = 'https://i.imgur.com/OyUl9he.png'
                hexColor = '#aad0fa'
                proficientIn = [sword, faith, riding, flying]
                weakTo = [brawling, heavyArmor]
                buddingTalent = lance
                unlock = 'Frozen Lance'
                unlockDescription = 'A magic attack. Mt increases based on unit’s Dex.'
                break;
            case 'Leonie':
            case 'leonie':
                name = 'Leonie'
                thumbnail = 'https://i.imgur.com/yZxvJG4.png'
                hexColor = '#f17d5b'
                proficientIn = [lance, bow, riding]
                weakTo = ["Nothing"]
                buddingTalent = "N/A"
                unlock = 'N/A'
                unlockDescription = 'N/A'
                break;
            case 'Flayn':
            case 'flayn':
            case 'cethleann':
            case 'Cethleann':
                name = 'Flayn'
                thumbnail = 'https://i.imgur.com/1PcDmnL.png'
                hexColor = '#9ae5b9'
                proficientIn = [lance, faith]
                weakTo = [heavyArmor, riding]
                buddingTalent = reason
                unlock = 'Seal Magic'
                unlockDescription = 'If unit damages foe during combat, foe suffers Mag -6 for 1 turn after combat.'
                break;
            case 'Seteth':
            case 'seteth':
            case 'Cichol':
            case 'cichol':
                name = 'Seteth'
                thumbnail = 'https://i.imgur.com/s35oLUZ.png'
                hexColor = '#71bea4'
                proficientIn = [sword, lance, axe, authority, flying]
                weakTo = [riding]
                buddingTalent = 'N/A'
                unlock = 'N/A'
                unlockDescription = 'N/A'
                break;
            case 'Cyril':
            case 'cyril':
                name = 'Cyril'
                thumbnail = 'https://i.imgur.com/Oss58fD.png'
                hexColor = '#453d3b'
                proficientIn = [lance, axe, bow, riding, flying]
                weakTo = [reason, faith]
                buddingTalent = 'N/A'
                unlock = 'N/A'
                unlockDescription = 'N/A'
                break;
            case 'Anna':
            case 'anna':
                name = 'Anna'
                thumbnail = 'https://i.imgur.com/d2dCJxN.png'
                hexColor = '#d85e77'
                proficientIn = [sword, axe, bow, faith]
                weakTo = [reason, authority]
                buddingTalent = riding
                unlock = 'Pass'
                unlockDescription = 'Allows unit to pass through spaces occupied by foes.'
                break;
            case 'Jeritza':
            case 'jeritza':
            case 'Emile':
            case 'emile':
                name = 'Jeritza'
                thumbnail = 'https://i.imgur.com/SSXUCCn.png'
                hexColor = '#f4dcc4'
                proficientIn = [sword, lance, brawling, riding]
                weakTo = [faith, authority]
                buddingTalent = flying
                unlock = 'Darting Blow'
                unlockDescription = 'If unit initiates combat, grants AS +6 during combat'
                break;
            case 'Hanneman':
            case 'hanneman':
                name = 'Hanneman'
                thumbnail = 'https://i.imgur.com/fCG6C12.png'
                hexColor = '#969794'
                proficientIn = [bow, reason, riding]
                weakTo = [heavyArmor, flying]
                buddingTalent = 'N/A'
                unlock = 'N/A'
                unlockDescription = 'N/A'
                break;
            case 'Manuela':
            case 'manuela':
                name = 'Manuela'
                thumbnail = 'https://i.imgur.com/af5exR9.png'
                hexColor = '#b09b80'
                proficientIn = [sword, faith, flying]
                weakTo = [reason, heavyArmor]
                buddingTalent = 'N/A'
                unlock = 'N/A'
                unlockDescription = 'N/A'
                break;
            case 'Gilbert':
            case 'gilbert':
            case 'Gustave':
            case 'gustave':
                name = 'Gilbert'
                thumbnail = 'https://i.imgur.com/wyHkiIQ.png'
                hexColor = '#f7a77e'
                proficientIn = [lance, axe, heavyArmor, riding]
                weakTo = ["Nothing"]
                buddingTalent = 'N/A'
                unlock = 'N/A'
                unlockDescription = 'N/A'
                break;
            case 'Alois':
            case 'alois':
                name = 'Alois'
                thumbnail = 'https://i.imgur.com/Mz2eAuu.png'
                hexColor = '#857a67'
                proficientIn = [axe, brawling, heavyArmor]
                weakTo = [reason, flying]
                buddingTalent = 'N/A'
                unlock = 'N/A'
                unlockDescription = 'N/A'
                break;
            case 'Catherine':
            case 'catherine':
            case 'Cassandra':
            case 'cassandra':
                name = 'Catherine'
                thumbnail = 'https://i.imgur.com/7mK0y1K.png'
                hexColor = '#f8ebc9'
                proficientIn = [sword, brawling]
                weakTo = [reason]
                buddingTalent = 'N/A'
                unlock = 'N/A'
                unlockDescription = 'N/A'
                break;
            case 'Shamir':
            case 'shamir':
                name = 'Shamir'
                thumbnail = 'https://i.imgur.com/gK1Iz5F.png'
                hexColor = '#57587e'
                proficientIn = [lance, bow]
                weakTo = [faith]
                buddingTalent = 'N/A'
                unlock = 'N/A'
                unlockDescription = 'N/A'
                break;
            case 'yuri':
            case 'Yuri':
                name = 'Yuri'
                thumbnail = 'https://i.imgur.com/Paxgdl2.png'
                hexColor = '#afacdb'
                proficientIn = [sword, reason, faith, authority]
                weakTo = [lance, axe, riding, flying]
                buddingTalent = bow
                unlock = 'Deadeye'
                unlockDescription = 'A bow attack with a long range.'
                break;
            case 'hapi':
            case 'Hapi':
                name = 'Hapi'
                thumbnail = 'https://i.imgur.com/r5qfcC9.png'
                hexColor = '#dc5f65'
                proficientIn = [reason, riding, flying]
                weakTo = [brawling, authority, heavyArmor]
                buddingTalent = axe
                unlock = 'Exhaustive Strike'
                unlockDescription = 'An attack that consumes all remaining durability and adds 30% of it to Mt.'
                break;
            case 'Balthus':
            case 'balthus':
                name = 'Balthus'
                thumbnail = 'https://i.imgur.com/AUfVNC2.png'
                hexColor = '#5f5c6f'
                proficientIn = [sword, axe, brawling, faith, heavyArmor]
                weakTo = [lance, bow, flying]
                buddingTalent = reason
                unlock = 'Black Magic Crit +10'
                unlockDescription = 'Grants Crit +10 when using black magic.'
                break;
            case 'constance':
            case 'Constance':
                name = 'Constance'
                thumbnail = 'https://i.imgur.com/n7XHQLu.png'
                hexColor = '#fffebb'
                proficientIn = [sword, reason, authority, flying]
                weakTo = [axe, heavyArmor]
                buddingTalent = brawling
                unlock = 'Mystic Blow'
                unlockDescription = 'A magic attack; Deals magic-based damage.'
                break;
            default:
                name = "N/A"
          }

          if(name == "N/A") {
              return "Not a playable unit"
          } else {
              unitProfEmbed
               .setAuthor(name)
               .setColor(hexColor)
               .setThumbnail(thumbnail)
               .addField(`${profUp} Proficient In`, proficientIn.join(" "))
               .addField(`${profDown} Weak To`, weakTo.join(" "))
               .addField(`${buddingTalentEmote} Budding Talent`, `${buddingTalent}`)
               .addField('Unlock', unlock)
               .addField('Unlock Description', unlockDescription)

            return unitProfEmbed
          }
          
          
    }
        
    async run(msg, [unit]) {
        let result = this.verifyUnit(unit);
        msg.send(result);
    }
};