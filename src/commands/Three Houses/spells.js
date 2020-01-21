const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Replies with information about specific units\' learned spells from Fire Emblem Three Houses',
            extendedHelp: 'This command contains spoilers for Fire Emblem Three Houses!',
            usage: '<unit:string>'
        });

        this.customizeResponse('unit',
            'You must enter a valid unit!');
    }

    verifyUnit(unit) {
        const unitSpellsEmbed = new MessageEmbed()

        let name = '', thumbnail = "", reasonSpells = [], faithSpells = [], hexColor = '';
        const reason = this.client.emojis.find(emoji => emoji.name === "reason");
        const faith = this.client.emojis.find(emoji => emoji.name === "faith");

        switch(unit) {
            case 'BylethM':
            case 'bylethm':
            case 'bylad':
            case 'Bylad':
                name = 'Byleth'
                thumbnail = 'https://i.imgur.com/6WmePDH.png'
                hexColor = '#4a7588'
                reasonSpells = ["Fire (D)",	"Thunder (D+)",	"Bolganone (C)", "Ragnarok (A)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)", "Aura (A)"]
                break;
            case 'BylethF':
            case 'bylethf':
            case 'bylass':
            case 'Bylass':
                name = 'Byleth'
                thumbnail = 'https://i.imgur.com/ZCGC8Jk.png'
                hexColor = '#4a7588'
                reasonSpells = ["Fire (D)",	"Thunder (D+)",	"Bolganone (C)", "Ragnarok (A)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)", "Aura (A)"]
                break;
            case 'Byleth':
            case 'byleth':
                name = 'Byleth'
                thumbnail = 'https://i.imgur.com/57L1pPh.png'
                hexColor = '#4a7588'
                reasonSpells = ["Fire (D)",	"Thunder (D+)",	"Bolganone (C)", "Ragnarok (A)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)", "Aura (A)"]
                break;
            case 'edelgard':
            case 'Edelgard':
                name = 'Edelgard'
                thumbnail = 'https://i.imgur.com/HQ3yEk4.png'
                hexColor = '#fefff4'
                reasonSpells = ["Fire (D)",	"Bolganone (C)", "Luna Λ (B)", "Hades Ω (A)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)", "Seraphim (B)"]
                break;
            case 'Hubert':
            case 'hubert':
                name = 'Hubert'
                thumbnail = 'https://i.imgur.com/KCc36C6.png'
                hexColor = '#343d3e'
                reasonSpells = ["Miasma Δ (D)",	"Mire Β (D+)", "Banshee Θ (C)",	"Death Γ (B)", "Dark Spikes Τ (A)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)"]
                break;
            case 'Ferdinand':
            case 'ferdinand':
                name = 'Ferdinand von Aegir'
                thumbnail = 'https://i.imgur.com/iKtyabp.png'
                hexColor = '#feb472'
                reasonSpells = ["Thunder (D)", "Fire (D+)",	"Thoron (C)", "Bolganone (B)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Ward (C)", "Restore (B)"]
                break;
            case 'Linhardt':
            case 'linhardt':
                name = 'Linhardt'
                thumbnail = 'https://i.imgur.com/X41XIXq.png'
                hexColor = '#476352'
                reasonSpells = ["Wind (D)",	"Fire (D+)", "Cutting Gale (C)", "Bolganone (B)", "Excalibur (A)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Physic (C)", "Restore (B)", "Warp (A)"]
                break;
            case 'Caspar':
            case 'caspar':
                name = 'Caspar'
                thumbnail = 'https://i.imgur.com/mo0C51Q.png'
                hexColor = '#a6e4e2'
                reasonSpells = ["Fire (D)",	"Bolganone (C)"]
                faithSpells = ["Heal (D)",	"Nosferatu (D+)", "Recover (C)"]
                break;
            case 'Bernadetta':
            case 'bernadetta':
                name = 'Bernadetta'
                thumbnail = 'https://i.imgur.com/xowUlBr.png'
                hexColor = '#a080a8'
                reasonSpells = ["Blizzard (D)", "Thunder (D+)", "Thoron (C)", "Fimbulvetr (A)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Physic (C)", "Rescue (A)"]
                break;
            case 'Dorothea':
            case 'dorothea':
                name = 'Dorothea'
                thumbnail = 'https://i.imgur.com/S3FNa04.png'
                hexColor = '#7b585b'
                reasonSpells = ["Thunder (D)", "Thoron (C)", "Sagittae (B)", "Meteor (A)", "Agnea’s Arrow (A+)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Physic (C)"]
                break;
            case 'Petra':
            case 'petra':
                name = 'Petra'
                thumbnail = 'https://i.imgur.com/ZfvRIX6.png'
                hexColor = '#824364'
                reasonSpells = ["Wind (D)", "Sagittae (C)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Restore (C)"]
                break;
            case 'Dimitri':
            case 'dimitri':
                name = 'Dimitri'
                thumbnail = 'https://i.imgur.com/Ddl1C8a.png'
                hexColor = '#fcfba8'
                reasonSpells = ["Thunder (D)", "Thoron (C)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)", "Aura (A)"]
                break;
            case 'Dedue':
            case 'dedue':
                name = 'Dedue'
                thumbnail = 'https://i.imgur.com/quIqslt.png'
                hexColor = '#e8e9e2'
                reasonSpells = ["Fire (D)", "Bolganone (C)", "Ragnarok (A)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)"]
                break;
            case 'Felix':
            case 'felix':
                name = 'Felix'
                thumbnail = 'https://i.imgur.com/YJcGEiK.png'
                hexColor = '#403f64'
                reasonSpells = ["Thunder (D)", "Thoron (C)"]
                faithSpells = ["Heal (D)", "Noferatu (D+)", "Recover (C)", "Restore (B)"]
                break;
            case 'Ashe':
            case 'ashe':
                name = 'Ashe'
                thumbnail = 'https://i.imgur.com/L4iJ8Ug.png'
                hexColor = '#b5bdc6'
                reasonSpells = ["Wind (D)", "Cutting Gale (C)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Physic (C)"]
                break;
            case 'Sylvain':
            case 'sylvain':
                name = 'Sylvain'
                thumbnail = 'https://i.imgur.com/77T2SRt.png'
                hexColor = '#e06c53'
                reasonSpells = ["Fire (D)", "Bolganone (C)", "Sagittae (B)", "Ragnarok (A)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Physic (C)", "Seraphim (B)"]
                break;
            case 'Mercedes':
            case 'mercedes':
                name = 'Mercedes'
                thumbnail = 'https://i.imgur.com/y1BWI7T.png'
                hexColor = '#f4dcc4'
                reasonSpells = ["Fire (D)", "Thunder (D+)", "Bolganone (C)", "Ragnarok (A)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Physic (C)", "Restore (B)", "Fortify (A)"]
                break;
            case 'Annette':
            case 'annette':
                name = 'Annette'
                thumbnail = 'https://i.imgur.com/lnE7TRE.png'
                hexColor = '#f6a67d'
                reasonSpells = ["Wind (D)", "Cutting Gale (C)", "Sagittae (B)", "Excalibur (A)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)", "Abraxas (A)"]
                break;
            case 'Ingrid':
            case 'ingrid':
                name = 'Ingrid'
                thumbnail = 'https://i.imgur.com/t8fCo54.png'
                hexColor = '#f8e5a0'
                reasonSpells = ["Blizzard (D)", "Thoron (C)", "Fimbulvetr (A)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Physic (C)", "Seraphim (B)"]
                break;
            case 'Claude':
            case 'claude':
                name = 'Claude'
                thumbnail = 'https://i.imgur.com/A4i8b9Z.png'
                hexColor = '#4a4240'
                reasonSpells = ["Wind (D)", "Sagittae (C)", "Cutting Gale (B)", "Excalibur (A)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)", "Silence (A)"]
                break;
            case 'Hilda':
            case 'hilda':
                name = 'Hilda'
                thumbnail = 'https://i.imgur.com/zoScHRC.png'
                hexColor = '#fcafb7'
                reasonSpells = ["Thunder (D)", "Thoron (C)", "Bolting (A)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)"]
                break;
            case 'Lorenz':
            case 'lorenz':
                name = 'Lorenz'
                thumbnail = 'https://i.imgur.com/uYopDET.png'
                hexColor = '#7373ac'
                reasonSpells = ["Fire (D)", "Sagittae (C)", "Ragnarok (B)", "Agnea’s Arrow (A)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)", "Ward (B)"]
                break;
            case 'Raphael':
            case 'raphael':
                name = 'Raphael'
                thumbnail = 'https://i.imgur.com/MB3wRvI.png'
                hexColor = '#f0d9a1'
                reasonSpells = ["Fire (D)", "Bolganone (C)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)"]
                break;
            case 'Ignatz':
            case 'ignatz':
                name = 'Ignatz'
                thumbnail = 'https://i.imgur.com/TUREZkF.png'
                hexColor = '#c6c69d'
                reasonSpells = ["Blizzard (D)", "Cutting Gale (C)", "Fimbulvetr (A)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Physic (C)", "Ward (B)"]
                break;
            case 'Lysithea':
            case 'lysithea':
                name = 'Lysithea'
                thumbnail = 'https://i.imgur.com/EIm3Zof.png'
                hexColor = '#fefcfd'
                reasonSpells = ["Miasma Δ (D)", "Swarm Ζ (D+)", "Luna Λ (C)", "Dark Spikes Τ (B)", "Hades Ω (A)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Seraphim (C)", "Warp (B)", "Abraxas (A)"]
                break;
            case 'Marianne':
            case 'marianne':
                name = 'Marianne'
                thumbnail = 'https://i.imgur.com/OyUl9he.png'
                hexColor = '#aad0fa'
                reasonSpells = ["Blizzard (D)", "Thoron (C)", "Cutting Gale (B)", "Fimbulvetr (A)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Physic (C)", "Silence (B)", "Aura (A)"]
                break;
            case 'Leonie':
            case 'leonie':
                name = 'Leonie'
                thumbnail = 'https://i.imgur.com/yZxvJG4.png'
                hexColor = '#f17d5b'
                reasonSpells = ["Fire (D)", "Bolganone (C)", "Ragnarok (A)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Physic (C)", "Restore (B)"]
                break;
            case 'Flayn':
            case 'flayn':
                name = 'Flayn'
                thumbnail = 'https://i.imgur.com/1PcDmnL.png'
                hexColor = '#9ae5b9'
                reasonSpells = ["Wind (D)", "Fire (D+)", "Cutting Gale (C)", "Excalibur (A)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Restore (C)", "Rescue (B)", "Fortify (A)"]
                break;
            case 'Seteth':
            case 'seteth':
                name = 'Seteth'
                thumbnail = 'https://i.imgur.com/s35oLUZ.png'
                hexColor = '#71bea4'
                reasonSpells = ["Wind (D)", "Cutting Gale (C)", "Bolganone (B)", "Excalibur (A)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)"]
                break;
            case 'Cyril':
            case 'cyril':
                name = 'Cyril'
                thumbnail = 'https://i.imgur.com/Oss58fD.png'
                hexColor = '#71bea4'
                reasonSpells = ["Wind (D)", "Cutting Gale (C)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)"]
                break;
            case 'Anna':
            case 'anna':
                name = 'Anna'
                thumbnail = 'https://i.imgur.com/d2dCJxN.png'
                hexColor = '#d85e77'
                reasonSpells = ["Fire (D)", "Thunder (D+)", "Meteor (A)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Ward (C)", "Rescue (B)"]
                break;
            case 'Jeritza':
            case 'jeritza':
            case 'Emile':
            case 'emile':
                name = 'Jeritza'
                thumbnail = 'https://i.imgur.com/SSXUCCn.png'
                hexColor = '#f4dcc4'
                reasonSpells = ["Wind (D)", "Sagittae (C)", "Thoron (B)", "Ragnarok (A)", "Meteor (A+)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Restore (C)"]
                break;
            case 'Hanneman':
            case 'hanneman':
                name = 'Hanneman'
                thumbnail = 'https://i.imgur.com/fCG6C12.png'
                hexColor = '#969794'
                reasonSpells = ["Wind (D)", "Sagittae (C)", "Thoron (B)", "Ragnarok (A)", "Meteor (A+)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)", "Ward (B)"]
                break;
            case 'Manuela':
            case 'manuela':
                name = 'Manuela'
                thumbnail = 'https://i.imgur.com/af5exR9.png'
                hexColor = '#b09b80'
                reasonSpells = ["Thunder (D)", "Bolganone (C)", "Bolting (A)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Ward (C)", "Silence (B)", "Warp (A)"]
                break;
            case 'Gilbert':
            case 'gilbert':
            case 'Gustave':
            case 'gustave':
                name = 'Gilbert'
                thumbnail = 'https://i.imgur.com/wyHkiIQ.png'
                hexColor = '#f7a77e'
                reasonSpells = ["Thunder (D)", "Thoron (C)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Ward (C)"]
                break;
            case 'Alois':
            case 'alois':
                name = 'Alois'
                thumbnail = 'https://i.imgur.com/Mz2eAuu.png'
                hexColor = '#857a67'
                reasonSpells = ["Fire (D)", "Bolganone (C)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)"]
                break;
            case 'Catherine':
            case 'catherine':
            case 'Cassandra':
            case 'cassandra':
                name = 'Catherine'
                thumbnail = 'https://i.imgur.com/7mK0y1K.png'
                hexColor = '#f8ebc9'
                reasonSpells = ["Fire (D)", "Bolganone (C)", "Ragnarok (A)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)"]
                break;
            case 'Shamir':
            case 'shamir':
                name = 'Shamir'
                thumbnail = 'https://i.imgur.com/gK1Iz5F.png'
                hexColor = '#57587e'
                reasonSpells = ["Blizzard (D)", "Wind (D+)", "Sagittae (C)", "Fimbulvetr (A)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Physic (C)"]
                break;
            default:
                name = "N/A"
          }

          if(name == "N/A") {
              return "Not a playable unit"
          } else {
              unitSpellsEmbed
               .setAuthor(name)
               .setColor(hexColor)
               .setThumbnail(thumbnail)
               .addField(`${reason} Reason Spells`, reasonSpells.join(", "))
               .addField(`${faith} Faith Spells`, faithSpells.join(", "))

            return unitSpellsEmbed
          }
    }
        
    async run(msg, [unit]) {
        let result = this.verifyUnit(unit);
        msg.send(result);
    }
};