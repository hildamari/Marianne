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
            // case 'Raphael':
            // case 'Ignatz':
            // case 'Lysithea':
            // case 'Marianne':
            // case 'Leonie':
            // case 'Flayn':
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
            // case 'Anna':
            // case 'Jeritza':
            // case 'Hanneman':
            // case 'Manuela':
            // case 'Gilbert':
            // case 'Alois':
            // case 'Catherine':
            // case 'Shamir':
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
        // const flayn = this.client.emojis.find(emoji => emoji.name === "Fish");
        // return msg.say(`${flayn} FI-SHY FI-SHY ${flayn}`);
    }
};