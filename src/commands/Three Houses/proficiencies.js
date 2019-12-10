const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['skilllevel'],
            description: 'Replies with information about specific units\' proficiencies from Fire Emblem Three Houses',
            extendedHelp: 'This command contains spoilers for Fire Emblem Three Houses!',
            usage: '<unit:string>'
        });

        let customResponse = this.customizeResponse('unit',
            'You must enter a valid unit!');

        // this.createCustomResolver('unit', (unit, possible, msg) =>
		// 	arg ? this.client.arguments.get('unit').run(unit, possible, msg) : customResponse);
    }

    verifyUnit(unit) {
        const unitProfEmbed = new MessageEmbed()

        let name = '', thumbnail = '', hexColor = '', proficientIn = [], weakTo = [], buddingTalent, unlock = '', unlockDescription = '';
        const sword = this.client.emojis.find(emoji => emoji.name === "sword");
        const axe = this.client.emojis.find(emoji => emoji.name === "axe");
        const fighting = this.client.emojis.find(emoji => emoji.name === "fighting");
        const lance = this.client.emojis.find(emoji => emoji.name === "lance");
        const bow = this.client.emojis.find(emoji => emoji.name === "bow");
        const reason = this.client.emojis.find(emoji => emoji.name === "reason");
        const faith = this.client.emojis.find(emoji => emoji.name === "faith");
        const buddingTalentEmote = this.client.emojis.find(emoji => emoji.name === "buddingtalent");
        const authority = this.client.emojis.find(emoji => emoji.name === "authority");
        const heavyArmor = this.client.emojis.find(emoji => emoji.name === "heavyarmor");
        const riding = this.client.emojis.find(emoji => emoji.name === "riding");
        const flying = this.client.emojis.find(emoji => emoji.name === "flying");

        switch(unit) {
            case 'BylethM':
            case 'bylethm':
                name = 'Byleth'
                thumbnail = 'https://i.imgur.com/6WmePDH.png'
                hexColor = '#4a7588'
                proficientIn = [sword, fighting, authority]
                weakTo = ["Nothing"]
                buddingTalent = faith
                unlock = 'White Magic Avoid +20'
                unlockDescription = 'Grants Avo +20 when using white magic.'
                break;
            case 'BylethF':
            case 'bylethf': 
                name = 'Byleth'
                thumbnail = 'https://i.imgur.com/ZCGC8Jk.png'
                hexColor = '#4a7588'
                proficientIn = [sword, fighting, authority]
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
                proficientIn = [sword, fighting, authority]
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
                name = 'Ferdinand'
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
                weakTo = [axe, fighting]
                buddingTalent = 'N/A'
                unlock = 'N/A'
                unlockDescription = 'N/A'
                break;
            case 'Caspar':
            case 'caspar':
                name = 'Caspar'
                thumbnail = 'https://i.imgur.com/mo0C51Q.png'
                hexColor = '#a6e4e2'
                proficientIn = [axe, fighting]
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
                weakTo = [sword, axe, fighting, heavyArmor]
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
                proficientIn = [lance, axe, fighting, heavyArmor]
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
                proficientIn = [sword, bow, fighting]
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
            // case 'Annette':
            // case 'annette':

            // case 'Ingrid':
            // case 'ingrid':

            // case 'claude':
            // case 'Claude':
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
                thumbnail = 'https://i.imgur.com/s35oLUZ.png'
                hexColor = '#71bea4'
                proficientIn = [sword, lance, axe, authority, flying]
                weakTo = [riding]
                buddingTalent = 'N/A'
                unlock = 'N/A'
                unlockDescription = 'N/A'
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
          }

          unitProfEmbed
               .setAuthor(name)
               .setColor(hexColor)
               .setThumbnail(thumbnail)
               .addField('Proficient In', proficientIn.join(" "))
               .addField('Weak To', weakTo.join(" "))
               .addField('Budding Talent', `${buddingTalentEmote} ${buddingTalent}`)
               .addField('Unlock', unlock)
               .addField('Unlock Description', unlockDescription)

          return unitProfEmbed
    }
        
    async run(msg, [unit]) {
        let result = this.verifyUnit(unit);
        msg.send(result);
    }
};