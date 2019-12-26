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

            // Gauntlet Combat Arts
            case "Draining Blow":
                name = "Draining Blow"
                might = 5
                hit = 20
                crit = "N/A"
                range = 1
                durCost = 3
                desc = "Restores HP equal to 50% of the damage inflicted to the enemy."
                image = 'https://i.imgur.com/srjf2mU.png'
                characters = ['Byleth and Raphael at C+ and A Brawling respectively.']
                break;
            case "Mighty Blow":
                name = "Mighty Blow"
                might = 10
                hit = -5
                crit = 20
                range = 1
                durCost = 3
                desc = "Restores HP equal to 50% of the damage inflicted to the enemy."
                image = 'https://i.imgur.com/srjf2mU.png'
                characters = ['Alois, Dedue, and Caspar with an A rank in Brawling.']
                break;
            case "Bombard":
                name = "Bombard"
                might = 3
                hit = "N/A"
                crit = 10
                range = 1
                durCost = 3
                desc = "Triggers 2 consecutive hits."
                image = 'https://i.imgur.com/srjf2mU.png'
                characters = ['Caspar and Catherine at C+ and A brawling respectively.']
                break;
            case "Rushing Blow":
                name = "Rushing Blow"
                might = 7
                hit = 20
                crit = "N/A"
                range = 1
                durCost = 3
                desc = "Avoid +10; after combat, user moves 1 space in front of the enemy."
                image = 'https://i.imgur.com/srjf2mU.png'
                characters = ['Anyone with a C rank in Brawling.']
                break;
            case "Fading Blow":
                name = "Fading Blow"
                might = 6
                hit = 10
                crit = "N/A"
                range = 1
                durCost = 3
                desc = "Avoid +30; after combat, user moves 1 space backwards."
                image = 'https://i.imgur.com/srjf2mU.png'
                characters = ['Anyone with a D rank in Brawling.']
                break;
            case "Mystic Blow":
                name = "Mystic Blow"
                might = 10
                hit = 10
                crit = "N/A"
                range = 1
                durCost = 3
                desc = "Deals magic-based damage."
                image = 'https://i.imgur.com/srjf2mU.png'
                characters = ['Byleth and Felix with an A rank in Brawling.']
                break;
            case "Nimble Combo":
                name = "Nimble Combo"
                might = 10
                hit = "N/A"
                crit = "N/A"
                range = 1
                durCost = 3
                desc = "Avoid +20; triggers 2 consecutive hits."
                image = 'https://i.imgur.com/srjf2mU.png'
                characters = ['Catherine and Felix with a C+ rank in Brawling.']
                break;
            case "One-Two Punch":
                name = "One-Two Punch"
                might = 8
                hit = 20
                crit = "N/A"
                range = 1
                durCost = 4
                desc = "Triggers a follow-up attack."
                image = 'https://i.imgur.com/srjf2mU.png'
                characters = ['Alois and Dedue with a C+ rank in Brawling.']
                break;
            case "Monster Crusher":
                name = "Monster Crusher"
                might = 13
                hit = 10
                crit = 10
                range = 1
                durCost = 4
                desc = "Effective against Monster foes."
                image = 'https://i.imgur.com/srjf2mU.png'
                characters = ['Raphael with a C+ rank in Brawling.']
                break;
            case "Fierce Iron Fist":
                name = "Fierce Iron Fist"
                might = 1
                hit = "N/A"
                crit = 10
                range = 1
                durCost = 5
                desc = "Grappler only; triggers 3 consecutive hits."
                image = 'https://i.imgur.com/srjf2mU.png'
                characters = ['Any male with Grappler Class Mastery']
                break;

            // Other Combat Arts
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