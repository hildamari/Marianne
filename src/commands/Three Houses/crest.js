const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Replies with information about specific crests',
            extendedHelp: 'This command contains spoilers for Fire Emblem Three Houses!',
            usage: '<crest:string>'
        });

        this.customizeResponse('crest',
            'You must enter a valid crest!');
    }

    verifyCrest(crest) {
        const crestEmbed = new MessageEmbed()
        let name = '', thumbnail = '', description = '', majorBearer = '', minorBearer = '', legendaryWeapons = [], crestItem = '', effect = ''
        switch(crest) {
            case 'Ernest':
            case 'ernest':
                name = "Ernest"
                thumbnail = 'https://i.imgur.com/eIjbZV8.png'
                description = "A Crest long lost to history"
                effect = 'Occasionally stops enemy counterattacks when using a weapon'
                majorBearer = 'Anna'
                minorBearer = 'N/A'
                legendaryWeapons = ["N/A"]
                crestItem = 'Thorn Dragon Sign'
                break;
            case 'macuil':
            case 'Macuil':
                name = "Macuil"
                thumbnail = 'https://i.imgur.com/oWNE7Rm.png'
                description = "Legend has it that Saint Macuil bore this Crest. A symbol of magic and mastery of the wind"
                effect = 'Occasionally raises Mt during magic attacks'
                majorBearer = '||The Wind Caller||'
                minorBearer = 'N/A'
                legendaryWeapons = ["Sword of Begalta"]
                crestItem = 'Wind Dragon Sign'
                break;
            case 'dominic':
            case 'Dominic':
                name = "Dominic"
                thumbnail = 'https://i.imgur.com/BX6TRCK.png'
                description = "House Dominic’s Crest, inherited from Dominic of the 10 Elites"
                effect = 'Occasionally conserves uses of attack magic.'
                majorBearer = 'N/A'
                minorBearer = 'Annette'
                legendaryWeapons = ["Crusher"]
                crestItem = 'Crusher Dragon Sign'
                break;
            case 'seiros':
            case 'Seiros':
                name = "Seiros"
                thumbnail = 'https://i.imgur.com/c1lZgG0.png'
                description = "Legend has it that Saint Seiros bore this Crest and passed it down through House Hresvelg."
                effect = 'Occasionally raises Mt when using combat arts.'
                majorBearer = 'Rhea, Jeralt'
                minorBearer = 'Edelgard'
                legendaryWeapons = ["Sword of Seiros", "Aymr", "Seiros Shield"]
                crestItem = 'Sky Dragon Sign'
                break;
            case 'fraldarius':
            case 'Fraldarius':
                name = "Fraldarius"
                thumbnail = 'https://i.imgur.com/qSPvDSK.png'
                description = "House Fraldarius’s Crest, inherited from Fraldarius of the 10 Elites"
                effect = 'Sometimes raises Mt when using a weapon.'
                majorBearer = 'Felix'
                minorBearer = 'Rodrigue'
                legendaryWeapons = ["Aegis Shield", "Sword of Moralta"]
                crestItem = 'Shield Dragon Sign'
                break;
            case 'cethleann':
            case 'Cethleann':
                name = "Cethleann"
                thumbnail = 'https://i.imgur.com/xqJCNk2.png'
                description = "Legend has it that Saint Cethleann bore this Crest. A symbol of kindness and mastery of light"
                effect = 'Sometimes raises Mt when using recovery magic.'
                majorBearer = 'Flayn'
                minorBearer = 'Linhardt'
                legendaryWeapons = ["Caduceus Staff"]
                crestItem = 'Light Dragon Sign'
                break;
            case 'noa':
            case 'Noa':
                name = "Noa"
                thumbnail = 'https://i.imgur.com/evSVJm2.png'
                description = "A Crest long lost to history"
                effect = 'Occasionally does not consume a use during magic attacks.'
                majorBearer = 'Constance'
                minorBearer = 'N/A'
                legendaryWeapons = ["Dark Creator Sword"]
                crestItem = 'Bloom Dragon Sign'
                break;
            case 'lamine':
            case 'Lamine':
                name = "Lamine"
                thumbnail = 'https://i.imgur.com/jEKNUHc.png'
                description = "A Crest inherited from Lamine of the 10 Elites."
                effect = 'Occasionally conserves uses of recovery magic.'
                majorBearer = 'N/A'
                minorBearer = 'Mercedes, Jeritza'
                legendaryWeapons = ["Rafail Gem", "Tathlum Bow"]
                crestItem = 'Aegis Dragon Sign'
                break;
            case 'chevalier':
            case 'Chevalier':
                name = "Chevalier"
                thumbnail = 'https://i.imgur.com/69c3g0V.png'
                description = "A Crest long lost to history."
                effect = 'Sometimes restores HP equal to 30% of damage dealt when using Combat Arts.'
                majorBearer = 'Balthus'
                minorBearer = 'N/A'
                legendaryWeapons = ["Vajra-Mushti"]
                crestItem = 'Snow Dragon Sign'
                break;
            case 'riegan':
            case 'Riegan':
                name = "Riegan"
                thumbnail = 'https://i.imgur.com/1HpDxsb.png'
                description = "A Crest inherited from Riegan of the 10 Elites"
                effect = 'Sometimes restores HP equal to 30% of damage dealt when using combat arts'
                majorBearer = 'N/A'
                minorBearer = 'Claude'
                legendaryWeapons = ["Failnaught", "Sword of Begalta"]
                crestItem = 'Star Dragon Sign'
                break;
            case 'timotheos':
            case 'Timotheos':
                name = "Timotheos"
                thumbnail = 'https://i.imgur.com/8FQ8B7p.png'
                description = "A Crest long lost to history."
                effect = 'Occasionally does not consume a use for recovery magic.'
                majorBearer = 'Hapi'
                minorBearer = 'N/A'
                legendaryWeapons = ["Dark Creator Sword"]
                crestItem = 'Dark Dragon Sign'
                break;
            case 'charon':
            case 'Charon':
                name = "Charon"
                thumbnail = 'https://i.imgur.com/kLzNFxT.png'
                description = "House Charon’s Crest, inherited from Charon of the 10 Elites."
                effect = 'Occasionally raises Mt when using combat arts.'
                majorBearer = 'Catherine'
                minorBearer = 'Lysithea'
                legendaryWeapons = ["Thunderbrand"]
                crestItem = 'Lightning Dragon Sign'
                break;
            case 'maurice':
            case 'Maurice':
            case 'The Beast':
            case 'the beast':
                name = "Maurice's Crest (Crest of the Beast)"
                thumbnail = 'https://i.imgur.com/6AmOphl.png'
                description = "The Crest of a Hero whose identity was lost to history. Promises contempt for those who bear it."
                effect = 'Sometimes raises Mt when using a weapon.'
                majorBearer = '||Wandering Beast||'
                minorBearer = 'Marianne'
                legendaryWeapons = ["Blutgang"]
                crestItem = 'Storm Dragon Sign'
                break;
            case 'indech':
            case 'Indech':
                name = "Indech"
                thumbnail = 'https://i.imgur.com/ycgUoVJ.png'
                description = "Legend has it that Saint Indech bore this Crest. A symbol of wisdom and water"
                effect = 'Occasionally allows weapon attacks to strike twice'
                majorBearer = '||The Immovable||'
                minorBearer = 'Bernadetta, Hanneman'
                legendaryWeapons = ["The Inexhaustible"]
                crestItem = 'Water Dragon Sign'
                break;
            case 'aubin':
            case 'Aubin':
                name = "Aubin"
                thumbnail = 'https://i.imgur.com/ycgUoVJ.png'
                description = "A Crest long lost to history."
                effect = 'Occasionally prevents enemy counterattacks when using a weapon.'
                majorBearer = 'Yuri'
                minorBearer = 'N/A'
                legendaryWeapons = ["N/A"]
                crestItem = 'Ice Dragon Sign'
                break;
            case 'cichol':
            case 'Cichol':
                name = "Cichol"
                thumbnail = 'https://i.imgur.com/cbze1d5.png'
                description = "Legend has it that Saint Cichol bore this Crest. A symbol of strength and the land."
                effect = 'Sometimes lets combat arts prevent enemy counterattacks.'
                majorBearer = 'Seteth'
                minorBearer = 'Ferdinand'
                legendaryWeapons = ["Spear of Assal", "Ochain Shield"]
                crestItem = 'Earth Dragon Sign'
                break;
            case 'goneril':
            case 'Goneril':
                name = "Goneril"
                thumbnail = 'https://i.imgur.com/xf4JKXZ.png'
                description = "House Goneril’s Crest, inherited from Goneril of the 10 Elites"
                effect = 'Sometimes allows combat arts to prevent enemy counterattacks.'
                majorBearer = 'N/A'
                minorBearer = 'Hilda'
                legendaryWeapons = ["Freikugel"]
                crestItem = 'Kalpa Dragon Sign'
                break;
            case 'gautier':
            case 'Gautier':
                name = "Gautier"
                thumbnail = 'https://i.imgur.com/stU2nE8.png'
                description = "House Gautier’s Crest, inherited from Gautier of the 10 Elites"
                effect = 'Occasionally raises Mt when using combat arts'
                majorBearer = 'N/A'
                minorBearer = 'Sylvain'
                legendaryWeapons = ["Lance of Ruin"]
                crestItem = 'Fissure Dragon Sign'
                break;
            case 'flames':
            case 'Flames':
            case 'of Flames':
            case 'of flames':
                name = "Flames"
                thumbnail = 'https://i.imgur.com/nBEWjAw.png'
                description = "The Crest of the goddess who governs the world"
                effect = 'Occasionally restores HP equal to 30% of damage dealt. Rarely raises Mt and stops counterattacks'
                majorBearer = 'Byleth, Edelgard'
                minorBearer = 'N/A'
                legendaryWeapons = ["Sword of the Creator", "Dark Creator Sword"]
                crestItem = 'N/A'
                break;
            case 'gloucester':
            case 'Gloucester':
                name = "Gloucester"
                thumbnail = 'https://i.imgur.com/fYFg4NP.png'
                description = "House Gloucester’s Crest, inherited from Gloucester of the 10 Elites"
                effect = 'Occasionally raises Mt during magic attacks'
                majorBearer = 'Lysithea'
                minorBearer = 'Lorenz'
                legendaryWeapons = ["Thyrsus", "Axe of Ukonvasara"]
                crestItem = 'Craft Dragon Sign'
                break;
            case 'blaiddyd':
            case 'Blaiddyd':
                name = "Blaiddyd"
                thumbnail = 'https://i.imgur.com/ZNoCsFl.png'
                description = "The Faerghus royal family’s Crest, inherited from Blaiddyd of the 10 Elites"
                effect = 'Occasionally doubles Atk and weapon uses for combat arts.'
                majorBearer = 'N/A'
                minorBearer = 'Dimitri'
                legendaryWeapons = ["Areadbhar"]
                crestItem = 'Grim Dragon Sign'
                break;
            case 'daphnel':
            case 'Daphnel':
                name = "Daphnel"
                thumbnail = 'https://i.imgur.com/WFBfRaJ.png'
                description = "House Daphnel and House Galatea’s Crest, inherited from Daphnel of the 10 Elites."
                effect = 'Sometimes raises Mt when using combat arts.'
                majorBearer = 'N/A'
                minorBearer = 'Ingrid'
                legendaryWeapons = ["Lúin"]
                crestItem = 'Flame Dragon Sign'
                break;
            default:
                name = "N/A"
        }

        if(name == "N/A") {
            return "Not a valid crest"
        } else {
              crestEmbed
                  .setAuthor(name)
                  .setDescription(description)
                  .setThumbnail(thumbnail)
                  .addField("Effect", effect, true)
                  .addField("Major Bearer", majorBearer, true)
                  .addField("Minor Bearer", minorBearer, true)
                  .addField("Legendary Weapon(s)", legendaryWeapons.join(", "), true)
                  .addField("Crest Item", crestItem, true)
                  
              return crestEmbed
          }
    }

    async run(msg, [crest]) {
        let result = this.verifyCrest(crest);
        msg.send(result);
    }
};