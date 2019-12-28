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

        let name = '', thumbnail = "", reasonSpells = [], faithSpells = [], hexColor = ''

        switch(unit) {
            case 'BylethM':
            case 'bylethm':
                name = 'Byleth'
                thumbnail = 'https://i.imgur.com/6WmePDH.png'
                hexColor = '#4a7588'
                reasonSpells = ["Fire (D)",	"Thunder (D+)",	"Bolganone (C)", "Ragnarok (A)"]
                faithSpells = ["Heal (D)", "Nosferatu (D+)", "Recover (C)", "Aura (A)"]
                break;
            case 'BylethF':
            case 'bylethf':
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
                hexColor = '#feb472'
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
            case 'Dedue':
            case 'dedue':
            case 'Felix':
            case 'felix':
            case 'Ashe':
            case 'ashe':
            case 'Sylvain':
            case 'sylvain':
            case 'Mercedes':
            case 'mercedes':
            case 'Annette':
            case 'annette':
            case 'Ingrid':
            case 'ingrid':
            case 'Claude':
            case 'claude':
            case 'Hilda':
            case 'hilda':
                
              break;
            case 'Lorenz':
            case 'lorenz':
            case 'Raphael':
            case 'raphael':
            case 'Ignatz':
            case 'ignatz':
            case 'Lysithea':
            case 'lysithea':
            case 'Marianne':
            case 'marianne':
            case 'Leonie':
            case 'leonie':
            case 'Flayn':
            case 'flayn':
            case 'Seteth':
            case 'seteth':
                
              break;
            case 'Cyril':
            case 'cyril':
            case 'Anna':
            case 'anna':
            case 'Jeritza':
            case 'jeritza':
            case 'Hanneman':
            case 'hanneman':
            case 'Manuela':
            case 'manuela':
            case 'Gilbert':
            case 'gilbert':
            case 'Alois':
            case 'alois':
            case 'Catherine':
            case 'catherine':
            case 'Shamir':
            case 'shamir':
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
               .addField('Reason Spells', reasonSpells.join(", "))
               .addField('Faith Spells', faithSpells.join(", "))

            return unitSpellsEmbed
          }
    }
        
    async run(msg, [unit]) {
        let result = this.verifyUnit(unit);
        msg.send(result);
    }
};