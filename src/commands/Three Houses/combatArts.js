const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['combat', 'arts'],
            description: 'Replies with information about specific combat arts from Fire Emblem Three Houses',
            extendedHelp: 'This command contains spoilers for Fire Emblem Three Houses!',
            usage: '<weapon:string>'
        });

        this.customizeResponse('weapon class',
            'You must enter a valid weapon class!');
    }

    verifyUnit(weapon) {
        const weaponEmbed = new MessageEmbed()

        let name = '', might, image = '', hit, crit, range = 0, durCost = 0, desc = '', characters = []

        switch(weapon) {
            case 'Sunder':
                name = "Sunder"
                might = 4
                hit = 'N/A'
                crit = 15
                range = 1
                durCost = 3
                desc = "-"
                image = 'https://i.imgur.com/X2S9pyh.png'
                characters = ['Ferdinand', 'Dimitri', 'Felix']
                break;
            case 'Wrath Strike':
                name = "Wrath Strike"
                might = 5
                hit = 10
                crit = 'N/A'
                range = 1
                durCost = 3
                desc = "-"
                image = 'https://i.imgur.com/X2S9pyh.png'
                characters = ['All']
                break;
            // Grounder
            // Hexblade
            // Windsweep
            // Haze Slice
            // Subdue
            // Bane of Monsters
            // Finesse Blade
            // Soulblade
            // Foudroyant Strike
            // Beast Fang
            // Ruptured Heaven
            // Heaven's Fall
            // Assassinate
            // Astra
            // Sublime Heaven
            // Sword Dance

            // Tempest Lance
            // Shatter Slash
            // Knightkneeler
            // Hit and Run
            // Monster Piercer
            // Lance Jab
            // Vengeance
            // Glowing Ember
            // Swift Strikes
            // Frozen Lance
            // Ruined Sky
            // Atrocity
            // Burning Quake
            // Paraselene

            // Smash
            // Spike
            // Helm Splitter
            // Monster Breaker
            // Diamond Axe
            // Exhaustive Strike
            // Armored Strike
            // Wild Abandon
            // Focused Strike
            // Lightning Axe
            // Apocalypic Flame
            // Dust
            // Raging Storm
            // Flickering Flower
            // War Master's Strike

            // Curved Shot
            // Deadeye
            // Heavy Draw
            // Encloser
            // Ward Arrow
            // Point-Blank Volley
            // Monster Blast
            // Waning Shot
            // Break Shot
            // Schism Shot
            // Fallen Star
            // Hunter's Volley
            // Wind God

            // Draining Blow
            // Mighty Blow
            // Bombard
            // Rushing Blow
            // Fading Blow
            // Mystic Blow
            // Nimble Combo
            // One-Two Punch
            // Monster Crusher
            // Fierce Iron Fist

            // Healing Focus
            case "Healing Focus":
                name = "Healing Focus"
                might = "-"
                hit = "-"
                crit = "-"
                range = 1
                durCost = "-"
                desc = "Restores 50% of the user’s HP."
                image = 'https://i.imgur.com/qYFjYfF.png'
                characters = ['All']
                break;
            case "Swap":
                name = "Swap"
                might = "-"
                hit = "-"
                crit = "-"
                range = 1
                durCost = "-"
                desc = "User swaps places with an adjacent ally."
                image = 'https://i.imgur.com/qYFjYfF.png'
                characters = ['All']
                break;
            case "Shove":
                name = "Shove"
                might = "-"
                hit = "-"
                crit = "-"
                range = 1
                durCost = "-"
                desc = "User pushes ally forward 1 space."
                image = 'https://i.imgur.com/qYFjYfF.png'
                characters = ['All']
                break;
            case "Reposition":
                name = "Reposition"
                might = "-"
                hit = "-"
                crit = "-"
                range = 1
                durCost = "-"
                desc = "User moves ally to the space behind the user."
                image = 'https://i.imgur.com/qYFjYfF.png'
                characters = ['All']
                break;
            case "Draw Back":
                name = "Draw Back"
                might = "-"
                hit = "-"
                crit = "-"
                range = 1
                durCost = "-"
                desc = "User moves 1 space backwards and ally is moved to where the user was previously."
                image = 'https://i.imgur.com/qYFjYfF.png'
                characters = ['All']
                break;
            case "Smite":
                name = "Smite"
                might = "-"
                hit = "-"
                crit = "-"
                range = 1
                durCost = "-"
                desc = "User pushes ally forward 2 spaces."
                image = 'https://i.imgur.com/qYFjYfF.png'
                characters = ['All']
                break;
            case "Triangle Attack":
                name = "Triangle Attack"
                might = 8
                hit = 30
                crit = 40
                range = 1
                durCost = 3
                desc = "Can only be triggered when 3 allied Flying units (including the user) are adjacent to the same enemy."
                image = 'https://i.imgur.com/qYFjYfF.png'
                characters = ['All female characters']
                break;
        }

          weaponEmbed
               .setAuthor(name)
               .setThumbnail(image)
               .addField("Might", might, true)
               .addField("Hit", hit, true)
               .addField("Crit", crit, true)
               .addField("Range", range, true)
               .addField("Durability Cost", durCost, true)
               .addField("Description", desc)
               .addField("Available to", characters.join(", "))

          return weaponEmbed
    }
        
    async run(msg, [weapon]) {
        let result = this.verifyUnit(weapon);
        msg.send(result);
    }
};